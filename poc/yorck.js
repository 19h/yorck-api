'use strict';

const fs = require('fs');
const https = require('https');

const db = require('../server/util/db').init('yorck');

const Promise = require('bluebird');
const async   = Promise.coroutine;

const _ = require('lodash');

const jsdom = require('jsdom');
const jquery = fs.readFileSync(__dirname + '/jquery.js');

/* Configuration */
const baseURL = 'https://www.yorck.de';

const basePath = {
	host: 'www.yorck.de',
	port: 443
};

const moviePath = _.extend({}, basePath, { path: '/filme' });
const cinemaPath = _.extend({}, basePath, { path: '/kinos' });

const programPath = (movieId, eventId) => ({
	host: 'www.yorck.de',
	port: 443,
	path: `/shows/${movieId}/cinemas.js?eventid=${eventId}&partial=movie`
});

const jsdomWithArgs = (url, isRaw) =>
	new Promise((resolve, reject) => {
		jsdom.env({
			[isRaw ? 'html' : 'url']: url,
			src: [jquery],
			done (err, ctx) {
				if (err) return reject(err);

				resolve(ctx);
			}
		});
	});

const inspectPage = function* (url) {
	return yield jsdomWithArgs(url);
};

const getUrl = config =>
	new Promise((resolve, reject) => {
		let data = new Buffer(0);

		https.request(config, sock => {
			sock.on('data', buf =>
				data = Buffer.concat([data, buf])
			);

			sock.on('end', () => resolve(data.toString()));
			sock.on('error', err => reject(err));
		}).end();
	});

const getSource = function* (url, omitXHRHeader) {
	const config = _.chain(url)
					.cloneDeep()
					.value();

	if (!omitXHRHeader) {
		config.headers = {
			'X-Requested-With': 'XMLHttpRequest'
		};
	}

	return yield getUrl(config);
};

const unescape = text =>
	text.replace(/&(?:amp|lt|gt|quot|#39|#96);/g, chr => ({
		'&amp;': '&',
		'&lt;': '<',
		'&gt;': '>',
		'&quot;': '"',
		'&#39;': '\'',
		'&#96;': '`'
	})[chr]).trim();

class Program {
	constructor(source, cinemas) {
		this.cinemas = cinemas;

		this.shows = [];

		this.thisYear = (new Date).getFullYear();

		this.parseProgram(source);
	}

	matchOrBail (str, rgx) {
		const res = str.match(rgx);

		if (!res) return null;

		return res[1];
	}

	composeDate (day, time) {
		return new Date(`${this.thisYear}-${day.split('.').reverse().join('-')}T${time}:00.000Z`);
	}

	firstGTE(arr, i) {
		const r = arr.map(a => a < i).indexOf(false);

		return (r > -1 ? r : arr.length) - 1;
	}

	parseProgram(source) {
		const sL = source.split('\n');

		if (!sL.some(line => /has\_shows\ \=\ true/.test(line)))
			return null;

		const pSL = sL.filter(line => ~line.indexOf('replaceWith'))[0];

		const bS1 = String(pSL);
		const bS2 = bS1.slice(bS1.indexOf('replaceWith') + 12, -2);

		const bS3 = bS2.split('\\n');
		const _bO3 = bS3.indexOf(bS3.filter(a => ~a.indexOf('movie-program'))[1]);

		const bS4 = bS3.slice(_bO3);

		const cinemas = bS4.filter(line => ~line.indexOf('h3'))
						   .map(line => {
						   		const cinema = line.slice(line.indexOf('text-gold') + 12, -6);
						   		const cinemaId = this.cinemas.name.get(cinema);

						   		return [cinemaId, []];
							});

		const csections = [];

		bS4.filter((a, i) => ~a.indexOf('\\\'row\\\'') && csections.push(i));

		/* program statemachine */

		let currentDay;

		for (let i = 0; i < bS4.length; ++i) {
			const dayOffset = bS4[i].indexOf('p-big');

			if (~dayOffset) {
				currentDay = bS4[i].slice(dayOffset + 8, -8);

				continue;
			}

			const cIndex = this.firstGTE(csections, i);

			let showTime;

			/* strategy 1 */

			const defaultFormat = this.matchOrBail(bS4[i], /\"\>(.*?)\<\\\/a\>/);

			if (~bS4[i].indexOf('ticket-link') && !~bS4[i].indexOf('show-ticket-time') && defaultFormat) {
				cinemas[cIndex][1].push([this.composeDate(currentDay, defaultFormat)]);

				continue;
			}

			/* strategy 2 */

			const extendedFormat = this.matchOrBail(bS4[i], /time\\\'\>(.*?) \</);
			const showSpecialType = this.matchOrBail(bS4[i], /lang\\\'\>(.*?)\</);

			if (extendedFormat) {
				cinemas[cIndex][1].push([this.composeDate(currentDay, extendedFormat), showSpecialType]);

				continue;
			}
		}

		this.program = cinemas;
	}

	static fromSource(source, cinemas) {
		return (new Program(source, cinemas)).program;
	}
}

class Movie {
	constructor (link) {
		this.link = `${baseURL}${link}`;
	}

	* extract (cinemas) {
		const ctx = yield* inspectPage(this.link);

		this.getEventId(ctx);

		// general
		this.getTitle(ctx);
		this.getCountryAndYear(ctx);
		this.getDescription(ctx);

		this.getYorckerReview(ctx);

		// images
		this.getCover(ctx);
		this.getHero(ctx);
		this.getGallery(ctx);

		// videos
		this.getTrailers(ctx);

		const metaMap = this.getMetaMap(ctx);

		// meta
		this.getCamera(metaMap);
		this.getComposer(metaMap);
		this.getDirector(metaMap);
		this.getFSK(metaMap);
		this.getLength(metaMap);
		this.getWriter(metaMap);

		yield* this.getProgram(ctx, cinemas);

		ctx.close();
	}

	getEventId (ctx) {
		const eventId = ctx.$('.movie-program > .row').first().attr('id');
		const id      = ctx.$('.shows').attr('id');

		if (eventId) {
			this.eventId = eventId.split('-').pop();
		}

		if (id) {
			this.id = id;
		}
	}

	getTitle (ctx) {
		const title = this.getBySelector(ctx.document.body, '#movie > section > div > div > h1');

		if (title) {
			this.title = unescape(title.innerHTML);
		}
	}

	getDescription (ctx) {
		const description = this.getBySelector(ctx.document.body, '#movie section div p');

		if (description) {
			this.description = unescape(description.innerHTML);
		}
	}

	getYorckerReview (ctx) {
		const review = this.getBySelector(ctx.document.body, '.yorcker-review');

		if (review) {
			const text = review.querySelector('.yorcker-review-text').innerText;

			if (!text) {
				// empty review
				return;
			}

			const number = review.querySelector('.yorcker-numero').innerHTML.trim();

			this.reviews = [{
				title: `Yorcker ${number}`,
				text: text.trim()
			}];
		}
	}

	getCountryAndYear (ctx) {
		let cy = this.getBySelector(ctx.document.body, '#movie section h5');

		if (cy) {
			cy = unescape(cy.innerHTML).split('\n');

			const countries = cy[0]
							// remove spaces
							.replace(/ /g, '')
							// remove bad delimiters
							.replace(/(\/|,)/g, '-')
							// split by new delimiters
							.split('-');

			const year = cy[1];

			this.countries = countries;
			this.year = year;
		}
	}

	getCamera (metaMap) {
		this.setKeyIfInMetaMap('camera', 'Kamera', metaMap);
	}
	getComposer (metaMap) {
		this.setKeyIfInMetaMap('composer', 'Musik', metaMap);
	}
	getDirector (metaMap) {
		this.setKeyIfInMetaMap('director', 'Regie', metaMap);
	}
	getFSK (metaMap) {
		this.setKeyIfInMetaMap('fsk', 'FSK', metaMap, fsk => fsk.shift());
	}
	getLength (metaMap) {
		this.setKeyIfInMetaMap('length', 'Länge', metaMap, length => length.shift());
	}
	getWriter (metaMap) {
		this.setKeyIfInMetaMap('screenplay', 'Drehbuch', metaMap);
	}

	getCover (ctx) {
		const cover = this.getBySelector(ctx.document.body, '#movie div.movie-poster img');

		if (cover) {
			this.cover = cover.getAttribute('data-retina');
		}
	}

	getHero (ctx) {
		const hero = this.getBySelector(ctx.document.body, '#movie div.hero-image img');

		if (hero) {
			this.hero = hero.getAttribute('data-retina');
		}
	}

	getGallery (ctx) {
		const gallery = this.getAllBySelector(ctx.document.body, '.movies-image-gallery a');

		if (gallery && gallery.length) {
			this.gallery = gallery.map(image => ({
				normal: image.firstChild.getAttribute('data-retina'),
				big: image.getAttribute('href')
			}));
		}
	}

	getTrailers (ctx) {
		const trailers = this.getAllBySelector(ctx.document.body, 'a.trailer-button');

		if (trailers && trailers.length) {
			const trailerMap = {};

			trailers.forEach(trailer =>
				trailerMap[trailer.firstChild.innerHTML] = trailer.getAttribute('href')
			);

			this.trailers = trailerMap;
		}
	}

	* getProgram (ctx, cinemas) {
		const rawSource = yield* getSource(programPath(this.id, this.eventId));

		try {
			this.program = Program.fromSource(rawSource, cinemas);
		} catch(e) {
			// not available
		}
	}

	// util
	setKeyIfInMetaMap (name, key, map, fn) {
		let item = map[key];

		if (!item) {
			return;
		}

		item = item
				// fix insane delimiters
				.replace(/(,\s+|\s+,|,$)/g, '~')
				// replace bad fixed delimiters
				.replace(/\~\s+/g, '~')
				// split by new delimiters
				.split('~')
				// filter out empty fields
				.filter(i => i);

		if (fn) {
			return this[name] = fn(item);
		}

		return this[name] = item;
	}

	getMetaMap (ctx) {
		const block = this.getAllBySelector(ctx.document.body, '#movie table tbody tr');

		const metaMap = {};

		block.forEach(item => {
			const fields = this.getAllBySelector(item, 'td h5');

			metaMap[fields[0].innerHTML] = fields[1].innerHTML;
		});

		return metaMap;
	}

	getBySelector (ctx, selector) {
		return ctx.querySelector(selector);
	}

	getAllBySelector (ctx, selector) {
		return [...ctx.querySelectorAll(selector)];
	}
};

Movie.fromLink = async(function* (link, cinemas) {
	const movie = new Movie(link);

	yield* movie.extract(cinemas);

	return movie;
});

class Cinemas {
	* getCinemas () {
		let source = yield* getSource(cinemaPath, true);

			source = source.split('\n');

			source = source.filter(line =>
				line.indexOf('select-cinema-link') !== -1
			);

			source = source.map(line =>
				[
					line.split('data-cinema-id="').pop().split('"').shift(),
					line.split('">').pop().split('</a>').shift()
				]
			);

		this.id = source;
		this.name = source.map(arr => arr.reverse());

		return source;
	}

	static * init () {
		const cinemas = new Cinemas();

		yield* cinemas.getCinemas();

		return cinemas;
	}
}

class ProgramProjection {
	constructor (movies, cinemas) {
		this.cinemas = cinemas;
	}

	populateByMovie() {
		return;
	}

	populateByCinema(movies) {
		const cinemaMap = {};

		movies.forEach(movie => {
			if (!movie.program)
				return;

			movie.program.forEach(entry => {
				cinemaMap[entry[0]] = cinemaMap[entry[0]] || [];

				cinemaMap[entry[0]].push(
					...entry[1].map(e => [movie.eventId, e])
				);
			});
		});

		this.byCinema = cinemaMap;
	}

	static * populate (movies, cinemas) {
		const population = new ProgramProjection(movies, cinemas);

		population.populateByCinema(movies);
		population.populateByMovie();

		return population;
	}
}

class YorckScraper {
	// extract links to movie detail pages
	* obtainMovieOverview () {
			// load page as string
		let source = yield* getSource(moviePath, true);

			// split into seperate lines
			source = source.split('\n');

			// extract anchor elements
			source = source.filter(line =>
				line.indexOf('select-movie-link') !== -1
			);

			// extract link paths (/filme/<id>)
			source = source.map(line =>
				line.split('url="').pop().split('"').shift()
			);

		return source;
	}

	* run () {
		const cinemas = yield* Cinemas.init();

		return console.log(JSON.stringify(cinemas));

		const movieLinks = yield* this.obtainMovieOverview();

		this.movies = yield Promise.map(movieLinks, link => Movie.fromLink(link, cinemas));

		//const programProjection = yield* ProgramProjection.populate(this.movies, cinemas);
	}

	* loop () {
		yield* this.run();

		const ctx = this;

		setTimeout(async(function* () {
			yield* ctx.loop();
		}), 1000);
	}

	static * bootstrap () {
		const scraper = new YorckScraper();

		yield* scraper.loop();

		return scraper;
	}
}

module.exports = async(YorckScraper.bootstrap)();
'use strict';

const fs = require('fs');
const https = require('https');
const assert = require('assert');
const events = require('events');

const Promise = require('bluebird');
const async   = Promise.coroutine;

const _ = require('lodash');

const jsdom = require('jsdom');
const jquery = fs.readFileSync(__dirname + '/../misc/jquery.js');

const currentEpoch = () => {
	const interval = 7200 * 1000;

	const now = Date.now();
	const mod = now % interval;

	return {
		interval, mod,

		offset: interval - mod,
		epoch: now - mod
	};
};

const level = require('level');
const db = Promise.promisifyAll(level('/tmp/foo'));

_.assign(db, {
	* epochGet (key) {
		const qkey = ['', currentEpoch().epoch, key];

		return yield this.getAsync(qkey.join('\xFF'));
	},
	* epochSet (key, value) {
		const qkey = ['', currentEpoch().epoch, key];

		return yield this.putAsync(qkey.join('\xFF'), value);
	},
	* getFilteredKeys (iterator) {
		const keys = [];

		return yield new Promise(res =>
			db.createKeyStream()
			.on('data', key => {
				iterator(key) && keys.push(key);
			})
			.on('end', data => {
				res(keys);
			})
		);
	}
});

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

class YorckHelpers {
	constructor(log) {
		this.log = log;
	}

	unescape (text) {
		return text.replace(/&(?:amp|lt|gt|quot|#39|#96);/g, chr => ({
			'&amp;': '&',
			'&lt;': '<',
			'&gt;': '>',
			'&quot;': '"',
			'&#39;': '\'',
			'&#96;': '`'
		})[chr]).trim();
	}

	jsdomWithArgs(url, isRaw) {
		return new Promise((resolve, reject) => {
			this.log.debug({module: 'jsdom'}, `Inspecting ${url}..`);

			jsdom.env({
				[isRaw ? 'html' : 'url']: url,
				src: [jquery],
				done: (err, ctx) => {
					if (err) {
						this.log.info(err);

						return reject(err);
					}

					resolve(ctx);
				}
			});
		})
	}

	_getUrlFromConfig (config) {
		const {host, port, path} = config;

		return ['https://', host, ':', port, path].join('');
	}

	getUrl(config) {
		return new Promise((resolve, reject) => {
			let data = new Buffer(0);

			const debugUrl = this._getUrlFromConfig(config);

			this.log.debug({module: 'https'}, `Requesting ${debugUrl}..`);

			https.request(config, sock => {
				sock.on('data', buf =>
					data = Buffer.concat([data, buf])
				);

				sock.on('end', () => resolve(data.toString()));
				sock.on('error', err => {
					this.log.info(err);

					process.nextTick(() => this.getUrl(err));
				});
			}).end();
		});
	}

	* inspectPage (url) {
		return yield this.jsdomWithArgs(url);
	}

	* getSource(url, omitXHRHeader) {
		const cacheId = this._getUrlFromConfig(url);

		try {
			const cache = yield* db.epochGet(cacheId);

			this.log.trace({module: 'getSource'}, `Cache hit - ${cacheId}`);

			return cache;
		} catch (err) {
			this.log.trace({module: 'getSource'}, `Cache miss - ${cacheId}`);

			const config = _.chain(url)
							.cloneDeep()
							.value();

			if (!omitXHRHeader) {
				config.headers = {
					'X-Requested-With': 'XMLHttpRequest'
				};
			}

			const source = yield this.getUrl(config);

			yield* db.epochSet(cacheId, source);

			return source;
		}
	}
}

class Program {
	constructor(source, {cinemas, log}) {
		this.cinemas = cinemas;
		this.log = log;

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

	firstGTE (arr, i) {
		const r = arr.map(a => a < i).indexOf(false);

		return (r > -1 ? r : arr.length) - 1;
	}

	mapProgram (cinemasPerMovie) {
		const mappedProgram = {};

		cinemasPerMovie.forEach(([movieId, showtimes]) => {
			mappedProgram[movieId] = showtimes;
		});

		return mappedProgram;
	}

	parseProgram (source) {
		const sL = source.split('\n');

		if (!sL.some(line => /has\_shows\ \=\ true/.test(line)))
			return null;

		const pSL = sL.filter(line => ~line.indexOf('replaceWith'))[0];

		const bS1 = String(pSL);
		const bS2 = bS1.slice(bS1.indexOf('replaceWith') + 12, -2);

		const bS3 = bS2.split('\\n');
		const _bO3 = bS3.indexOf(bS3.filter(a => ~a.indexOf('movie-program'))[1]);

		const bS4 = bS3.slice(_bO3);

		const cinemasPerMovie = bS4.filter(line => ~line.indexOf('h3'))
						   .map(line => {
						   		const cinema = line.slice(line.indexOf('text-gold') + 12, -6).trim();
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
				currentDay = bS4[i].slice(dayOffset + 8, -8).trim();

				continue;
			}

			const cIndex = this.firstGTE(csections, i);

			let showTime;

			/* strategy 1 */

			const defaultFormat = this.matchOrBail(bS4[i], /\"\>(.*?)\<\\\/a\>/);

			if (~bS4[i].indexOf('ticket-link') && !~bS4[i].indexOf('show-ticket-time') && defaultFormat) {
				cinemasPerMovie[cIndex][1].push([this.composeDate(currentDay, defaultFormat)]);

				continue;
			}

			/* strategy 2 */

			const extendedFormat = this.matchOrBail(bS4[i], /time\\\'\>(.*?) \</);
			const showSpecialType = this.matchOrBail(bS4[i], /lang\\\'\>(.*?)\</);

			if (extendedFormat) {
				cinemasPerMovie[cIndex][1].push([this.composeDate(currentDay, extendedFormat), showSpecialType]);

				continue;
			}
		}

		this.program = this.mapProgram(cinemasPerMovie);
	}

	static fromSource(source, {cinemas, log}) {
		return (new Program(source, {cinemas, log})).program;
	}
}

class Movie {
	constructor (link, {log}) {
		this.log = log;
		this.helpers = new YorckHelpers(log);

		this.link = `${baseURL}${link}`;
	}

	* extract (cinemas) {
		const ctx = yield* this.helpers.inspectPage(this.link);

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
		const title = ctx.$('#movie > section > div > div > h1');

		if (_.size(title)) {
			this.title = this.helpers.unescape(title.text().trim());
		}
	}

	getDescription (ctx) {
		const description = ctx.$('#movie section div p');

		if (_.size(description)) {
			this.description = this.helpers.unescape(description.text().trim());
		}
	}

	getYorckerReview (ctx) {
		const review = ctx.$('.yorcker-review');

		if (_.size(review)) {
			const text = review.find('.yorcker-review-text').text().trim();

			if (!text) {
				// empty review
				return;
			}

			const number = review.find('.yorcker-numero').text().trim();

			this.reviews = [{
				title: `Yorcker ${number}`,
				text: text.trim()
			}];
		}
	}

	getCountryAndYear (ctx) {
		let cy = this.getBySelector(ctx.document.body, '#movie section h5');

		if (cy) {
			cy = this.helpers.unescape(cy.innerHTML).split('\n');

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
		const rawSource = yield* this.helpers.getSource(programPath(this.id, this.eventId));

		try {
			this.program = Program.fromSource(rawSource, {cinemas, log: this.log});
		} catch(e) {
			this.log.info(e);
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

	toString () {
		const fields = [
			'camera',
			'composer',
			'countries',
			'cover',
			'description',
			'director',
			'eventId',
			'fsk',
			'gallery',
			'hero',
			'id',
			'length',
			'program',
			'reviews',
			'screenplay',
			'title',
			'trailers',
			'year'
		];

		return JSON.stringify(_.pick(this, fields));
	}
};

Movie.fromLink = async(function* (link, cinemas, {log}) {
	try {
		const cache = JSON.parse(yield* db.epochGet(link));

		log.trace({module: 'movie'}, `Cache hit - ${link}`);

		return cache;
	} catch(err) {
		log.trace({module: 'movie'}, `Cache miss - ${link}`);

		const movie = new Movie(link, {log});

		yield* movie.extract(cinemas);

		yield* db.epochSet(link, movie.toString());

		return movie;
	}
});

class Cinemas {
	constructor({log}) {
		this.helpers = new YorckHelpers(log);
	}

	* getCinemas () {
		let source = yield* this.helpers.getSource(cinemaPath, true);

			source = source.split('\n');

			source = source.filter(line =>
				line.indexOf('select-cinema-link') !== -1
			);

			source = source.map(line =>
				[
					String(line.split('data-cinema-id="').pop().split('"').shift()).trim(),
					String(line.split('">').pop().split('</a>').shift()).trim()
				]
			);

		this.id = new Map(source);
		this.name = new Map(source.map(arr => arr.reverse()));

		return source;
	}

	static * init ({log}) {
		const cinemas = new Cinemas({log});

		yield* cinemas.getCinemas();

		return cinemas;
	}
}

class ProgramProjection {
	constructor (movies, cinemaRef) {
		this.cinemaRef = cinemaRef;
	}

	* process (movie) {
		if (_.has(movie, 'program')) return;
	}

	static * populate (movies, cinemas) {
		const projection = new ProgramProjection(movies, cinemas);

		for (let i in movies) {
			const movie = movies[i];

			yield* projection.process(movie);
		}

		return projection;
	}
}

class YorckScraper extends events {
	constructor ({log}) {
		super();

		this.log = log;
		this.helpers = new YorckHelpers(log);
	}

	// extract links to movie detail pages
	* obtainMovieOverview () {
			// load page as string
		let source = yield* this.helpers.getSource(moviePath, true);

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
		const cinemas = yield* Cinemas.init({
			log: this.log
		});

		const movieLinks = yield* this.obtainMovieOverview();

		this.log.debug(`Resolving ${movieLinks.length} movies..`);

		this.movies = yield Promise.map(movieLinks, link =>
			Movie.fromLink(link, cinemas, {log: this.log})
		);

		const programProjection = yield* ProgramProjection.populate(this.movies, cinemas);

		this._lastRun = new Date();

		this.lemit('update');
	}

	lemit (event, ...data) {
		this.log.debug(`Emitting event: ${event}`);
		this.emit(event, ...data);
	}

	get _age () {
		return Date.now() - this._lastRun;
	}

	logCycle () {
		this._cycle = this._cycle || 0;
		++this._cycle;

		this.log.info(`Cycle ${this._cycle}`);
	}

	* boot () {
		/* Infos about current epoch */
		const {offset, epoch, interval, mod} = currentEpoch();

		this.log.info({interval}, `Epoch: ${epoch}, ${mod}ms (${offset}ms left).`);

		/* Kickoff cache GC */
		yield* this.gc(epoch);
	}

	* gc (epoch) {
		const log = this.log.child({module: 'gc'});

		const expiredKeys = yield* db.getFilteredKeys(key =>
			key.indexOf(['', epoch, ''].join('\xFF'))
		);

		const mappedOps = expiredKeys.map(key => ({type: 'del', key}));

		if (!_.size(mappedOps))
			return;

		yield db.batchAsync(mappedOps);

		log.info(`Removed ${expiredKeys.length} expired keys..`);
	}

	* loop () {
		this.logCycle();

		yield* this.run();

		const ctx = this;

		setTimeout(async(function* () {
			yield* ctx.loop();
		}), 5 * 60 * 1000);
	}

	static * bootstrap ({log}) {
		log.info(`Bootstrapping..`);

		const scraper = new YorckScraper({log});

		yield* scraper.boot();
		yield* scraper.loop();

		return scraper;
	}
}

module.exports = async(YorckScraper.bootstrap);

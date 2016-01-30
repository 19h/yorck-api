'use strict';

/* for beta.yorck.de */

/*
	Approach:

	- collect movies from movie page
	- scrape movie detail pages
	- retrofit data from detail pages and populate time map
*/

const fs = require('fs');
const https = require('https');

const db = require('../server/util/db').init('yorck');

const Promise = require('bluebird');
const async   = Promise.coroutine;

const jsdom = require('jsdom');
const jquery = fs.readFileSync(__dirname + '/jquery.js');

/* Configuration */
const baseURL = 'https://www.yorck.de';

const moviePath = {
	host: 'www.yorck.de',
	port: 443,
	path: '/filme'
};

const programPath = id => ({
	host: 'www.yorck.de',
	port: 443,
	path: `/shows/-/cinemas.js?eventid=${id}&partial=movie`
});

const inspectPage = url =>
	new Promise((resolve, reject) => {
		// return jsdom.env({
		// 		html: fs.readFileSync('./' + url.split('de/').pop()).toString(),
		// 		src: [jquery],
		// 		done: (err, ctx) => {
		// 			if (err) {
		// 				reject(err);
		// 			} else {
		// 				resolve(ctx);
		// 			}
		// 		}
		// 	});
		console.log(`Getting ${url}...`);

		jsdom.env({
			url: url,
			src: [jquery],
			done: function(err, ctx) {
				if (err) {
					reject(err);
				} else {
					resolve(ctx);
				}
			}
		});
	});

const getSource = url =>
	new Promise((resolve, reject) => {
		if (url.path.indexOf('/filme') !== -1) {
			return resolve(fs.readFileSync(__dirname + '/films').toString());
		}

		let data = new Buffer(0);

		console.log(`Getting '${url}'...`);

		const config = url;

		config.headers = {
			'X-Requested-With': 'XMLHttpRequest'
		};

		https.request(config, sock => {
			sock.on('data', buf =>
				data = Buffer.concat([data, buf])
			);

			sock.on('end',    () => resolve(data.toString()));
			sock.on('error', err => reject(err));
		}).end();
	});

const hijackProgramSource = source =>
	new Promise((resolve, reject) => {
		const fail = setTimeout(reject, 2000);

		const $ = () => ({
			replaceWith (args) {
				clearTimeout(fail);

				resolve(args);
			}
		});

		eval(source);
	});

const unescape = text =>
	text.replace(/&(?:amp|lt|gt|quot|#39|#96);/g, chr => ({
		'&amp;': '&',
		'&lt;': '<',
		'&gt;': '>',
		'&quot;': '"',
		'&#39;': '\'',
		'&#96;': '`'
	})[chr]).trim();

const Movie = function (link) {
	this.link = `${baseURL}${link}`;
};

Movie.prototype = {
	async extract () {
		const ctx = await inspectPage(this.link);

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

		await this.getProgram(ctx);

		ctx.close();
	},

	getEventId (ctx) {
		const eventId = ctx.$('.movie-program > .row').first().attr('id');
		const id      = ctx.$('.shows').attr('id');

		if (eventId) {
			this.eventId = eventId.split('-').pop();
		}

		if (id) {
			this.id = id;
		}
	},

	getTitle (ctx) {
		const title = this.getBySelector(ctx.document.body, '#movie > section > div > div > h1');

		if (title) {
			this.title = unescape(title.innerHTML);
		}
	},

	getDescription (ctx) {
		const description = this.getBySelector(ctx.document.body, '#movie section div p');

		if (description) {
			this.description = unescape(description.innerHTML);
		}
	},

	getYorckerReview (ctx) {
		let review = this.getBySelector(ctx.document.body, '.yorcker-review');

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
	},

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
	},

	getCamera (metaMap) {
		this.setKeyIfInMetaMap('camera', 'Kamera', metaMap);
	},
	getComposer (metaMap) {
		this.setKeyIfInMetaMap('composer', 'Musik', metaMap);
	},
	getDirector (metaMap) {
		this.setKeyIfInMetaMap('director', 'Regie', metaMap);
	},
	getFSK (metaMap) {
		this.setKeyIfInMetaMap('fsk', 'FSK', metaMap, fsk => fsk.shift());
	},
	getLength (metaMap) {
		this.setKeyIfInMetaMap('length', 'Länge', metaMap, length => length.shift());
	},
	getWriter (metaMap) {
		this.setKeyIfInMetaMap('screenplay', 'Drehbuch', metaMap);
	},

	getCover (ctx) {
		const cover = this.getBySelector(ctx.document.body, '#movie div.movie-poster img');

		if (cover) {
			this.cover = cover.getAttribute('data-retina');
		}
	},

	getHero (ctx) {
		const hero = this.getBySelector(ctx.document.body, '#movie div.hero-image img');

		if (hero) {
			this.hero = hero.getAttribute('data-retina');
		}
	},

	getGallery (ctx) {
		const gallery = this.getAllBySelector(ctx.document.body, '.movies-image-gallery a');

		if (gallery && gallery.length) {
			this.gallery = gallery.map(image => ({
				normal: image.firstChild.getAttribute('data-retina'),
				big: image.getAttribute('href')
			}));
		}
	},

	getTrailers (ctx) {
		const trailers = this.getAllBySelector(ctx.document.body, 'a.trailer-button');

		if (trailers && trailers.length) {
			const trailerMap = {};

			trailers.forEach(trailer =>
				trailerMap[trailer.firstChild.innerHTML] = trailer.getAttribute('href')
			);

			this.trailers = trailerMap;
		}
	},

	async getProgram (ctx) {
		const rawSource = await getSource(programPath(this.eventId));

		const source = await hijackProgramSource(source);

		console.log(1, ctx.$(source)[0].innerHTML, 2);
	},

	// util
	setKeyIfInMetaMap (name, key, map, fn) {
		let item = map[key];

		if (item) {
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
				this[name] = fn(item);
			} else {
				this[name] = item;
			}
		}
	},

	getMetaMap (ctx) {
		let block = this.getAllBySelector(ctx.document.body, '#movie table tbody tr');

		const metaMap = {};

		block.forEach(item => {
			const fields = this.getAllBySelector(item, 'td h5');

			metaMap[fields[0].innerHTML] = fields[1].innerHTML;
		});

		return metaMap;
	},

	getBySelector (ctx, selector) {
		return ctx.querySelector(selector);
	},

	getAllBySelector (ctx, selector) {
		return [].slice.call(ctx.querySelectorAll(selector));
	}
};

Movie.fromLink = link => {
	const movie = new Movie(link);

	return movie.extract();
};

class YorckScraper {
	async run () {
		const movieLinks = await this.obtainMovieOverview();

		//console.log(movieLinks);
		await Promise.map(movieLinks, Movie.fromLink);
	}

	// extract links to movie detail pages
	async obtainMovieOverview () {
			// load page as string
		let source = await getSource(moviePath);

			// split into seperate lines
		    source = source.split('\n');

		    // extract anchor elements
		    source = source.filter(line =>
		    			line.indexOf('select-movie-link') !== -1
		    		 );

		    // extract link paths (/filme/<id>)
			source = source.map(line => {
						return line.split('url="').pop().split('"').shift();
					 });

		return source;
	}
}

const scraper = new YorckScraper();
      scraper.run();
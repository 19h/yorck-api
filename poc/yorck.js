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
const jquery = fs.readFileSync('jquery.js');

/* Configuration */
const baseURL = 'https://beta.yorck.de';
const moviePath = `${baseURL}/filme`;

const inspectPage = (url) =>
	new Promise((resolve, reject) => {
		return jsdom.env({
				html: fs.readFileSync('./' + url.split('de/').pop()).toString(),
				src: [jquery],
				done: function(err, ctx) {
					if (err) {
						reject(err);
					} else {
						resolve(ctx);
					}
				}
			});

		/*jsdom.env({
			url: url,
			src: [jquery],
			done: function(err, ctx) {
				if (err) {
					reject(err);
				} else {
					resolve(ctx);
				}
			}
		});*/
	});

const getSource = (url) =>
	new Promise((resolve, reject) => {
		// TODO REMOVE
		return resolve(fs.readFileSync('films').toString());

		/*let data = new Buffer(0);

		https.request(url, sock => {
			sock.on('data', buf =>
				data = Buffer.concat([data, buf])
			);

			sock.on('end',    () => resolve(data.toString()));
			sock.on('error', err => reject(err));
		}).end();*/
	});

const Movie = function (link) {
	this.link = link;
};

Movie.prototype = {
	extract: async(function* () {
		return {};
	})
};

Movie.fromLink = link => {
	const movie = new Movie(link);

	return movie.extract();
};

const YorckScraper = function () {

};

YorckScraper.prototype = {
	// kick off
	initialize: async(function* () {
		const movieLinks = yield this.obtainMovieOverview();

		console.log(movieLinks);
		//yield Promise.map(movieLinks, Movie.fromLink)
	}),

	// extract links to movie detail pages
	obtainMovieOverview: async(function* () {
			// load page as string
		let source = yield getSource(moviePath);

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
	})
};

const scraper = new YorckScraper();
      scraper.initialize();
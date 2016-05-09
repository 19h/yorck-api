const async = require('bluebird').coroutine;

const _ = require('lodash');

const constants = require('../constants');

const RFOO = movies => ({
    cmx () {
        /* accumulate movies */
        const cinemas = {};
        const showtimes = {};

        movies.map(movie => {
            if (!movie.program) return;

            Object.keys(movie.program).forEach(cinemaId => {
                const realName = constants.cinemaRelation.name.get(cinemaId);

                cinemas[realName] = cinemas[realName] || {
                    id: cinemaId,
                    movies: [],
                    geometry: constants.locationRelation[cinemaId]
                };

                const timestamps = movie.program[cinemaId].map(([showtime]) =>
                    +(new Date(showtime))
                );

                showtimes[movie.eventId] = showtimes[movie.eventId] || [];

                showtimes[movie.eventId].push(
                    ...timestamps.map(stamp => [stamp, realName])
                );

                cinemas[realName].movies.push({
                    movieName: movie.title,
                    movieId: movie.eventId,
                    times: timestamps
                });
            });
        });

        return {
            showtimes,
            cinemas
        };
    },

    meta (showtimes) {
        console.log(showtimes)

        const _m = movies.map(movie => ({
            eventId: movie.eventId,

            title: movie.title,
            meta: {
                country: movie.countries.join(', '),
                year: movie.year || '',
                duration: (parseInt(movie.length || '', 10) || 0) * 60,
                fsk: movie.fsk || ''
            },
            desc: movie.description,
            review: _.size(movie.reviews) ? _.get(movie.reviews, '0.text') : '',

            times: _.get(showtimes, movie.eventId) || []
        }));

        return _.keyBy(_m, 'eventId');
    },

    cinemas () {
        const listOfCinemas = Object.keys(constants.locationRelation).map(k =>
            _.extend({}, constants.locationRelation[k], {
                id: k
            })
        );

        return _.keyBy(listOfCinemas, 'name');
    }
});

const populate = function (movies, truth) {
    const foo = RFOO(movies);

    const cmx = foo.cmx();

    _.assign(truth, {
        cmx: cmx.cinemas,
        meta: foo.meta(cmx.showtimes),
        cinemas: foo.cinemas(),
        mBasePairs: _.keyBy(movies, 'eventId')
    });
};

const markRevision = (req, res, next) => {
    res.set('X-Yorck-Revision', 'legacy');
    next();
};

module.exports = function* ({app, yorck}) {
    const scraper = yield yorck;

    /* bootstrap */

    const truth = {
        cmx: null,
        meta: null,
        cinemas: null,
        mBasePairs: null
    };

    const update = () => populate(scraper.movies, truth);

    scraper.on('update', update);

    update();

    /* routes */

    app.get('/', markRevision, (req, res) => {
      return res.send(truth.cmx);
    });

    app.get('/meta', markRevision, (req, res) => {
      return res.send(truth.meta);
    });

    app.get('/cinemas', markRevision, (req, res) => {
      return res.send(truth.cinemas);
    });

    app.get('/static/assets/films/:id/still.jpg', markRevision, (req, res) => {
        const {id} = req.params;

        const url = _.get(truth.mBasePairs, `${id}.gallery.0.big`);

        if (url) {
            return res.redirect(url);
        }

        res.status(200, {
            'Content-type': 'image/png'
        });

        res.send(defaultImage);
    });
};

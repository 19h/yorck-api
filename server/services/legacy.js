const async = require('bluebird').coroutine;

const _ = require('lodash');

const constants = require('../constants');

const RFOO = movies => ({
    cmx () {
        /* accumulate movies */
        const cinemas = {};

        movies.map(movie => {
            if (!movie.program) return;

            movie.program.forEach(entry => {
                const realName = constants.cinemaRelation.name.get(entry[0]);

                cinemas[realName] = cinemas[realName] || {
                    movies: [],
                    geometry: constants.locationRelation[entry[0]]
                };

                /*
                    name id times
                */

                cinemas[realName].movies.push({
                    movieName: movie.title,
                    movieId: movie.eventId,
                    times: entry[1].map(a => +(new Date(a[0])))
                });
            });
        });

        return cinemas;
    },

    meta () {
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
            review: _.size(movie.reviews) ? _.get(movie.reviews, '0.text') : ''
        }));

        return _.keyBy(_m, 'eventId');
    },

    cinemas () {
        return _.keyBy(Object.keys(constants.locationRelation).map(k => constants.locationRelation[k]), 'name');
    }
});

const populate = function (movies, truth) {
    const foo = RFOO(movies);

    _.assign(truth, {
        cmx: foo.cmx(),
        meta: foo.meta(),
        cinemas: foo.cinemas(),
        mBasePairs: _.keyBy(movies, 'eventId')
    });
};

module.exports = async(function* ({app, yorck}) {
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

    const markAsLegacy = (req, res, next) => {
        res.set('X-Yorck-Revision', 'legacy');
        next();
    };

    app.get('/', markAsLegacy, (req, res) => {
      return res.send(truth.cmx);
    });

    app.get('/meta', markAsLegacy, (req, res) => {
      return res.send(truth.meta);
    });

    app.get('/cinemas', markAsLegacy, (req, res) => {
      return res.send(truth.cinemas);
    });

    app.get('/static/assets/films/:id/still.jpg', (req, res) => {
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
});
const async = require('bluebird').coroutine;

const _ = require('lodash');

const constants = require('../constants');

const tzShift = (new Date()).getTimezoneOffset() * 1000 * 60;

const defaultImage = new Buffer('iVBORw0KGgoAAAANSUhEUgAAAeAAAAE1CAMAAAAI+cM7AAAAb1BMVEUdHRtBOydBOic/OSZAOicfHxwvLCEjIh1AOycuKyE7NiU0MCIqKB89NyUwLSE9NyY3MyQ9OCYtKiA2MiM8NiU+OCY4MyQyLyI6NSU8NyY+OSY0MCMxLiIrKCA2MSMsKSAhIRwpJh86NiU5NCQmJR7vJ39GAAAFGElEQVR4XuzMSQ3AQAwEQfMYb27+GEMhh/ZXLdW3SwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzLGNTpbjU+dVj9o7yev7WvrrZu/clhtFgig41TTiZl1tz8wuyEKI///GdcREzJtVQAmruzcrXx3mIYPjI5Vp8ipzYhhXTLjGh5dF4zBs5aro1Wn1a3hZOjcM2WhKsU6tCbgYruFRZKIR+2wVAaNYJkeSgWv5DYIzMYwfsbScPBOxkykB7cQyCDZwcbJ+RGdimhOalrMXbexFtzeW9A2aFpPLQ6a6K+AqCH4Wo5NHTH9XwEaEv8FP4iRixzU/DIKN35OBdnPZ2SsfVM/mig5PvIPdkCsCci+WaZ4ogL/Bzlf6VfqDF7fUsu/RtJzeJrjcX/KpVxrPv27v4uZe0FVYspDJwvHib9X8m6sfT209J7JfcWTiZWFG/x4NK4CPWQUdTBSbz+na9jAMw3a7nboaHiyXlIlTvrFneDjFUaaMM2wAark3mRMRl4n80xToWIGiXPnTafV1SJT1mI9/hiXwanSTUtrtlhb3ko+8TyZb9fPpIF/OEQHfwtUZdoSWBXSBgO9hmNZxlZ41+2vLDgHfRL/eFuAWT0DTs2RnSH8C+pnkhp6VUEDTsw4zBbR3lsoIiL9njWVkAU3P2j8q+HcICLNnzdnWNk55NAIC7FnTt4ZFyA2anmVfyB8J6LAYHrs33EmUAU3PejP/trJHQMh7w4t1y18hIOKepW/5awQE3rMaXUDv4w1oepYUhl/kgg9oepYesi8EdKB0MmXci7JEijyg6VnZ/Z71M/KA5skH1ylLJAI6WGrzM/55xpODAdObH2VpUwhoeta44BHkAQER9ayvBCQS0PSsnfKFdoQBTc/SC1MR8zHB9Cxd2FbZUUAIdIsfZamUb78gpp61Vx4VjSyg6Vn65n6IOKDpWbq1i0sroOlZr8oSiYAOlmbBuaG3wAIa7OdNvk16G0R5RUCkZ/+7y5Tq/RMBCfSsloCOi2Le4b+jI6Ajo5n1L5apBjQ9q1aWSFnkAU3Put7N83JEQOQ9K7u7RGoREHvPcrsflSQc0OwN/blMO6B53jDtgGZvmGRA07N0XIwBzd6QN2wkRUdA07OSC2h6FgFNzzoiIBJ63gJMz0rqvG96FgFNzyKgo6ImoOlZvJAhZjpHQNOzkjrvm3NKOe87LQYCmp6V8nnf9Kz0TyukZ6V/nCw9yxHQ8TIQ0GnT/+8Dmp7VICDpnuVHBCTdszwJHTnaLYyAyGkRnDabhAUDghGcIyBpwdmIAAQDggHBgGBAMNgEA4IBwYBgQDAgGBCMYAbBgGBAMCAYEAwmwYBgQDAgGBAMCAYE82wSIBgQDAiGEAQDggHBgGBAMHBGB3OTu+OvCIiYotqLMmVz7REQI+OuFi+i45x/a88FAiKT62TWeDkeTlGslojlm/eiDJbjpD+pcnW8vB8qLAdHfj5kSixjOV7yzsvDx0uLgDAovKwynnIdBKOsNK5HQADkXlYaj4AQOMha84qAAMhlrXFXBAT86hw7GQJCoJOVxl0QEAKtrDQDApIWvM8RkHJE/8sGMRDGVUpWzf0bCv0Ken2FgCBbls8+xyvytJ9xWcXtGxTdMNzabnMe/0yhRPrf2XxO137Ox/B3br/O/X/twDEBAAAAwiD7pzbGHlgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO5y5ind6H78wAAAAASUVORK5CYII=', 'base64');

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
                    tzShift + +(new Date(showtime))
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

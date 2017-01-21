'use strict';

const assert = require('assert');

const _ = require('lodash');
const Promise = require('bluebird');

const {makeExecutableSchema} = require('graphql-tools');

const schema = require('./rootQuery');

const _GeneratorFunction = (function*(){}).constructor;
const crMap = obj =>
    _.mapValues(obj, robj =>
        _.mapValues(robj, val =>
            val.constructor === _GeneratorFunction
                ? Promise.coroutine(val)
                : val
        )
    );

const resolvers = crMap({
    Query: {
        movies: (_, __, ctx) => ctx.yorck.movies,
        cinemas: (_, __, ctx) => ctx.yorck.cinemas.refList
    },
    Movie: {
        images: root => ({
            hero: _.get(root, 'hero', null),
            cover: _.get(root, 'cover', null),
            gallery: _.get(root, 'gallery', null)
        }),
        meta: root => ({
            camera: _.get(root, 'camera', null),
            composer: _.get(root, 'composer', null),
            countries: _.get(root, 'countries', null),
            fsk: _.get(root, 'fsk', null),
            length: _.get(root, 'length', null),
            year: _.get(root, 'year', null),
            screenplay: _.get(root, 'screenplay', null),
            director: _.get(root, 'director', null)
        }),
        reviews: root => _.get(root, 'reviews', [])
    }
});

class PwEdge {
    get schema() {
        return makeExecutableSchema({
            typeDefs: [schema],
            resolvers
        });
    }
}

module.exports = PwEdge;

'use strict';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} = require('graphql');

const BaseType = require('./baseType');

/*
    yorck
        -> cinema
            meta ---|
        -> movies <-/
*/

class YorckMovieType extends BaseType {
    constructor({name, description}, {kernel}) {
        super({name, description});
    }

    get fields() {
        return () => ({
            camera: {
                type: new GraphQLList(GraphQLString)
            },
            composer: {
                type: new GraphQLList(GraphQLString)
            },
            countries: {
                type: new GraphQLList(GraphQLString)
            },
            cover: {
                type: GraphQLString
            },
            description: {
                type: GraphQLString
            },
            eventId: {
                type: GraphQLString
            },
            fsk: {
                type: GraphQLString
            },
            //gallery: {
            //    type: GraphQLString
            //},
            hero: {
                type: GraphQLString
            },
            id: {
                type: GraphQLString
            },
            length: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            year: {
                type: GraphQLString
            },
            screenplay: {
                type: new GraphQLList(GraphQLString)
            },
            director: {
                type: new GraphQLList(GraphQLString)
            }
        });
    }
}

class YorckType extends BaseType {
    constructor({name, description}, {kernel}) {
        super({name, description});

        this.yorckMovieType = new YorckMovieType({
            name: 'Movie',
            description: 'A movie'
        }, {kernel});
    }

    get fields() {
        return () => ({
            movies: {
                type: new GraphQLList(this.yorckMovieType.schema)
            }
        });
    }
}

class YorckEdge extends BaseType {
    constructor({name, description}, {kernel}) {
        super({name, description});

        this.kernel = kernel;

        this.yorckType = new YorckType({name, description}, {kernel});
    }

    get schema() {
        const ctx = this;

        return {
            type: this.yorckType.schema,
            name: this.name,
            description: this.description,
            /*args: {
                appId: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },*/
            // /*, {arg}*/
            resolve(root) {
                return {
                    movies: ctx.kernel.movies
                };
            }
        };
    }
}

module.exports = YorckEdge;

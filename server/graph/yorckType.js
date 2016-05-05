'use strict';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
} = require('graphql');

const BaseType = require('./baseType');

class YorckMovieType extends BaseType {
    constructor({name, description}, {kernel, yorckType}) {
        super({name, description});

        this.yorckType = yorckType;
    }

    get fields() {
        const movieGalleryImage = new GraphQLObjectType({
            name: 'movieGalleryImage',
            description: 'An image in the movie gallery',
            fields: () => ({
                normal: {
                    type: GraphQLString
                },
                big: {
                    type: GraphQLString
                }
            })
        });

        const movieImage = new GraphQLObjectType({
            name: 'movieImage',
            description: 'A movie image',
            fields: () => ({
                hero: {
                    type: GraphQLString
                },
                cover: {
                    type: GraphQLString
                },
                gallery: {
                    type: new GraphQLList(movieGalleryImage)
                }
            })
        });

        const movieMeta = new GraphQLObjectType({
            name: 'movieMeta',
            description: 'Metainformation about a movie',
            fields: () => ({
                camera: {
                    type: new GraphQLList(GraphQLString)
                },
                composer: {
                    type: new GraphQLList(GraphQLString)
                },
                countries: {
                    type: new GraphQLList(GraphQLString)
                },
                fsk: {
                    type: GraphQLString
                },
                length: {
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
            })
        });

    const movieReview = new GraphQLObjectType({
            name: 'movieReview',
            description: 'A movie review',
            fields: () => ({
                title: {
                    type: GraphQLString
                },
                text: {
                    type: GraphQLString
                }
            })
        });

        return () => ({
            eventId: {
                type: GraphQLString
            },
            id: {
                type: GraphQLString
            },

            description: {
                type: GraphQLString
            },
            reviews: {
                type: new GraphQLList(movieReview)
            },
            title: {
                type: GraphQLString
            },

            meta: {
                type: movieMeta,
                resolve: root => root
            },

            images: {
                type: movieImage,
                resolve: root => root
            }
        });
    }
}

class YorckCinemaType extends BaseType {
    constructor({name, description}, {kernel, yorckType}) {
        super({name, description});

        this.yorckType = yorckType;
    }

    get fields() {
        return () => ({
            camera: {
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
        }, {kernel, yorckType: this});

        this.yorckCinemaType = new YorckCinemaType({
            name: 'Cinema',
            description: 'A cinema'
        }, {kernel, yorckType: this});
    }

    get fields() {
        return () => ({
            movies: {
                type: new GraphQLList(this.yorckMovieType.schema)
            },
            //cinemas: {
            //    type: new GraphQLList(this.yorckMovieType.schema)
            //}
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

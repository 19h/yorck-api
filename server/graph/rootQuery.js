'use strict';

const RootQuery = `
type MovieGalleryImage {
    normal: String
    big: String
}

type MovieImage {
    hero: String
    cover: String
    gallery: [MovieGalleryImage]
}

type MovieMeta {
    camera: [String]
    composer: [String]
    countries: [String]
    fsk: String
    length: String
    year: String
    screenplay: [String]
    director: [String]
}

type MovieReview {
    title: String
    text: String
}

type MovieTrailer {
    name: String
    link: String
}

type Movie {
    eventId: String
    id: String
    description: String
    reviews: [MovieReview]
    title: String
    meta: MovieMeta

    images: MovieImage
    trailers: [MovieTrailer]
}

type CinemaGeometry {
    lon: String
    lat: String
}

type Cinema {
    id: String
    name: String
    geometry: CinemaGeometry
    movies: String
}

type Query {
    movies: [Movie]
    cinemas: [Cinema]
}
`;

module.exports = () => [RootQuery];


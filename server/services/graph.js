const expressGraphql = require('express-graphql');

const Promise = require('bluebird');
const async   = Promise.coroutine;

const _ = require('lodash');

const querySchema = require('../graph');

const markRevision = (req, res, next) => {
    res.set('X-Yorck-Revision', 'legacy');
    next();
};

module.exports = function* ({app, yorck}) {
    const scraper = yield yorck;

    app.use('/graph', expressGraphql(
        request =>
            ({
                schema: querySchema,
                rootValue: {},
                graphiql: true
            })
        )
    );
};
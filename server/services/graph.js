'use strict';

const {
    graphqlExpress,
    graphiqlExpress
} = require('graphql-server-express');

const bodyParser = require('body-parser');

const querySchema = require('../graph');

module.exports = function* ({app, yorck: kernel}) {
    const yorck = yield kernel;

    const baseQuerySchema = new querySchema({kernel});

    app.get('/graph', graphiqlExpress({
        endpointURL: '/graph',
        query:
`{
  substances {
    name

    effects {
      name
    }
  }
}`,
    }));

    app.post('/graph', bodyParser.json(), (req, res, next) =>
        graphqlExpress({
            schema: baseQuerySchema.schema,
            rootValue: yorck,
            context: {
                yorck
            }
        })(req, res, next)
    );
};

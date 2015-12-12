'use strict';

import graphqlHTTP from 'express-graphql';

import * as app from '../';

const {querySchema} = app;

app.use('/graphql', graphqlHTTP(request => ({
	schema: querySchema,
	rootValue: {
		session: request.session
	},
	graphiql: true
})));

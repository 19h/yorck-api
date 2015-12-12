'use strict';

import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';

class QueryTypeProvider {
	constructor () {
		this.fields = {};
	}

	registerType (type, schema) {
		this.fields[type] = schema;
	}

	unregisterType (type) {
		delete this.fields[type];
	}

	getQueryTypeSchema () {
		return new GraphQLObjectType({
			name: 'Query',
			fields: () => this.fields
		});
	}
}

export var queryTypeProvider = new QueryTypeProvider();

/* Load queryType field providers */
require('./offerType');

export function schema () {
	return new GraphQLSchema({
		query: queryTypeProvider.getQueryTypeSchema()
	});
}

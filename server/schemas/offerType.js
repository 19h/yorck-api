'use strict';

import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLNonNull,
	GraphQLString,
	GraphQLInt
} from 'graphql';

import {
	queryTypeProvider
} from './';

const yorckType = new GraphQLObjectType({
	// tbi
});

export const yorckQueryField = {
	type: yorckType,
	args: {
		id: {
			description: 'id of yorck',
			type: new GraphQLNonNull(GraphQLString)
		}
	},
	resolve (root, { id }) {
		return {id};
	}
};

queryTypeProvider.registerType('yorck', yorckQueryField);

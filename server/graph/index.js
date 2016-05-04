'use strict';

const {
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql');

const YorckEdge = require('./yorckType');

class BaseTypeProvider {
    constructor(name) {
        this.name = name;
        this.fields = {};
    }

    registerType(type, schema) {
        this.fields[type] = schema;
    }

    getSchema() {
        return new GraphQLObjectType({
            name: this.name,
            fields: () => this.fields
        });
    }
}

module.exports = ({kernel}) => {
    const queryTypeProvider = new BaseTypeProvider('RootQueryType');

    const yorckEdge = new YorckEdge({
        name: 'Yorck',
        description: 'The Yorck base edge'
    }, {kernel});

    queryTypeProvider.registerType('yorck', yorckEdge.schema);

    return new GraphQLSchema({
        query: queryTypeProvider.getSchema()
    });
}

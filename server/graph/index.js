'use strict';

const {
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql');

const yorckEdge = require('./yorckType');

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

const queryTypeProvider = new BaseTypeProvider('RootQueryType');

queryTypeProvider.registerType('yorck', yorckEdge.schema);

module.exports = () =>
    new GraphQLSchema({
        query: queryTypeProvider.getSchema()
    });

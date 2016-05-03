'use strict';

const {
    GraphQLObjectType
} = require('graphql');

module.exports = class BaseType {
    get defaultLanguage() {
        return 'en';
    }

    constructor(dependencies, name, description) {
        this.name = name;
        this.description = description;
        this.dependencies = dependencies;
    }

    get schema() {
        return new GraphQLObjectType({
            name: this.name,
            description: this.description,
            fields: this.fields
        });
    }

    get fields() {
        return () => ({});
    }
};

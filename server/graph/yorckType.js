'use strict';

const {
    GraphQLString,
    GraphQLInt
} = require('graphql');

const BaseType = require('./baseType');

class YorckType extends BaseType {
    constructor (...args, {yorck}) {
        super(...args);

        this.yorck = yorck;
    }

    get fields() {
        return () => ({
            height: {
                type: GraphQLInt,
                description: 'The height of the image which was used for generating the image url.'
            }
        });
    }
}

module.exports = YorckType;

'use strict';

const fs = require('fs');
const _ = require('lodash');

var baseConfig = {
	// tbd
};

if(fs.existsSync(__dirname + '/config.local.js')) {
    let localConfig = require('./config.local');

    _.extend(baseConfig, localConfig);
}

export var config = baseConfig;

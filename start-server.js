#!/usr/bin/env node

'use strict';

// patch 'require' to use babel
require('babel-register')({
    presets: ['es2015', 'stage-3']
});

require('babel-polyfill');

// initialize server
//require('./server/');
require('./poc/yorck');

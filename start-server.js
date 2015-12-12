'use strict';

// patch 'require' to use babel
require('babel-core/register')({
    presets: [
		'es2015',
		'stage-3'
	]
});

// initialize server
require('./server/');

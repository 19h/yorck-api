'use strict';

const async = require('bluebird').coroutine;

const bunyan = require('bunyan');
const express = require('express');
const app = express();

const log = bunyan.createLogger({
    name: 'yorck',
    level: 'debug'
});

const legacyRoutes = require('./services/legacy');

const yorck = require('./kernel/yorck')({
    log
});

async(function* () {
    yield legacyRoutes({
        app, yorck
    });

    app.listen(9651, '127.0.0.1', () => console.log('Online.'));
})();

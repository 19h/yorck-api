'use strict';

require('../fm');

const async = require('bluebird').coroutine;

const bunyan = require('bunyan');
const express = require('express');
const app = express();

const log = bunyan.createLogger({
    name: 'yorck',
    level: 'trace'
});

const legacyRoutes = require('./services/legacy');
const graphRoutes = require('./services/graph');

const yorck = require('./kernel/yorck')({
    log: log.child({type: 'kernel'})
});

async(function* () {
    yield* legacyRoutes({
        app, yorck
    });

    yield* graphRoutes({
    	app, yorck
    });

    const host = '127.0.0.1';
    const port = 9651;

    app.listen(port, host, () => log.info({type: 'server'}, `Online: ${host} ${port}`));
})().catch(err => log.fatal(err));
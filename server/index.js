'use strict';

import bunyan from 'bunyan';
import express from 'express';

import {
	schema
} from './schemas/';

const app = express();

const port = 3000;

require('../fm');

module.exports = app;

/* Dependencies */
app.querySchema = schema();

// util
app.log = bunyan.createLogger({
	name: 'sdk'
});

/* bootstrap */

// static assets
require('./core/static');

// graphql endpoint
require('./core/graphql');

// ota endpoint
// TO BE IMPLEMENTED

/* Services */

app.listen(port, () =>
	app.log.info('Listening on port %s.', port)
);

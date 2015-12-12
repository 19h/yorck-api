'use strict';

const path = require('path');

const express = require('express');
const app = require('../');

/* Meta */

/* Static files */
const assetSource = path.join(__dirname, '../../public');

app.use(express.static(assetSource, {
	// allow downstream services to respond first
	etag: true,
	maxage: 6 * 3600
}));

app.log.info('Using \'%s\' for static assets.', assetSource);

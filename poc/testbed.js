const async = require('bluebird').coroutine;
const yorck = require('./yorck');

async(function* () {
    const scraper = yield yorck;

    scraper.on('update', () => {
        console.log(scraper.movies)
    })
})();

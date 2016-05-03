const async = require('bluebird').coroutine;
const yorck = require('./yorck');

async(function* () {
    const scraper = yield yorck;

    return console.log(JSON.stringify(scraper.movies));

    scraper.on('update', () => {
        console.log(scraper.movies)
    })
})();

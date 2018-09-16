const request = require('request');
const fs = require('fs')
let req = request('http://techub.ge');

// req.pipe(process.stdout);

// req.pipe(fs.createWriteStream('techub.html'));

// req.pipe(gzip.createGzip()).pipe(fs.createWriteStream('techub.html.gz')) // creating zip file
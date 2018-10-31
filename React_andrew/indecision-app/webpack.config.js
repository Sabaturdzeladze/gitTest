const path = require('path');

// entry point for us src/app.js

console.log(__dirname); // to see our directory's path

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
}
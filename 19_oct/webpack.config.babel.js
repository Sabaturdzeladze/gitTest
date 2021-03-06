import '@babel/polyfill';
const path = require('path');

module.exports = {
    entry: {
        main: [
            '@babel/polyfill',
            './src/main.js',
        ]
    },
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: '/\.js$/',
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}
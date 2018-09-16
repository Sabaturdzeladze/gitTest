// const http = require('http');
const express = require('express');
const path = require('path');
const debug = require('debug')('app')
const chalk = require('chalk');
const morgan = require('morga');

let app = express();
let port = 3000;

app.use(express.static('public'))
app.use(express.static('src/views'))
app.use(morgan('combined'))

app.get('/', (req, res) => {
    // res.send("Hello Express");
    res.sendfile(path.join(__dirname, '../src/views/index.html'));
})
app.get('/products', (req, res) => {
    res.send("Hello Products");
})

app.listen(port, (err) => {
    // console.log('listening on port -', port);
    debug(`listening on port - ${chalk.green(port)}`)
})

// http.createServer( (req, res) => {
//     res.write("Hello NodeJS Server.")
//     res.end();
// }).listen(8000);

// const http = require('http');

// http.createServer( (req, res) => {
//     const date = new Date()
//     res.write(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
//     res.end();
// }).listen(9000);


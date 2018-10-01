// const http = require('http');
const express = require('express');
const app = express()


// http.createServer( (request, response) => {
//     response.write('Hello World. Node.js')
//     response.end();
// } )
// .listen(3000)

// user/7/profile
// user/7/update
// user/7/delete

app.get('/', (req, res) => {
    res.send('Express Hello World...');
})

app.get('/products/:productId', (req, res) => {
    res.send(`Products GET Method... productId - ${req.params.productId}`)
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(`UserId - ${req.params.userId}... BookId - ${req.params.bookId}`)
})
app.post('/products', (req, res) => {
    const name = req.param('name')
    res.send(`Posted name = ${name}`)
})
app.put('/products', (req, res) => {
    res.send('Products PUT Method...')
})
app.delete('/products', (req, res) => {
    res.send('Products DELETE Method...')
})

app.listen(3000)

// GET user/7
// PUT|PATCH user/7
// DELETE user/7

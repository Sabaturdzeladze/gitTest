const express = require('express');
const path = require('path')
const app = express();

const PORT = 3000;

app.set('views', './views')
app.set('view engine', 'pug');

app.get('/about', (req, res) => {
    res.render('about', {title: 'titttttle', message: 'message'})
})

app.listen(PORT, () => {
    console.log(`Running on Port - ${ PORT }`);
})
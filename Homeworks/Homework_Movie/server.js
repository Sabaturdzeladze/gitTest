const express = require('express');
const path    = require('path')
const app     = express();

const MoviesController = require('./routes/MoviesController')

app.use( express.static(path.join(__dirname, '/public')) );
app.use( express.json() ) // to use json data and req.body

// /api/movies
// /api/movies/:id        ...
app.use('/api', MoviesController)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is on Port - ${PORT}`);
})
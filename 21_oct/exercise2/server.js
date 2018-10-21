const express = require('express');
const path    = require('path')
const countries = require('./public/js/main');
const app     = express();

app.use( express.static(path.join(__dirname, 'public')) );
app.use( express.static(path.join(__dirname, '/node_modules/jquery')) );
app.use(express.urlencoded( {extended: true} ));

let PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile('index')
})

app.get('/country/:name', (req, res) => {
    let newArr = countries.filter(c => c.name.toLowerCase().includes(req.params.name.toLowerCase()))
    
    res.json(newArr)
})

app.listen(PORT, () => {
    console.log(`Server is on Port - ${PORT}`);
})
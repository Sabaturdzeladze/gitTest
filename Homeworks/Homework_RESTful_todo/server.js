const express = require('express');
const path    = require('path')
const app     = express();

const TodosController = require('./routes/TodosController')

app.use( express.static(path.join(__dirname, '/public')) );
app.use( express.json() ) // to use json data and req.body

// /api/todos
// /api/todos/:id        ...
app.use('/api', TodosController)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is on Port - ${PORT}`);
})
const express = require('express');
const path = require('path')
const app = express();

const PORT = 3000;
let id = 0;

const products = [
    { name: 'apple', id: id++, price: 3 },
    { name: 'grape', id: id++, price: 5 }
]

let myMid = function (req, res, next) {
    console.log(`${req.ip}, ${req.hostname} Middleware function`);
    next();
}

let timeLog = function (req, res, next) {
    let time = new Date();

    req.requestTime = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
    next()
}

app.use(express.static(path.join(__dirname, '/public')))
app.use(myMid)
app.use(timeLog)

app.get('/calc', (req, res) => {
    let num_1 = parseInt(req.query.num_1);
    let num_2 = parseInt(req.query.num_2);
    let op = req.query.operation;

    switch (op) {
        case '+':
            res.send(`${num_2 + num_1}`)
            break;
        case '-':
            res.send(`${num_1 - num_2}`)
            break;
        case '*':
            res.send(`${num_1 * num_2}`)
            break;
        case '/':
            res.send(`${num_1 / num_2}`)
            break;
    }

    res.sendFile('calc.html', { root: path.join(__dirname, 'public') })
})

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '/public', 'index.html'));
    res.sendFile('index.html')
    // res.send({text: 'Hello text'});

    console.log(`index.html - ${req.requestTime}`);
})

app.get('/admin', (req, res) => {
    res.redirect('/')
})

// product/add
// product/remove
// product/update
// product/show/id 

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    let product = products.find((prod) => prod.id === id);

    if (!product) {
        // return res.status(404).send("no Product found")
        return res.sendStatus(404);
    }

    res.json(product)
})

app.listen(PORT, () => {
    console.log('Server on Port ' + PORT);
})
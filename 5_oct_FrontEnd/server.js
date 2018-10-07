const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello`);
})

app.get('/users/:userId(\\d)', (req, res) => {
    const userId = req.params.userId;
    res.send(`user id - ${userId}`)
})

let id = 0;

const products = [
    {name: 'apple', id: id++, price: 3},
    {name: 'grape', id: id++, price: 5}
]

// query string --------- '?'
app.get('/products', (req, res) => {
    // res.send(`
    //     <h1>Welcome</h1>
    //     <h2>${req.query.name} ${req.query.lastName}</h2>
    // `);

    // res.send(
    //     products.map( product => {
    //         return `<h2 id="product-${product.id}" data-id="${product.id}" 
    //         onclick="window.location.replace('http://localhost:3000/products/${product.id}')">${product.name}</h2>`
    //     }).join(' ')
    // )

    res.json(
        products.map( product => {
            return `${product.name}`
        })
    )
})

app.get('/products/:prodId', (req, res) => {
    let id = req.params.prodId
    const product = products.find(prod => prod.id == id);

    // let response = 'Product not Found';
    // if (product){
    //     res.send(`
    //         <a href='http://localhost:3000/products'>Home</a>
    //         <h1>${product.name}</h1>
    //         <hr>
    //         <h3>$ ${product.price}</h3>
    //     `)
    // }
    // res.send(response)

    if (product) {
        res.json(product)
    } else {
        res.send('Product not found')
    }
})

app.get('/product/:name', (req, res) => {
    const name = req.params.name;
    const product = products.find(p => p.name === name);

    if (!product) return res.sendStatus(404)
    res.json(product)
})

app.post('/products/:id/:name/:price', (req, res) => {
    let product = {
        id: req.params.id,
        name: req.params.name,
        price: req.params.price
    }

    products.push(product);
    res.json( {message: 'product', product} );
})


app.delete('/products/:id', (req, res) => {
    const id = products.findIndex(p => p.id == req.params.id)
    const product = products[id];
    products.splice(id, 1);
    res.json({message: 'product deleted', product});
})

app.listen(3000);
// localhost:3000/users/5?age=14&grade=10
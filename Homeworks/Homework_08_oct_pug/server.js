const express = require('express');
const path = require('path')
const app = express();

const PORT = 3000;
let id = 0;

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use( express.static(path.join(__dirname, '/public')) )
app.use(express.urlencoded( { extended: true } ));

let products = []

app.get('/', (req, res) => {
    res.render('index', { title: 'Demo Title', added: false, products })
})

app.post('/', (res, req) => {
    const {product_name, product_id, product_price} = req.body;
    products.push({product_name, product_id, product_price});
    res.render('index', { title: 'Demo Title', added: true, products })
})

// app.get('/products', (req, res) => {
//     res.send(
//         products.map(prod => {
//             return `<table>
//                 <tr>
//                     <td><a href="/products/${prod.id}">${prod.id}</a></td>
//                     <td>${prod.name}</td>
//                     <td>${prod.price}</td>
//             </table>`
//         }).join(' ')
//         )
// })

// app.get('/products/:id', (req, res) => {
//     let id = req.params.id;
//     console.log(id);
//     let prod = products.find(prod => prod.id == id)
//     console.log(prod);
//     if(prod){
//         res.send(`
//         <h1>${prod.name}</h1>
//         <p>$${prod.price}</p>
//         `)
//     }
// })

app.listen(PORT, () => {
    console.log(`Server is on - ${PORT} - port`);
})


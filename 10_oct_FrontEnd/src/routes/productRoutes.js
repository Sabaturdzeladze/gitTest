const express = require("express");
const router  = express.Router(); // middlewear.

let products = [
    {price: 4000000, title: 'Apple', id: 0},
    {price: 3000000, title: 'Google', id: 1},
    {price: 3000000, title: 'Nokia', id: 2}
]

router.get('/', (req, res) => {
    res.render('products/index', {title: "Products Page", products});
})

router.get('/:id(\\d)', (req, res) => {
    const id = req.params.id;

    res.render('products/detail', {title: `Product - ${id}`, product: products[id]});
})

router.get('/add', (req, res) => {
    res.json( { message: "Products Add Page" } )
})

module.exports = router;
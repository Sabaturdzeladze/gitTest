const express = require('express');
const cookieParser = require('cookie-parser')
const app     = express();
const path = require('path')

const PORT = 3000;

app.use( cookieParser('cipher') ); // cipher - encoding password // because it is a middlewear;
app.use( express.urlencoded( { extended: true } ) );

app.set('views', './src/views')
app.set('view engine', 'pug');

app.use( express.static( path.join(__dirname, '/public') )  );
app.use( express.urlencoded( { extended: true } ) );

// app.get('/', (req, res) => {
//     res.cookie('username', 'Saba Turdzeladze');
//     res.cookie('cart', { item: [1,2,3] });
//     res.cookie('forever', 'Forever value', { maxAge: 6000 });
//     res.cookie('signed', 'random text', { signed: true });

//     res.send('Hello');
// });

// app.get('/cookies', (req, res) => {
//     res.write(`<h1>Username - ${req.cookies.username}</h1>`)
//     res.write(`<h1>forever - ${req.cookies.forever}</h1>`);
//     res.write(`<h1>Cart - ${req.cookies.cart.item.join(' ')}</h1>`)
//     res.write(`<h1>Signed - ${req.signedCookies['signed']}</h1>`) // to prevent user from change the value of signed
//     res.send();
// });

// app.get('/clear', (req, res) => {
//     res.clearCookie('cart')
//     res.clearCookie('username')
//     res.send('Cookies has been removed')
// })

app.get('/', (req, res) => {
    let color = req.cookies.color;
    console.log(color);
    if (color) {
        res.render('index', {color});
    }
    res.render('index', {color})
})

app.post('/', (req, res) => {
    let color = req.body.backgroundColor;
    res.cookie('color', color);
    res.render('index', {color: color});
})

app.listen(PORT, () => {
    console.log(`Port on - ${PORT}`);
});
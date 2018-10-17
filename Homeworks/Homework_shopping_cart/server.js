const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const hbs = require('hbs') // using hbs template engine

const app = express();
const PORT = process.env.PORT || 3000;

const MyPages = {
    graphics: {
        url: '/products/1',
        quantity: 0,
        price: 299,
        title: 'Graphics Card',
        img: '/img/download.jpg',
        description: 'Kingston SSD 480GB SATA 3 2.5',
        total: 0
    },
    HDMI: {
        url: '/products/2',
        quantity: 0,
        price: 8.99,
        title: 'HDMI Cable',
        img: '/img/hdmi.jpg',
        description: 'HDMI Cable',
        total: 0
    },
    SSD: {
        url: '/products/3',
        quantity: 0,
        price: 96,
        title: 'SSD Drive',
        img: '/img/ssd.jpg',
        description: 'SSD 250GB',
        total: 0
    },
    total: {
        totalPrice: 0,
        url: '/products/summary',
        title: 'Summary'
    }
}

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(cookieParser());
app.use(session({
    secret: 'cottage',
    name: 'shopping cart',
    resave: true,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.render('index.hbs');
})

// GETS
app.get(MyPages.graphics.url, (req, res) => {
    res.render('graphics.hbs', MyPages.graphics);
})

app.get(MyPages.HDMI.url, (req, res) => {
    res.render('hdmi.hbs', MyPages.HDMI);
})

app.get(MyPages.SSD.url, (req, res) => {
    res.render('ssd.hbs', MyPages.SSD);
})

app.get(MyPages.total.url, (req, res) => {
    res.render('total.hbs', MyPages);
})


// POSTS
app.post(MyPages.graphics.url, (req, res) => {
    let count = parseFloat(req.body.quantity);
    MyPages.graphics.quantity += count;
    MyPages.graphics.total += (count * MyPages.graphics.price);
    MyPages.total.totalPrice += (count * MyPages.graphics.price);
    req.session.graphics = MyPages.graphics;
    res.render('graphics.hbs', req.session.graphics);
})

app.post(MyPages.HDMI.url, (req, res) => {
    let count = parseFloat(req.body.quantity);
    MyPages.HDMI.quantity += count;
    MyPages.HDMI.total += (count * MyPages.HDMI.price);
    MyPages.total.totalPrice += (count * MyPages.HDMI.price);
    req.session.HDMI = MyPages.HDMI;
    res.render('hdmi.hbs', req.session.HDMI);
})

app.post(MyPages.SSD.url, (req, res) => {
    let count = parseFloat(req.body.quantity);
    MyPages.SSD.quantity += count;   
    MyPages.SSD.total += (count * MyPages.SSD.price);
    MyPages.total.totalPrice += (count * MyPages.SSD.price);
    req.session.SSD = MyPages.SSD;
    res.render('ssd.hbs', req.session.SSD);
})


app.listen(PORT, () => {
    console.log(`Listening on Port - ${PORT}`);
})
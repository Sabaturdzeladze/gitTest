const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3000;

const MyPages = {
    main: {
        url: '/',
        count: 0
    },
    contact: {
        url: '/contact',
        count: 0
    }
}

// MERN
// MEAN

// M - MongoDB
// E - Express
// *******
// N - NodeJs

// A - Angular
// R - ReactJS
// V - VueJs

app.use(cookieParser());
app.use(session({
    secret: 'super cat',
    name: "demo-site",
    resave: true,
    saveUninitialized: false,
}));

// req.cookies
// req.session
app.get(MyPages.main.url, (req, res) => {
    if (req.session.main) {
        req.session.main.count++;
        res.send(`you visited this page ${req.session.main.count} times`);
    }
    else {
        req.session.main = MyPages.main;
        res.send('Welcome to demo site');
    }
});

app.get(MyPages.contact.url, (req, res) => {
    if (req.session.contact) {
        req.session.contact.count++;
        res.send(`you visited this page ${req.session.contact.count} times`);
    }
    else {
        req.session.contact = MyPages.contact;
        res.send('Welcome to demo site');
    }
});

app.get('/destroy', (req, res) => {
    req.session.destroy(() => {
        res.send('Session deleted')
    })
})


app.listen(PORT, () => {
    console.log(`Started... PORT - ${PORT}`);
})
const express = require('express');
const hbs = require('hbs');
const fs = require('fs')

let app = express();

// app.user registers middleware
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs') //  ==> view engine = hbs
app.use(express.static(__dirname + '/public')); // includes files from public folder. __diname = node-web-server

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    })
    next();
})


// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
//     next();
// })

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
}); // registering helpers, to provide functions for templates

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    // res.send({
    //     name: 'Saba',
    //     likes: ['Football', 'Basketball']
    // }) //returning json
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my Web Site!'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Error! Handling request"
    })
})

app.listen(3000, () => {
    console.log('server is on port 3000');
});
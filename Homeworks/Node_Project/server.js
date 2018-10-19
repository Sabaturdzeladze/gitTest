const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const hbs = require('hbs') // using hbs template engine

const app = express();
const PORT = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: false})); // body-parser
app.use(express.static('public'));

const cars = [];
// #region Classes
// #region User Class
class User {
    constructor(name, surname, id, father, birthDate, cars = []){
        this.name = name;
        this.surname = surname;
        this.id = id;
        this.father = father;
        this.birthDate = birthDate;
        this.disabled = false;
        this.cars = cars;
    }
    edit(name, surname, id, father, birthDate) {
        this.name = name;
        this.surname = surname;
        this.id = id;
        this.father = father;
        this.birthDate = birthDate;
    }
}
// #endregion User Class
// #region Car Class
class Car {
    constructor(make, model, VIN, govID, color, owner, lastOwner = null){
        this.make = make;
        this.model = model;
        this.VIN = VIN;
        this.govID = govID;
        this.color = color;
        this.disabled = false;
        this.owner = owner;
        this.lastOwner = lastOwner;
        cars.push(this);
    }
    edit(make, model, VIN, govID, color, owner) {
        this.make = make;
        this.model = model;
        this.VIN = VIN;
        this.govID = govID;
        this.color = color;
        this.owner = owner;
    }
}
// #endregion Car Class
// #endregion Classes
const users = [new User('Saba', 'Turdzeladze', 0, 'Daviti', '07.12.1997'), 
    new User('Jaba', 'Lipartia', 2, 'Jaba', '01.01.1987')
];



app.get('/', (req, res) => {
    res.render('index.hbs')
});

// Users
app.get('/users/add', (req, res) => {
    res.render('addUser.hbs');
})
app.post('/users/add', (req, res) => {
    //user adding
    const name = req.body.name;
    const surname = req.body.surname;
    const id = parseInt(req.body.id);
    const father = req.body.father || 'No information';
    const birthDate = req.body.birthDate || 'No information';

    const user = new User(name, surname, id, father, birthDate);
    users.push(user);
    res.redirect(`/users/${id}`);
})

app.get('/users/search', (req, res) => {
    res.render('userSearch')
});
app.post('/users/search', (req, res) => {
    const body = req.body;
    const user = users.find(u => {
        return u.name === body.name && u.surname === body.surname;
    });

    if(!user) {
        return res.status(404).send(`User Not Found`);
    }
    res.redirect(`/users/${user.id}`);
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    console.log(`----------------------------------`);
    console.log(cars);
    // poulobs axal users magram getUser-shi mainc dzvel users machvenebs
    if(!user) {
        return res.status(404).send(`User Not Found`);
    }
    res.render('getUser.hbs', user);
})

app.post('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    const index = users.indexOf(user);
    users.splice(index, 1);

    if(!user) {
        return res.status(404).send(`User Not Found`);
    }
    res.redirect('/');
})


app.get('/users/:id/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user) {
        return res.status(404).send(`User Not Found`);
    }
    res.render('editUser.hbs', user);
})

app.post('/users/:id/edit', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users.find(u => u.id === id);
    const name = req.body.name || user.name;
    const surname = req.body.surname || user.surname;
    const newId = parseInt(req.body.id) || user.id;
    const father = req.body.father || user.father;
    const birthDate = req.body.birthDate || user.birthDate;

    user.edit(name, surname, newId, father, birthDate);
    res.redirect(`/users/${user.id}`);
})


// Cars
app.get('/users/:id/cars/:VIN/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const VIN = parseInt(req.params.VIN);
    let user = users.find(u => u.id === id);
    let car = user.cars.find(c => c.VIN === VIN);

    if (!user.cars.length) {
        return res.status(404).send(`<p>This user does not have any car`)
    } else if(!car) {
        return res.status(404).send(`<p>This user does not own this car`)
    }
    res.render('editCar.hbs', user)
})
app.post('/users/:id/cars/:VIN/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const vin = parseInt(req.params.VIN);
    let user = users.find(u => u.id === id);
    let car = user.cars.find(c => c.VIN === vin);

    const make = req.body.make || car.make;
    const model = req.body.model || car.model;
    const VIN = parseInt(req.body.VIN) || car.VIN;
    const govId = parseInt(req.body.govId) || car.govId;
    const color = req.body.color || car.color;
    const newOwner = req.body.newOwner || '';
    let lastOwner;

    if (newOwner) {
        let input = newOwner.split(' ')
        let owner = users.find(u => u.name === input[0] && u.surname === input[1]);
        if (!owner) {
            return res.status(404).send(`A new Owner Must be registered`);
        } else {
            let usersCarIndex = user.cars.indexOf(car);
            user.cars.splice(usersCarIndex, 1);
            let carIndex = cars.indexOf(car);
            cars.splice(carIndex, 1);
            car.owner = owner;
            console.log(car.owner === owner);
            owner.cars.push(car);
            cars.push(car);
            cars[cars.length - 1].owner = owner;
            console.log(`-------------------`);
            // console.log(car.owner === cars[cars.length - 1].owner);
            console.log(cars);
        }
    }

    if (req.body.lastOwner) {
        let arr = req.body.lastOwner.split(' ');
        lastOwner = users.find(u => u.name === arr[0] && u.surname === arr[1]);
    }

    car.edit(make, model, VIN, govId, color, user)

    res.redirect(`/users/${id}`)
})


// "/users/{{id}}/cars/add"
app.get('/users/:id/cars/add', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users.find(u => u.id === id);

    res.render('addCar.hbs', {name: user.name, surname: user.surname})
})
app.post('/users/:id/cars/add', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users.find(u => u.id === id);

    // car adding
    const make = req.body.make;
    const model = req.body.model;
    const VIN = parseInt(req.body.VIN);
    const govId = parseInt(req.body.govId);
    const color = req.body.color;
    const lastOwner = req.body.lastOwner;

    let newCar = new Car(make, model, VIN, govId, color, user, lastOwner)
    user.cars.push(newCar);
    res.redirect(`/users/${user.id}`);
})

app.listen(PORT, () => {
    console.log(`Server is on Port - ${PORT}`);
})
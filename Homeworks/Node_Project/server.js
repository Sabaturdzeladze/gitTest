const express = require('express');
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
const users = [
    new User('Saba', 'Turdzeladze', 0, 'Daviti', '07.12.1997'), 
    new User('Jaba', 'Lipartia', 2, 'Jaba', '01.01.1987')
];
let joni = new User('Joni', 'Jonidze', 1, 'Mama', '12.02.1990');
users.push(joni);
let car = new Car('Mercedes', 'e320', 213, 123, 'green', joni);
joni.cars.push(car)


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

    for(let user of users){
        if(user.id === id){
            return res.send(`User with this ID already exists`)
        }
    }
    const user = new User(name, surname, id, father, birthDate);
    users.push(user);
    res.redirect(`/users/${id}`);
})

app.get('/users/search', (req, res) => {
    res.render('userSearch')
});
app.post('/users/search', (req, res) => {
    const body = req.body;
    let user = {};
    if (body.name && body.surname) {
        user = users.find(u => {
            return u.name === body.name && u.surname === body.surname;
        });
    }
    else if (body.id) {
        user = users.find(u => u.id === parseInt(body.id));
    }
    if(!user || user.disabled) {
        return res.status(404).send(`User Not Found`);
    }
    res.redirect(`/users/${user.id}`);
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if(!user || user.disabled) {
        return res.status(404).send(`User Not Found`);
    }
    res.render('getUser.hbs', user);
})

app.post('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    const index = users.indexOf(user);
    users.splice(index, 1);

    if(!user || user.disabled) {
        return res.status(404).send(`User Not Found`);
    }
    res.redirect('/');
})


app.get('/users/:id/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user || user.disabled) {
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


// ---------------------------------------------------------------------
// Cars
app.get('/users/:id/cars/:VIN/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const VIN = parseInt(req.params.VIN);
    let user = users.find(u => u.id === id);
    let car = user.cars.find(c => c.VIN === VIN);

    if (user.disabled) {
        return res.send(`Use not Found`)
    }

    if (!user.cars.length) {
        return res.status(404).send(`<p>This user does not have any car`)
    } else if(!car || car.disabled) {
        return res.status(404).send(`<p>This user does not own this car`)
    }
    res.render('editCar.hbs', {user, car});
})
app.post('/users/:id/cars/:VIN/edit', (req, res) => {
    const id = parseInt(req.params.id);
    const vin = parseInt(req.params.VIN);
    let user = users.find(u => u.id === id);
    let car = user.cars.find(c => c.VIN === vin);

    const make = req.body.make || car.make;
    const model = req.body.model || car.model;
    const VIN = parseInt(req.body.VIN) || car.VIN;
    const govID = parseInt(req.body.govID) || car.govID;
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
            car.lastOwner = user;
            owner.cars.push(car);
            car.edit(make, model, VIN, govID, color, owner);
            return res.redirect(`/users/${id}`);
        }
    }

    if (req.body.lastOwner) {
        let arr = req.body.lastOwner.split(' ');
        lastOwner = users.find(u => u.name === arr[0] && u.surname === arr[1]);
    }

    car.edit(make, model, VIN, govID, color, user)

    res.redirect(`/users/${id}`)
})


// add cars for users
// "/users/{{id}}/cars/add"
app.get('/users/:id/cars/add', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users.find(u => u.id === id);

    if (user.disabled) {
        return res.send(`User not Found`);
    }

    res.render('addCar.hbs', {name: user.name, surname: user.surname})
})
app.post('/users/:id/cars/add', (req, res) => {
    const id = parseInt(req.params.id);
    let user = users.find(u => u.id === id);

    // car adding
    const make = req.body.make;
    const model = req.body.model;
    const VIN = parseInt(req.body.VIN);
    const govID = parseInt(req.body.govID);
    const color = req.body.color;
    const lastOwner = req.body.lastOwner;

    for (let car of cars) {
        if (car.VIN === VIN) {
            return res.send(`Car with this VIN code already exists`)
        }
    }

    let newCar = new Car(make, model, VIN, govID, color, user, lastOwner)
    user.cars.push(newCar);
    res.redirect(`/users/${user.id}`);
})

// search cars
app.get('/cars/search', (req, res) => {
    if (!cars.length) {
        res.status(400).send(`There are no Cars`)
    }
    else {
        res.render('carSearch.hbs')
    }
})
app.post('/cars/search', (req, res) => {
    const make = req.body.make;
    const model = req.body.model;
    const VIN = parseInt(req.body.VIN);
    const govID = parseInt(req.body.govID);

    if (make && model) {
        const car = cars.find(c => c.make === make && c.model === model);
        if (car.owner.disabled) {
            return res.send(`User not Found`)
        }
    
        if (car.disabled) {
            return res.send(`Car not Found`)
        }
        return res.redirect(`/cars/${car.VIN}`)
    }
    else if (VIN) {
        const car = cars.find(c => c.VIN === VIN);
        if (car.owner.disabled) {
            return res.send(`User not Found`)
        }
    
        if (car.disabled) {
            return res.send(`Car not Found`)
        }
        return res.redirect(`/cars/${car.VIN}`)
    }
    else if (govID) {
        const car = cars.find(c => c.govID === govID);
        if (car.owner.disabled) {
            return res.send(`User not Found`)
        }
    
        if (car.disabled) {
            return res.send(`Car not Found`)
        }
        return res.redirect(`/cars/${car.VIN}`);
    }
})

// get car
app.get('/cars/:VIN', (req, res) => {
    const VIN = parseInt(req.params.VIN);
    const car = cars.find(c => c.VIN === VIN);

    res.render('getCar.hbs', car)
})

// delete car
app.get('/cars/:VIN/delete', (req, res) => {
    const VIN = parseInt(req.params.VIN);
    const car = cars.find(c => c.VIN === VIN);

    if (car){
        const index = cars.indexOf(car);
        cars.splice(index, 1);
        const carIndex = car.owner.cars.indexOf(car);
        car.owner.cars.splice(carIndex, 1);
    }
    res.redirect('/');
})

// Admin Panel
app.get('/admin', (req, res) => {
    res.render('admin.hbs');
})

// searching users, or cars
app.post('/admin', (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const id = parseInt(req.body.id);
    let user;
    
    const make = req.body.make;
    const model = req.body.model;
    const VIN = parseInt(req.body.VIN);
    const govID = parseInt(req.body.govID);
    let car;

    //users filter
    if (name && surname) {
        user = users.find(u => {
            return u.name.toLowerCase() === name.toLowerCase() && u.surname.toLowerCase() === surname.toLowerCase();
        });
        if (!user){
            return res.sendStatus(404)
        }
    }
    else if (id || id === 0) { // id === 0; for testing my demo users
        user = users.find(u => u.id === parseInt(id));
        if (!user){
            return res.sendStatus(404)
        }
    }
    if(user) {
        return res.render('admin.hbs', {adminUser: true, user})
    }

    // Cars filter
    if (make && model) {
        car = cars.find(c => c.make.toLowerCase() === make.toLowerCase() && c.model.toLowerCase() === model.toLowerCase())
        if (!car) {
            return res.status(404).send(`Car Not Found`);
        }
    }
    else if (VIN) {
        car = cars.find(c => c.VIN === VIN);
        if (!car) {
            return res.status(404).send(`Car Not Found`);
        }
    }
    else if (govID) {
        car = cars.find(c => c.govID === govID);
        if (!car) {
            return res.status(404).send(`Car Not Found`);
        }
    }

    if(car) {
        return res.render('admin.hbs', {adminCar: true, car})
    }
})

// configuring user (delete, disable, enable)
app.post('/admin/user/:id', (req, res) => {
    const del = req.body.delete;
    const enable = req.body.enable;
    const disable = req.body.disable;
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    const index = users.indexOf(user);

    if (del) {
        users.splice(index, 1);
    }
    else if (enable) {
        user.disabled = false;
    }
    else if (disable) {
        user.disabled = true;
    }
    res.redirect('/admin');
})

// configuring car
app.post('/admin/car/:VIN', (req, res) => {
    const del = req.body.delete;
    const enable = req.body.enable;
    const disable = req.body.disable;
    const VIN = parseInt(req.params.VIN);
    const car = cars.find(c => c.VIN === VIN);
    const index = cars.indexOf(car);

    if (del) {
        cars.splice(index, 1);
        const carIndex = car.owner.cars.indexOf(car);
        car.owner.cars.splice(carIndex, 1);
    }
    else if (enable) {
        car.disabled = false;
    }
    else if (disable) {
        car.disabled = true;
    }
    res.redirect('/admin')
})



app.listen(PORT, () => {
    console.log(`Server is on Port - ${PORT}`);
})
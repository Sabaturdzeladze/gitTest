const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();

const secret = 'demo__system';

const encrypt = data => {
    const hash = crypto.createHmac('sha256', secret)
        .update(data)
        .digest('hex');

    return hash;
}

const User = {
    username: 'admin',
    password: encrypt('admin')
}


app.use(cors('*'));
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(cors('*'));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/login', (req, res) => {
    let {
        username,
        password
    } = req.body
    password = encrypt(password);

    if (User.username === username && User.password === password) {
        res.json({
            username,
            password: encrypt(password),
            auth: true
        });
    } else {
        res.json({
            auth: false,
            message: 'user not found'
        });
    }

});

app.listen(PORT, () => console.log(`PORT - ${PORT}`));
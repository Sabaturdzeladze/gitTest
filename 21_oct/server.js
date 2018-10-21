const express = require('express');
const path    = require('path')
const app     = express();

app.use( express.static(path.join(__dirname, 'public')) );
app.use( express.static(path.join(__dirname, '/node_modules/jquery')) );
app.use(express.urlencoded( {extended: true} ));

let PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
});

app.get('/add', (req, res) => {
    if (!req.query.num_1 || !req.query.num_2){
        res.sendStatus(400);
    }
    let num_1 = parseInt(req.query.num_1);
    let num_2 = parseInt(req.query.num_2);
    let result = num_1 + num_2;

    setTimeout(() => {
        res.send(result.toString());
    }, 2000);
})

app.get('/prime', (req, res) => {
    if (!req.query.min || !req.query.max){
        return res.sendStatus(400);
    }
    let arr = [];
    let min = parseInt(req.query.min);
    let max = parseInt(req.query.max);
    for (min; min <= max; min++){
        let count = 0;
        for (let i = 1; i <= min; i++){
            if (min % i === 0){
                count++;
            }
        }
        if (count < 3){
            arr.push(min);
        }
    }
    console.log(arr);
    setTimeout(() => {
        res.send(arr.length.toString());
    }, 2000);
})


app.listen(PORT, () => {
    console.log(`Server is on Port - ${PORT}`);
})
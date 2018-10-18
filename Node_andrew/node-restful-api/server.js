const express = require('express');
const app = express();

app.use(express.json()); // for req.body to work

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];


app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3){
        return res.status(400).send('Named is required and should be minimum 3 characters');
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c = c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course was not found');
    }
    course.name = req.body.name;
    res.send(course);
});


app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c = c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course was not found');
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
}); 


// also '/api/courses/:year/:month'
app.get('/api/courses/:id', (req, res) => {
    // req.query => for query parameters. e.g: /api/courses/1?sortBy=name; return object sortBy: name
    const id = parseInt(req.params.id);
    const course = courses.find((c) => c.id === id);

    if (course) {
        res.send(course);
    } else {
        res.status(404).send('The course with the given ID was not found');
    }
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on PORT - ${PORT}`);
});
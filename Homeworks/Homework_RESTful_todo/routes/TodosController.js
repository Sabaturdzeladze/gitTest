const express = require('express')
const router = express.Router();

const Todo = require('../models/Todo');
const TodoService = new Todo();
console.log(TodoService);

router.route('/todos').get((req, res) => {
    let todos = TodoService.getAllTodos();
    res.json(todos)
})

router.route('/todos/:id').get((req, res) => {
    if (!req.params.id){
        res.sendStatus(400);
    }
    let todoId = req.params.id;
    let todo = TodoService.getTodoById(todoId);
    res.json(todo);
})

router.route('/todos/:id').put( (req, res) => {
    if (!req.params.id || !req.body){
        return res.sendStatus(400);
    }
    let todoId = req.params.id;
    let todo = req.body;
    TodoService.updateTodo(todo);
    res.json({ message: `todo ${todoId} has been updated` });
})
router.route('/todos').post( (req, res) => {
    if (!req.body){
        return res.sendStatus(400);
    }
    let todo = req.body;
    TodoService.addTodo(todo);
    res.json({ message: `todo has been added` });
})

module.exports = router;
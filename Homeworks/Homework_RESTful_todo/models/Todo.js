class Todo {
    constructor() {
        this.todos = [];
    }
    getAllTodos() {
        return this.todos;
    }

    getTodoById(todoId) {
        return this.todos.find(m => m.id == todoId);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    updateTodo(todoId, todo) {
        idx = this.todos.findIndex(m => m.id == todoId);
        this.todos[idx] = todo;
    }

    deleteTodo(todoId) {
        idx = this.todos.findIndex(m => m.id == todoId);
        this.todos.splice(idx, 1);
    }
}

module.exports = Todo;
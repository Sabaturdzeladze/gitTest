// Fetch existing todos from localStorage
function getSavedTodos() {
    const todosJSON = localStorage.getItem("todos");

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    }
    else {
        return [];
    }
}

// Save todos to localStorage 
function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Render application todos 
function render(todos){
    const container = document.querySelector("#container");
    container.innerHTML = "";
    const incompleteTodos = todos.filter(function (todo) {
        return !todo.completed;
    })
    generateSummaryDom(container, incompleteTodos);
    generateTodoDOM(todos, container);
}

// get the Dom elements for an individual note
function generateTodoDOM(todos, container) {
    todos.forEach( element => {
        let div = document.createElement("div");
        let button = document.createElement("button");
        button.textContent = "x";
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        let span = document.createElement("span");
        span.textContent = element.text;
        container.appendChild(div);
        div.appendChild(checkbox);
        div.appendChild(span);
        div.appendChild(button);
    });
}

// FIltering user input
function filterTodo(newArr, container){
    generateTodoDOM(newArr, container);
}



//get the DOM elements for list summary
function generateSummaryDom(container, incompleteTodos) {
    const summary = document.createElement("h2");
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    container.appendChild(summary);
}
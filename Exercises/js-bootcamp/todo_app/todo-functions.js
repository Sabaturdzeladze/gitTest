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

// Remove todos
function removeTodos(id){
    index = todos.findIndex((todo) => {
        return todo.id === id;
    })

    if (index > -1){
        todos.splice(index, 1);
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
        let checkbox = document.createElement("input");
        let span = document.createElement("span");
           
        checkbox.checked = element.completed;

        checkbox.addEventListener('change', function(e){
            element.completed = e.target.checked;
            saveTodos(todos);
            render(todos);
        })
     
        button.addEventListener('click', function(){
            removeTodos(element.id);
            saveTodos(todos);
            render(todos);
        })
        checkbox.setAttribute("type", "checkbox");
        button.textContent = "x";
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
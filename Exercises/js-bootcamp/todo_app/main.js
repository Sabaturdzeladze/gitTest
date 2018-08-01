let todos = getSavedTodos();

// let count = 0;
// todos.forEach(element => {
//     if (!element.completed){
//         let p = document.createElement("p");
//         document.body.appendChild(p)
//         p.textContent = element.text;
//         count++;
//     }
// });
// document.write(`You have ${count} todos left`);


render(todos)

document.querySelector("#search").addEventListener("input", (e) => {
    const container = document.querySelector("#container");
    const newArr = todos.filter( (element) => {
        return element.text.toLowerCase().includes((e.target.value).toLowerCase());
    } )

    container.innerHTML = ""
    filterTodo(newArr, container);
})

// add new todo
document.querySelector("#todo-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let newObj = {
        text: e.target.elements.newTodo.value,
        completed: false
    }

    todos.push(newObj);
    saveTodos(todos);
    e.target.elements.newTodo.value = "";
    render(todos);
})

function hideCompleted (bool = false) {
    if (bool){
        const newTodos = todos.filter((element) => {
            return !element.completed;
        });

        render(newTodos);
    }
}

document.querySelector("#hide-completed").addEventListener("change", e => {    
    hideCompleted(e.target.checked);
})
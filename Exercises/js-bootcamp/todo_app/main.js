const todos = [{
    text: "Order cat food",
    completed: false
}, {
    text: "Clean kitchen",
    completed: true
}, {
    text: "buy food",
    completed: true
},{
    text: "Do work",
    completed: false
}, {
    text: "Exercise",
    completed: true
},]

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




function render(todos){
    const container = document.querySelector("#container");
    container.innerHTML = "";
    const incomleteTodos = todos.filter(function (todo) {
        return !todo.completed;
    })
    const summary = document.createElement("h2");
    summary.textContent = `You have ${incomleteTodos.length} todos left`;
    container.appendChild(summary);
    todos.forEach( element => {
        let p = document.createElement("p");
        p.textContent = element.text;
        container.appendChild(p);
    });
}
render(todos)

document.querySelector("#search").addEventListener("input", (e) => {
    const container = document.querySelector("#container");
    const newArr = todos.filter( (element) => {
        return element.text.toLowerCase().includes(e.target.value);
    } )

    container.innerHTML = ""

    newArr.forEach((element) => {
        let child = document.createElement("p");
        container.appendChild(child);
        child.textContent = element.text;
    })
})

document.querySelector("#todo-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let newObj = {
        text: e.target.elements.newTodo.value,
        completed: false
    }
    todos.push(newObj);
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
    hideCompleted(e.target.checked)
})
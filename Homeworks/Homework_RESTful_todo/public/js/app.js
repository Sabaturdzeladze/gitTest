window.onload = () => {
    let todosURL = `/api/todos`
    const todosListElement = document.getElementById('todosList');

    const addTodoBtn = document.getElementById('btnAddTodo');
    addTodoBtn.addEventListener('click', () => {
        let todo = {
            task: document.querySelector('#task').value,
            description: document.querySelector('#description').value,
            startDate: document.querySelector('#startDate').value,
            endDate: document.querySelector('#endDate').value,
        };

        addTodo(todo);
    });

    function addTodo(todo) {
        fetch(todosURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        fetchData(todosURL, render, todosListElement);
        alert("todo added successfully");
    };


    fetchData(todosURL, render, todosListElement);

    function render(data, element) {
        if ( data.length ) {
            const html = data.map( item => `
                <tr>
                    <td>${item.task}</td>
                    <td>${item.description}</td>
                    <td>${item.startDate}</td>
                    <td>${item.endDate}</td>
                    <td><button id="edit">Edit</button>  <button id="delete">Delete</button></td>
                </tr>
            `).join(' ');
            element.innerHTML = html;
        }
    }
    function fetchData(url, callback, element) {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',   // what information do I post
                'Accept': 'application/json'
            }
        })
        .then( data => data.json())
        .then( data => {
            // console.log('Response', data);
            callback(data, element);
        } )
        .catch(err => console.log(err))
    }
}
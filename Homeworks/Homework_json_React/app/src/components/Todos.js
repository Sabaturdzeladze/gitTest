import React from 'react';

const Todos = (props) => {
    let data = [];
    if (props.length < props.data.length) {
        data = props.data.slice(0, props.length)
    }
    return (
        <div>
            {data.map((todo) => (
                <div className="todos" key={todo.id}>
                    <h2><b>Todo title:</b> {todo.title}</h2>
                    { todo.completed ? <p>Todo is Completed</p> : <p>Not Completed</p> }
                </div>
            ))}
        </div>
    )
}

export default Todos;
import React from 'react';

function List({ todos, onToggle, onRemove }) {
    return (
        <div className="list-custom list-group">
            {
                todos.map( todo => (
                    <div key={todo.id} className="todo list-group-item justify-content-between">
                        <label>
                            <input type="checkbox" checked={todo.done} onChange={ () => onToggle(todo.id) } />
                            { todo.name }
                            <button className="btn btn-danger btn-sm" /* onClick={} */>Remove</button>
                        </label>
                    </div>
                ) )
            }
        </div>
    );
}

export default List;
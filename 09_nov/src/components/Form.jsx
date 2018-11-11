import React from 'react';

function Form({ onSubmit }) {
    let input = null;
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit( {title: input.value} );
        input.value = '';
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="input-group">
                <input type="text" className="form-control form-control-sm" ref={ inp => input = inp } />
                <span>&nbsp;</span>
                <span className="input-group-btn">
                    <button className="btn btn-success">Save</button>
                </span>
            </div>

        </form>
    )
}

export default Form;
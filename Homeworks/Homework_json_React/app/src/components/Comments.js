import React from 'react';

const Comments = (props) => {
    let data = [];
    if (props.length < props.data.length) {
        data = props.data.slice(0, props.length)
    }
    return (
        <div>
            {data.map((comment) => (
                <div className="comments" key={comment.id}>
                    <h2>Author: {comment.email}</h2>
                    <p><b>Comment:</b> {comment.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Comments;
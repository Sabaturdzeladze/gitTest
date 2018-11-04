import React from 'react';

const Posts = (props) => {
    let data = [];
    if (props.length < props.data.length) {
        data = props.data.slice(0, props.length)
    }
    return (
        <div>
            {data.map((post) => (
                <div className="posts" key={post.id}>
                    <h2>Post id: {post.id}</h2>
                    <p>Post title: {post.title}</p>
                    <p>Post body: {post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts;
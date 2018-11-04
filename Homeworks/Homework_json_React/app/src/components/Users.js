import React from 'react';

const Users = (props) => {
    let data = [];
    if (props.length < props.data.length) {
        data = props.data.slice(0, props.length)
    }
    return (
        <div>
            {data.map((user) => (
                <div className="users" key={user.id}>
                    <h2><b>User Name:</b> {user.name}</h2>
                    <h3><b>Username:</b> {user.username}</h3>
                    <p><b>E-mail:</b> {user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default Users;
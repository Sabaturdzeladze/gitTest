import React, { Component } from 'react';
import Address from './Address';
import Company from './Company';

export default class User extends Component {
    render() {
        return (
            <div>
                {!!this.props.users && this.props.users.map( (user) => (
                    <div key={user.id}>
                        <h2>Name - {user.name}</h2>
                        <h3>User Name - {user.username}</h3>
                        <p>E-mail - {user.email}</p>
                        <p>Phone number - {user.phone}</p>
                        <h3>{user.name} Address:</h3>
                        <Address address={user.address}/>
                        <h3>Company: </h3>
                        <Company company={user.company} />
                        <hr/>
                    </div>
                ) )}
            </div>
        )
    }

}
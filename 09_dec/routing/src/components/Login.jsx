import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    // isLoggedIn: false,
    showLogin: true
  }

  OnSubmitHandler = (e) => {
    e.preventDefault();
    alert('submit');
    this.login(this.state.username, this.state.password);
    // console.log(this.state.username, this.state.password);
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  login = (username, password) => {
    fetch(`http://localhost:5000/login`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then( res => res.json() )
      .then( result => {
        console.log(result);
        if(result.auth) {
          localStorage.setItem('authorized', result.username);
          // this.props.isLoggedIn = true;
          this.setState({ isLoggedIn: true});
          this.props.showLogin(false);
        } else {
          localStorage.removeItem('authorized');
        }
      } )
      .catch(err => console.log(err))
  }
  render() {
    const { isLoggedIn } = this.state;
    if ( isLoggedIn ) {
      return <Redirect to="/profile"/>
    }
    return (
      <form onSubmit={this.OnSubmitHandler} className="form form--login">
        <div className="input--group">
          <label htmlFor="username">
            Username:
            <br />
            <input
              onChange={this.onChangeHandler}
              name="username"
              type="text"
              id="username"
              placeholder="Username"
              className="from--input"
            />
          </label>
        </div>
        <div className="input--group">
          <label htmlFor="password">
            Password:
            <br />
            <input
              onChange={this.onChangeHandler}
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              className="from--password"
            />
          </label>
        </div>
        <div className="input--group">
          <button className="btn btn--login">Login</button>
        </div>
        {this.props.isLoggedIn && <Redirect to="/profile" />}
      </form>
    );
  }
}

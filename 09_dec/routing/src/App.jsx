import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Login from "./components/Login";
import { ContactPage } from "./components/ContactPage";
import { ProfilePage } from "./components/Profile";
import { IndexPage } from "./components/IndexPage";
import "./App.css";

import Data from "./db/data.json";

class App extends Component {
  state = {
    showLogin: true
  };
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul className="App-link">
              <li className="menu--item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu--item">
                <Link to="/contact">Contact</Link>
              </li>
              {this.state.showLogin && (
                <li className="menu--item">
                  <Link to="/login">Login</Link>
                </li>
              )}
              {!this.state.showLogin && (
                <li className="menu--item">
                  <Link to="/profile">Profile</Link>
                </li>
              )}
            </ul>

            <Route
              exact
              path="/"
              render={() => (
                <IndexPage title={Data.index.title} desc={Data.index.desc} />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <Login
                  showLogin={change => {
                    this.setState({ showLogin: change });
                  }}
                  isLoggedIn={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              path="/contact"
              render={() => (
                <ContactPage
                  title={Data.contact.title}
                  desc={Data.contact.desc}
                />
              )}
            />
            <ProtectedRoute path="/profile" component={ProfilePage} />

            {!this.state.showLogin && <Redirect to="/profile" />}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

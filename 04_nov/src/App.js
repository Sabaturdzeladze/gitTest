import React, { Component } from 'react';
import './App.css';
import User from './components/User';

const url = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  state = {
    jsonData: null
  }

  componentDidMount() {
    fetch(url)
      .then( data => data.json() )
      .then( users => this.setState( { jsonData: users } ) )
      .catch( err => console.log(err) )
  }

  render() {
    let persons = [
      { name: 'Vaxo', age: 23, id: 1, isActive: false },
      { name: 'Grigoli', age: 20, id: 2, isActive: true },
      { name: 'Mamuka', age: 20, id: 3, isActive: false },
      { name: 'Salome', age: 17, id: 4, isActive: true },
    ];
    const showList = true;
    // if (!showList) {
    //   return null;
    // }
    return (
      <div className="App">
        {/* <h2>Array.map()</h2>
        {showList && (
          <ul>
            {
              persons.map((person) => <li key={person.id}>{person.name} {person.id}</li>)
            }
          </ul>
        )}
        <hr />
        <h2>Array.filter().map()</h2>
        <ul>
          {
            persons
              .filter((person) => person.isActive)
              .map((person) => <li key={person.id}>{person.name} {person.id}</li>)
          }
        </ul>
        <hr/>
        <h2>Fetched Users</h2>
        <ol>
          {
            this.state.jsonData && this.state.jsonData.map( (user) => <li key={user.id}>{user.name}</li> )
          }
        </ol> */}

        <h2>Users</h2>
        {!!this.state.jsonData && <User users={this.state.jsonData} />}
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import Albums from './components/Albums';
import Comments from './components/Comments';
import Photos from './components/Photos';
import Todos from './components/Todos';
import Users from './components/Users';

const url = 'https://jsonplaceholder.typicode.com/users';
class App extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    fetch(url)
      .then( data => data.json() )
      .then( data => this.setState( { data } ) )
      .catch( err => console.log(err.message) )
  }
  render() {
    return (
      <div>
        {/* Posts */}
        { ( !!this.state.data && url.endsWith('posts') ) && <Posts length={30} data={this.state.data}/> } 
        {/* Albums */}
        { ( !!this.state.data && url.endsWith('albums') ) && <Albums length={20} data={this.state.data}/> } 
        {/* Comments */}
        { ( !!this.state.data && url.endsWith('comments') ) && <Comments length={25} data={this.state.data}/> } 
        {/* Photos */}
        { ( !!this.state.data && url.endsWith('photos') ) && <Photos length={40} data={this.state.data}/> } 
        {/* Todos */}
        { ( !!this.state.data && url.endsWith('todos') ) && <Todos length={35} data={this.state.data}/> } 
        {/* Users */}
        { ( !!this.state.data && url.endsWith('users') ) && <Users length={4} data={this.state.data}/> } 
        
      </div>
    );
  }
}

export default App;
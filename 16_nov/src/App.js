import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import MainWrapper from './components/main/MainWrapper';
import Design from './components/design/Design';
import Ideas from './components/ideas/Ideas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainWrapper />
        <Design />
        <Ideas />
      </div>
    );
  }
}

export default App;

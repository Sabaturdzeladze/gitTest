import React, { Component } from 'react';
import './App.css';

export const inc = prevState => {
  return { value: prevState.value + 1 };
}

export const dec = prevState => {
  return { value: prevState.value - 1 };
}

export const Value = ({ value }) => <h3>{ value }</h3>;

class App extends Component {
  state = {
    value: 0
  };

  onPlusHandler = (e) => {
    this.setState(inc)
  }

  onMinusHandler = () => {
    this.setState(dec)
  }

  onResetHandler = () => {
    this.setState({ value: 0 })
  }
  
  render() {
    return (
      <div className="App">
        <Value value={this.state.value} />
        <button onClick={this.onPlusHandler} id="plus">+</button>
        <button onClick={this.onMinusHandler}>-</button>
        <button onClick={this.onResetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;

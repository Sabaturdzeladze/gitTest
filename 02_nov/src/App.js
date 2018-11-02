import React, { Component } from 'react';
import './App.css';
// import {username, lastname} from './Play';
// import {username as firstname, lastname} from './Play';
// import * as person from './Play';
import developer from './Play'
import Counter from './Counter';

const styles = { color: 'red', padding: '30px', border: '2px dashed black', backgroundColor: 'seagreen' }

function SaySomething(props) {
  return <p>{props.text}</p>
}
const FooComponent = (props) => {
  return (
    <div style={{...styles, fontSize: '34px'}}>
      <p>{props.text}</p>
    </div>
  )
}

export default class App extends Component {
  randomText = () => {
    return `Random Text ${developer.name} ${developer.lastname}`;
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>{ this.randomText() }</h2>
        <SaySomething text="Say something"/>
        <FooComponent text="Lorem ipsum dolor sit amet." />
        <Counter />
      </div>
    )
  }
}
import React, { Component } from 'react';
import List from './List';
import Item from './Item';
import './App.css';

class App extends Component {
  itemInput = React.createRef(); //creating rreference for input in List.js
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { key: 'item1', text: 'item1 Text' },
        { key: 'item2', text: 'item2 Text' },
      ],
      currentItem: {
        key: '',
        text: ''
      },
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState( {items: filteredItems} )
  }

  addItem = event => {
    event.preventDefault();
    const newValue = this.state.currentItem;
    if(newValue.text) {
      const items = [...this.state.items, newValue]
      this.setState( { items, currentItem: {key: '', value: ''} } );
    }
    console.log(event.target.elements[0].value);
  }

  handleInput = event => {
    const text = event.target.value;
    const currentItem = { text, key: Date.now() };
    this.setState({ currentItem })
  }


  render() {
    return (
      <div className="App">
        <List 
          itemInput={this.itemInput}
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <Item items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;

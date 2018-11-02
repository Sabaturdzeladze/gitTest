import React, {Component} from 'react';

export default class Counter extends Component {
    state = { count: 0 }
    handleIncrement = () => {
        this.setState( (prevState) => ( {count: ++prevState.count} ) )
    }
    handleDecrement = () => {
        this.setState( (prevState) => ( {count: --prevState.count} ) )
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button 
                    type="button"
                    onClick={this.handleIncrement}    
                >+</button>
                <button 
                    type="button"
                    onClick={this.handleDecrement}
                >-</button>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const Index = () => {
  return (
    <div>
      <h1>Index page</h1>
      <p>Lorem Ipsum text....</p>
    </div>
  )
}

// match, history, location
const Product = ({ match }) => (
  <div>
    <h2>{match.params.category.toUpperCase()}</h2>
  </div>
);

const Products = ({ match }) => {
  return (
    <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to={`${match.url}/mobiles`} >Mobiles</Link></li>
              <li><Link to={`${match.url}/laptops`} >Laptops</Link></li>
              <li><Link to={`${match.url}/cameras`} >Cameras</Link></li>
            </ul>
          </nav>

          <Route path={`${match.url}/:category`} component={Product} />
          <Route path={`${match.url}`} exact render={ () => (
            <div><h2>render function</h2></div>
          ) } />
        </div>
      </Router>
  )
}



const Portfolio = () => {
  return (
    <div>
      <h1>portfolio page</h1>
      <p>Lorem Ipsum text....Portfolio</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Index</Link></li>
              <li><Link to="/products">products</Link></li>
              <li><Link to="/portfolio">portfolio</Link></li>
            </ul>
          </nav>
          <Route path="/" component={Index} exact={true} />
          <Route path="/products" component={Products} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import FooterNav from './components/footer-nav/FooterNav';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import Awards from './components/awards/Awards';
import Contact from './components/contact/Contact';
import Main from './components/homepage/Main';

const links = [
  { page: 'HOME', link: '/' },
  { page: 'PRODUCTS', link: '/products' },
  { page: 'AWARDS', link: '/awards' },
  { page: 'CONTACT US', link: '/contact' },
];


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header links={links} />
          <Route path="/" component={Main} exact />
          <Route path="/awards" component={Awards} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          
          <FooterNav links={links} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

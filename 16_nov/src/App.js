import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import MainWrapper from './components/main/MainWrapper';
import Design from './components/design/Design';
import Ideas from './components/ideas/Ideas';
import Insights from './components/insights/Insights';
import FooterNav from './components/footer-nav/FooterNav';
import Footer from './components/footer/Footer';

const links = [
  { page: 'HOME', link: '#' },
  { page: 'PRODUCTS', link: '#' },
  { page: 'AWARDS', link: '#' },
  { page: 'CONTACT US', link: '#' },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header links={links} />
        <MainWrapper />
        <Design />
        <Ideas />
        <Insights />
        <FooterNav links={links} />
        <Footer />
      </div>
    );
  }
}

export default App;

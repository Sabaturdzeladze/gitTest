import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Portfolio from '../components/PortfolioPage';
import PortfolioID from '../components/PortfolioItem';
import Contact from '../components/Contact'
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioID} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

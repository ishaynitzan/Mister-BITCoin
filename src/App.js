import React from "react";
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './Sass/App.scss';

import { Home } from './pages/HomePage.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { MainFooter } from './components/Main-Footer.jsx';
import { ChartsPage } from './pages/ChartsPage.jsx';
import { DetailsPage } from "./pages/DetailsPage.jsx";


export function App() {



  return (
    <Router>
      <div className="App">
        <header>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div>
            <NavLink to="/charts">Charts</NavLink>
          </div>

        </header>

        <section className="main-container">
          <Switch >
            <Route component={DetailsPage} path="/contact/details/:id?" />
            <Route component={ContactPage} path="/contact" />
            <Route component={ChartsPage} path="/charts" />
            <Route component={Home} path="/" />
          </Switch>
          <MainFooter />
        </section>
      </div>
    </Router>
  );
}





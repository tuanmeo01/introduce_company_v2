import './App.css';
import Nav from './view/nav/Nav';
import Home from './view/home/Home';
import Product from './view/product/Product';
import Faq from './view/faq/Faq';
import Footer from './footer/Footer';
import Service from './view/service/Service';
import Team from './view/team/Team'
import React, { Component }  from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/faq">
            < Faq/>
          </Route>
          <Route path="/service">
          <Service/>
          </Route>  
          <Route path="/team">
          <Team/>
          </Route> 
        </Switch>
      <Footer/>
      </header>
    </div>
  </BrowserRouter>
  );
}
export default App;
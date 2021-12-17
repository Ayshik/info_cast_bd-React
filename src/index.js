import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import All_service from './Pages/All_service';
import Cable_tv from './Pages/Cable_tv';
import Dedicated_server from './Pages/Dedicated_server';
import Corporate from './Pages/Corporate';
import About_us from './Pages/About_us';
import Gamer_packages from './Pages/Gamer_packages';
import Most_popular_packages from './Pages/Most_popular_packages';
import Student_packages from './Pages/Student_packages';
import Kids_packages from './Pages/Kids_packages';
import Bill_pay from './Pages/Bill_pay';
import Special_offers from './Pages/Special_offers';
import Contact_us from './Pages/Contact_us';


ReactDOM.render(
  <React.StrictMode>
    
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
           
            <Route exact path="/All-Service">
              <All_service/>
            </Route>

            <Route exact path="/Tv-Service">
              <Cable_tv/>
            </Route>
            <Route exact path="/Dedicated-server">
              <Dedicated_server/>
            </Route>
            <Route exact path="/Corporate">
              <Corporate/>
            </Route>
            <Route exact path="/About_us">
              <About_us/>
            </Route>
            <Route exact path="/Gamer_packages">
              <Gamer_packages/>
            </Route>
            <Route exact path="/Most_popular_paclages">
              <Most_popular_packages/>
            </Route>
            <Route exact path="/Kids_packages">
              <Kids_packages/>
            </Route>
            <Route exact path="/Student_packages">
              <Student_packages/>
            </Route>
            <Route exact path="/Bill_pay">
              <Bill_pay/>
            </Route>
            <Route exact path="/Special_offers">
              <Special_offers/>
            </Route>
            <Route exact path="/Contact_us">
              <Contact_us/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

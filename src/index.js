import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import All_service from './Pages/All_service';
import Cable_tv from './Pages/Cable_tv';
import Dedicated_server from './Pages/Dedicated_server';
import Corporate from './Pages/Corporate';
import Contacts from './Pages/Contacts';
import axios from 'axios';
import Logout from './Pages/Logout';
import Gamer_packages from './Pages/Gamer_packages';
import Special_offers from './Pages/Special_offers';
import Kids_packages from './Pages/Kids_packages';
import Student_packages from './Pages/Student_packages';
import Admin_dashboard from './Pages/Admin_dashboard';
import About_us from './Pages/About_us';
import Bill_pay from './Pages/Bill_pay';
import Contact_us from './Pages/Contact_us';
import Request from './Pages/Request';





//localStorage.removeItem('user');
var token=null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.common["Authorization"] = token;


ReactDOM.render(
  <React.StrictMode>

    <Router>
    <Route exact path="/Admin_dashboard">
              <Admin_dashboard/>
            </Route>
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
            <Route exact path="/Contacts">
              <Contacts/>
            </Route>
            <Route exact path="/logout">
              <Logout/>
            </Route>
            <Route exact path="/Gamer_packages">
              <Gamer_packages/>
            </Route>
            <Route exact path="/Special_offers">
              <Special_offers/>
            </Route>
            <Route exact path="/Kids_packages">
              <Kids_packages/>
            </Route>
            <Route exact path="/Student_packages">
              <Student_packages/>
            </Route>
            <Route exact path="/About_us">
              <About_us/>
            </Route>
            <Route exact path="/Bill_pay">
              <Bill_pay/>
            </Route>
            <Route exact path="/Contact_us">
              <Contact_us/>
            </Route>
            <Route exact path="/Request/:pname/:price">
              <Request/>
            </Route>
           
        </Switch>
    </Router>



    
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

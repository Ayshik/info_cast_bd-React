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
import Contacts from './Pages/Contacts';
import axios from 'axios';
import Logout from './Pages/Logout';
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
            <Route exact path="/Contacts">
              <Contacts/>
            </Route>
            <Route exact path="/logout">
              <Logout/>
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

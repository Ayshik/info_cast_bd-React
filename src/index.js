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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import Main_temp from './Pages/Main_temp'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/">
              <Home/>
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

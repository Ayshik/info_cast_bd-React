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
import User_dashboard from './Pages/User_dashboard';
import Moderator_dashboard from './Pages/Moderator_dashboard';
import Admin_LC from './Pages/Admin_LC';
import Admin_AC from './Pages/Admin_AC';
import Admin_VC from './Pages/Admin_VC';
import Admin_PP from './Pages/Admin_PP';
import Admin_PL from './Pages/Admin_PL';
import Admin_AP from './Pages/Admin_AP';
import Mod_LC from './Pages/Mod_LC';
import Mod_AC from './Pages/Mod_AC';
import Mod_VC from './Pages/Mod_VC';
import Mod_PP from './Pages/Mod_PP';
import Mod_PL from './Pages/Mod_PL';
import Mod_AP from './Pages/Mod_AP';
import Add_modaretor from './Pages/Add_modaretor';
import Package_details from './Pages/Package_details';
import Modarator_info from './Pages/Modarator_info';

import Admin_UP from './Pages/Admin_UP';




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
    
        <Switch>

        <Route exact path="/Admin_dashboard">
              <Admin_dashboard/>
            </Route>
            <Route exact path="/Admin_LC">
              <Admin_LC/>
            </Route>
            <Route exact path="/Admin_AC">
              <Admin_AC/>
            </Route>
            <Route exact path="/Admin_VC">
              <Admin_VC/>
            </Route>
            <Route exact path="/Admin_PP">
              <Admin_PP/>
            </Route>
            <Route exact path="/Admin_PL">
              <Admin_PL/>
            </Route>

            <Route exact path="/Admin_AP">
              <Admin_AP/>
            </Route>
            
            <Route exact path="/User_dashboard">
              <User_dashboard/>
            </Route>
            <Route exact path="/Moderator_dashboard">
              <Moderator_dashboard/>
            </Route>
            
            <Route exact path="/Mod_LC">
              <Mod_LC/>
            </Route>

            <Route exact path="/Mod_AC">
              <Mod_AC/>
            </Route>

            <Route exact path="/Mod_VC">
              <Mod_VC/>
            </Route>

            <Route exact path="/Mod_PP">
              <Mod_PP/>
            </Route>

            <Route exact path="/Mod_PL">
              <Mod_PL/>
            </Route>

            <Route exact path="/Mod_AP">
              <Mod_AP/>
            </Route>

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
            <Route exact path="/Add_modarator">
              <Add_modaretor/>
            </Route>
            <Route exact path="/Package_details">
              <Package_details/>
            </Route>
            <Route exact path="/Modarator_info">
              <Modarator_info/>
            </Route>
            <Route exact path="/Admin_UP/:id">
              <Admin_UP/>
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

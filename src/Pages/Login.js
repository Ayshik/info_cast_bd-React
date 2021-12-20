import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ()=>{
    let [token,setToken] = useState("");
    let [name,setName] = useState("");
    let [password,setPass] = useState("");
   
   

    const loginSubmit=()=>{    
        //alert(name+" "+password);
        var obj = {email:name, password:password};
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            var user = {email: token.email,access_token:token.token,type:token.type};
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
            if(user.type=="admin"){
            window.location.href ='/Admin_dashboard';
            }
            else if(user.type=="customer"){

              window.location.href ='/User_dashboard';

            }
            else if(user.type=="moderator"){

              window.location.href ='/Moderator_dashboard';

            }
            else{

              toast.error('Please check your username Password', {
                position: "top-center",
                autoClose: 5000,
               
                closeOnClick: true,
               
               
               
                });
            }
           
        }).catch(err=>{
            console.log(err);
        }); 
    }






        return (

          
            <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header border-bottom-0">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-title text-center">
                    <h4>Login</h4>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <form>
                      <div className="form-group">
                        <input type="email" className="form-control" id="email1" placeholder="Your email address..." value={name} onChange={(e)=>setName(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" id="password1" placeholder="Your password..." value={password} onChange={(e)=>setPass(e.target.value)}/>
                      </div>
                      <button type="button" onClick={loginSubmit} className="btn btn-info btn-block btn-round">Login</button>
                    </form>
                    <div className="text-center text-muted delimiter">or use a social network</div>
                    <div className="d-flex justify-content-center social-buttons">
                      <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Twitter">
                        <i className="fab fa-twitter" />
                      </button>
                      <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Facebook">
                        <i className="fab fa-facebook" />
                      </button>
                      <button type="button" className="btn btn-secondary btn-round" data-toggle="tooltip" data-placement="top" title="Linkedin">
                        <i className="fab fa-linkedin" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <div className="signup-section">Not a member yet? <a href="#a" className="text-info"> Sign Up</a>.</div>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        )
    }


export default Login

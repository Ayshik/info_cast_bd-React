import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

//import Header from './Header';
//import Footer from './Footer'

const Request=()=>{
        const {pname} = useParams();
        const {price} = useParams();
        const z = parseInt(price) + 2000;
       
      
        let [name,setName] = useState("");
        let [company,setCompany] = useState("");
        let [email,setEmail] = useState("");
        let [phone,setPhone] = useState("");
        let [country,setCountry] = useState("");
        let [address,setAddress] = useState("");
        let [city,setCity] = useState("");
        let [state,setState] = useState("");
        let [postcode,setPostcode] = useState("");
       

       
        const Submit=()=>{    
           
            var obj = {name:name, company:company,email:email,phone:phone,country:"Bangladesh",address:address,city:city,state:state,postcode:postcode,packagename:pname,packageprice:price,totalprice:z};
            axios.post("http://localhost:8000/api/Requestpack",obj)
            

            .then(resp=>{
                var massage = resp.data;
                console.log(massage);
                if(massage=="Successful")
                {
                toast.success('🦄 Request Send', {
                    position: "top-center",
                    autoClose: 5000,
                   
                    closeOnClick: true,
                   
                   
                   
                    });
               
                
                }
                else{
                    toast.error('please Fill all the fields', {
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
            <div>
                  
            <section className="page-title-wrap" data-bg-img="img/hills.jpg" data-rjs={2}>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="page-title" data-animate="fadeInUp" data-delay="1.2">
                      <h2>Request Package</h2>
                      <ul className="list-unstyled m-0 d-flex">
                        <li><a href="/"><i className="fa fa-home" /> Home</a></li>
                        <li><a href="/">Package</a></li>
                        <li><a href="#">Request</a></li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End of Page Title */}
            {/* Checkout */}
            <section className="pt-120 pb-70">
              <div className="container">
               
                <form className="parsley-validate" action="#">
                  <div className="row">
                    {/* Billing Details */}
                    <div className="col-lg-6">
                      <div className="billing-details pb-4" data-animate="fadeInUp" data-delay=".1">
                        <h4 className="bordered-title">Billing Details</h4>
                        <div className="form-field mb-3">
                          <label>Name <span className="text-danger">*</span></label>
                          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="theme-input-style" placeholder="Your Name" required />
                        </div>
                        <div className="form-field">
                          <label>Company Name</label>
                          <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} className="theme-input-style" />
                        </div>
                        <div className="row half-gutters">
                          <div className="col-lg-6">
                            <div className="form-field">
                              <label>Email address <span className="text-danger">*</span></label>
                              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="theme-input-style" required />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-field">
                              <label>Phone <span className="text-danger">*</span></label>
                              <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="theme-input-style" data-parsley-pattern="^[\d\+\-\.\(\)\/\s]*$" required />
                            </div>
                          </div>
                        </div>
                        <div className="form-field">
                          <label>Country <span className="text-danger">*</span></label>
                          <div className="select-wrapper">
                            <select  className="theme-input-style">
                              
                              <option value="Bangladesh">Bangladesh</option>
                            
                            </select>
                          </div>
                        </div>
                        <div className="form-field mb-3">
                          <label>Address <span className="text-danger">*</span></label>
                          <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}className="theme-input-style" placeholder="Stree address" required />
                        </div>
                        
                        <div className="form-field">
                          <label>Town/City <span className="text-danger">*</span></label>
                          <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} className="theme-input-style" required />
                        </div>
                        <div className="form-field">
                          <label>State <span className="text-danger">*</span></label>
                          <input type="text" value={state} onChange={(e)=>setState(e.target.value)} className="theme-input-style" required />
                        </div>
                        <div className="form-field">
                          <label>Post Code <span className="text-danger">*</span></label>
                          <input type="number" value={postcode} onChange={(e)=>setPostcode(e.target.value)} className="theme-input-style" required />
                        </div>
                       
                        
                       
                        
                      
                      </div>
                    </div>
                    {/* End of Billing Details */}
                    {/* Order Details */}
                    <div className="col-lg-6">
                      <div className="order-details" data-animate="fadeInUp" data-delay=".4">
                        <h4 className="bordered-title">Your Package</h4>
                        <p className="border-bottom">Package Name <span className="float-right">Total</span></p>
                        <table className="order-details-table table table-bordered mb-50">
                          <tbody>
                            <tr>
                            <td><strong>{pname}</strong></td>
                              <td><strong>{price} TK</strong></td>
                            </tr>
                        
                            <tr>
                              <td>Line Charge</td>
                              <td>2000 TK</td>
                            </tr>
                            <tr>
                              <td>Total</td>
                              <td>{z}</td>
                            </tr>
                          </tbody>
                        </table>
                        
                        <div className="form-field">
                          <div className="payment-method">
                           
                           
                            <center><button type="button" onClick={Submit} style={{color: "white"}} className="btn">Place Order</button></center>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of Order Details */}
                  </div>
                </form>
              </div>
            </section>
            {/* End of Checkout */}<p />
            <ToastContainer />
           
          </div>
        )
    }


export default Request

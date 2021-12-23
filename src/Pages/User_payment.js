import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User_payment=()=>{



  const user = JSON.parse(localStorage.getItem("user"));
  let [c_name,setC_name] = useState("");
  let [email,setC_email] = useState("");
  let [phone,setPhone] = useState("");
  let [payment_method,setPayment_method] = useState("");
  let [amount,setAmount] = useState("");
  let [month,setMonth] = useState("");
  let [time,setTime] = useState("");


  
  const Add =()=>{    
           
    var obj = {c_name:c_name, c_email:user.email,phone:phone,payment_method:payment_method,amount:amount,month:month,time:time};
    axios.post("http://127.0.0.1:8000/api/User_payment",obj)
    

    .then(resp=>{
        var massage = resp.data;
        console.log(massage);
        if(massage=="Successful")
        {
        toast.success('🦄 Payment Done', {
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
          
      <div className="bg-gray-200">
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div className="container-fluid ps-2 pe-0">
                <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                  My Payment
                </a>
                <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon mt-2">
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navigation">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="/Admin_dashboard">
                        <i className="fa fa-chart-pie opacity-6 text-dark me-1" />
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* End Navbar */}
          </div>
        </div>
      </div>
      <main className="main-content  mt-0">
        <div className="page-header align-items-start min-vh-100" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'}}>
          <span className="mask bg-gradient-dark opacity-6" />
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-12 mx-auto">
                <div className="card z-index-0 fadeIn3 fadeInBottom">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                      <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Payment</h4>
                      
                    </div>
                  </div>
                  <div className="card-body">
                    <form role="form" className="text-start">
                      <div className="input-group input-group-outline my-3">
                        <label className="form-label" />
                        <input type="text" value={c_name} onChange={(e)=>setC_name(e.target.value)} placeholder="Name" className="form-control" />
                      </div>
                      <div className="input-group input-group-outline my-3">
                        <label className="form-label" />
                        <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone" className="form-control" />
                      </div>
                      
                      <div className="input-group input-group-outline my-3">
                        <label className="form-label" />
                        <input type="email" value={user.email} onChange={(e)=>setC_email(e.target.value)}placeholder="Email" className="form-control" readOnly />
                      </div>

                      <div className="input-group input-group-outline my-3">
                        <label className="form-label" />
                        <input type="Payment" value={amount} onChange={(e)=>setAmount(e.target.value)}placeholder="Payment Amount" className="form-control" />
                      </div>
                      
                      

                      <div className="input-group input-group-outline my-3">
                      <select value={payment_method} onChange={(e)=>setPayment_method(e.target.value)} className="form-select" >
        <option selected>Please select a payment method</option>
        <option value={"Rocket"}>Rocket</option>
        <option value={"Bkash"}>Bkash</option>
        <option value={"Nagod"}>Nagod</option>
      </select>
      </div>             
      <div className="input-group input-group-outline my-3">
                      <select value={month} onChange={(e)=>setMonth(e.target.value)} className="form-select" aria-label="Disabled select example" >
        <option selected>Please select a month</option>
        <option value={"January"}>January </option>
        <option value={"February"}>February</option>
        <option value={"March"}>March</option>
        <option value={"April"}>April</option>
        <option value={"May"}>May</option>
        <option value={"June"}>June</option>
        <option value={"July"}>July</option>
        <option value={"August"}>August</option>
        <option value={"September"}>September</option>
        <option value={"October"}>October</option>
        <option value={"November"}>November</option>
        <option value={"December"}>December</option>

      </select>
      </div>             
                      <div className="text-center">
                        <button type="button" onClick={Add} className="btn bg-gradient-primary w-100 my-4 mb-2">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
        )
    }


export default User_payment

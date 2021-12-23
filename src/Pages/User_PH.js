import User_nav from './User_nav';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Link, useHistory} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import User_header from './User_header';
const User_PH=()=>{
    const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const [products, setProducts] = useState([]);
    
    
  useEffect(()=>{
    axios.get(`http://localhost:8000/api/User_payment_History/${user.email}`)
      .then(resp=>{
          console.log(resp.data);
          setProducts(resp.data);
      }).catch(err=>{
          console.log(err);
      });
  },[]);

return(

<div class="g-sidenav-show  bg-gray-200">
<User_header/>
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* Navbar */}
        <User_nav/>
        {/* End Navbar */}
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Payment History</h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name & Email</th>

                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Phone</th>
                        
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Paymet Method</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Amount</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Month</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Date&Time</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                      {
                
                products.map(p=>(
                        <tr key={p.id}>
                           <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.id}</span>
                          </td>
                          <td>
                            <div className="d-flex px-2 py-1">
                             
                              <div className="d-flex flex-column justify-content-center">
                                <h6 className="mb-0 text-sm">{p.c_name}</h6>
                                <p className="text-xs text-secondary mb-0">{p.c_email}</p>
                              </div>
                            </div>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.phone}</span>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.payment_method}</span>
                          </td>
                        
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.amount}</span>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.month}</span>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.time}</span>
                          </td>
                         
                        
                         
                          {/* if({p.lstatus}=="Active"){<td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">{p.lstatus}</span>
                          </td>}
                          else{
                            <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-danger">{p.lstatus}</span>
                          </td>
                          } */}
                        

                        
                        </tr>
                      
                      
                      ))
                    }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
        </div>
)
}


export default User_PH
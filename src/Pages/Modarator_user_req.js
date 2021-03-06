import Moderator_header from './Moderator_header';
import Moderator_nav from './Moderator_nav';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Link, useHistory} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const Modarator_user_req=()=>{

 
  const history = useHistory();
  const [products, setProducts] = useState([]);
    
    
  useEffect(()=>{
      axios.get("http://localhost:8000/api/Customer_request")
      .then(resp=>{
          console.log(resp.data);
          setProducts(resp.data);
      }).catch(err=>{
          console.log(err);
      });
  },[]);

  const addcustomer = (e,id) => {
    e.preventDefault();
    
   

   
      axios.get(`/api/getuser/${id}`)
      
      .then(resp=>{
        var massage = resp.data;
        if(massage=="Successful")
        {
        toast.success('🦄 User Account Created', {
            position: "top-center",
            autoClose: 5000,
           
            closeOnClick: true,
           
           
           
            
          });
          window.location.href ='/Modarator_user_req';
        }
    }).catch(err=>{
        console.log(err);
    }); 
   
}

const Delete = (e,id) => {
  e.preventDefault();
  
 

 
    axios.delete(`/api/Delete_request/${id}`)
    
    .then(resp=>{
      
    toast.error('Deleted', {
      position: "top-center",
      autoClose: 5000,
     
      closeOnClick: true,
     });

       window.location.href ='/Modarator_user_req';

  });
}
 
return(

<div class="g-sidenav-show  bg-gray-200">
<Moderator_header/>
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* Navbar */}
        <Moderator_nav/>
        {/* End Navbar */}
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Customer Requests</h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Customer</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Company</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Phone</th>
                        
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Address</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">City</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">State</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Postcode</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Package Name</th>
                         
                         
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Package Price</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                          <th className="text-secondary opacity-7" />
                          <th className="text-secondary opacity-7" />
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
                                <h6 className="mb-0 text-sm">{p.name}</h6>
                                <p className="text-xs text-secondary mb-0">{p.email}</p>
                              </div>
                            </div>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.company}</span>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.phone}</span>
                          </td>
                        
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.address}</span>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.city}</span>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.state}</span>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.postcode}</span>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.packagename}</span>
                          </td>
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.packageprice}</span>
                          </td>
                          
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">{p.status}</span>
                          </td>
                         
                          {/* if({p.lstatus}=="Active"){<td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">{p.lstatus}</span>
                          </td>}
                          else{
                            <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-danger">{p.lstatus}</span>
                          </td>
                          } */}
                          <td className="align-middle">
                          <button type="button" onClick={(e) => addcustomer(e, p.id)} className="btn btn-info btn-block btn-round">Add Customer</button>
                          </td>

                          <td className="align-middle">
                          <button type="button" onClick={(e) => Delete(e, p.id)} className="btn btn-info btn-block btn-round">Delete</button>
                          </td>
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
      <ToastContainer />
        </div>
)
}


export default Modarator_user_req
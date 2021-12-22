
import Admin_header from './Admin_header';
import Admin_nav from './Admin_nav';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Link, useHistory} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const Package_details=()=>{
       
 
    const history = useHistory();
    const [products, setProducts] = useState([]);
 
    
    
  useEffect(()=>{
      axios.get("http://localhost:8000/api/Package_details")
      .then(resp=>{
          console.log(resp.data);
          setProducts(resp.data);
      }).catch(err=>{
          console.log(err);
      });
  },[]);


const Delete = (e,id) => {
  e.preventDefault();
  
 

 
    axios.delete(`/api/Delete_package/${id}`)
    
    .then(resp=>{
      
    toast.error('Deleted', {
      position: "top-center",
      autoClose: 5000,
     
      closeOnClick: true,
     });

       window.location.href ='/Package_details';

  });
}
 
return(

<div class="g-sidenav-show  bg-gray-200">
<Admin_header/>
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        {/* Navbar */}
        <Admin_nav/>
        {/* End Navbar */}
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                    <h6 className="text-white text-capitalize ps-3">Package Detais</h6>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Id</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Package</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price Lock</th>
                          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Price</th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Category</th>
                        
                          
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
                                <p className="text-xs text-secondary mb-0">{p.speed}</p>
                              </div>
                            </div>
                          </td>
                         
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.pricinglock}</span>
                          </td>
                        
                          <td >
                          <span className="text-secondary text-xs font-weight-bold">{p.price}</span>
                          </td>
                          
                          <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">{p.category}</span>
                          </td>
                        
                         
                          {/* if({p.lstatus}=="Active"){<td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">{p.lstatus}</span>
                          </td>}
                          else{
                            <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-danger">{p.lstatus}</span>
                          </td>
                          } */}
                         

                         
                          <td>
                        <Link to={`Admin_UP/${p.id}`} className="btn btn-danger btn-sm">Edit</Link>
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


export default Package_details

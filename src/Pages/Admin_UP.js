import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Package_details from './Package_details';
import {useParams} from 'react-router-dom';


const Admin_AP=()=>{
  
 
  const {id} = useParams();
  
  const history = useHistory();
  const [Products, setProducts] = useState({
    name: "",
    speed: "",
    pricinglock: "",
    price: "",
    category: ""
  });
  const { name, speed, pricinglock, price, category } = Products;
  const onInputChange = e => {
    setProducts({ ...Products, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/Update_packages/${id}`, Products);
   history.push("/Package_details");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/api/Edit_package/${id}`);
    setProducts(result.data);
  };

return(
<div>


<p /><div className="container position-sticky z-index-sticky top-0">
          <div className="row">
            <div className="col-12">
              {/* Navbar */}
              <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
                <div className="container-fluid ps-2 pe-0">
                  <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                  Add Package
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
                    <ul className="navbar-nav d-lg-block d-none">
                      <li className="nav-item">

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
          <section>
            <div className="page-header min-vh-100">
              <div className="container">
                <div className="row">
                  <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                    <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center" style={{ backgroundImage: `url("https://www.pngmart.com/files/11/Internet-Network-PNG-Transparent-HD-Photo.png")`, backgroundSize: 'cover'}}>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                    <div className="card card-plain">
                      <div className="card-header">
                        <h4 className="font-weight-bolder">Update Package</h4>
                      </div>
                      <div className="card-body">
                        <form role="form" onSubmit={e => onSubmit(e)}>
                          <div className="input-group input-group-outline mb-3">
                            <label className="form-label"></label>
                            <input type="text" placeholder='Name' name="name" value={name} onChange={e => onInputChange(e)} className="form-control" />
                          </div>
                          <div className="input-group input-group-outline mb-3">
                            <label className="form-label"></label>
                            <input type="text" placeholder='Speed' name="speed" value={speed} onChange={e => onInputChange(e)} className="form-control" />
                          </div>
                          <div className="input-group input-group-outline mb-3">
                            <label className="form-label"></label>
                            <input type="text"placeholder='Pricing Lock' name="pricinglock" value={pricinglock} onChange={e => onInputChange(e)}  className="form-control" />
                          </div>
                          <div className="input-group input-group-outline mb-3">
                            <label className="form-label"></label>
                            <input type="text" placeholder='Price' name="price" value={price} onChange={e => onInputChange(e)} className="form-control" />
                          </div>
                          <div className="input-group input-group-outline mb-3">
                            <label className="form-label"></label>
                            <input type="text" placeholder='Category' name="category" value={category} onChange={e => onInputChange(e)} className="form-control" />
                          </div>
                          
                          <div className="text-center">
                            <button type="submit"   className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Update Package</button>
                          </div>
                        </form>
                      </div>
                      <p />
                    </div></div></div></div></div></section></main>
                    <ToastContainer />
                    </div>
                    
                    

)
}


export default Admin_AP
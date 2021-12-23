import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Link, useHistory} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


const User_profile=()=>{

  
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  const [Products, setProducts] = useState({

    name: "",
    email: "",
    phone: "",
    address: "",
    password: ""

  });
  const { name, email, phone, address, password } = Products;
  const onInputChange = e => {
    setProducts({ ...Products, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/Update_user_profile/${user.email}`, Products);
    toast.success('Update Done', {
      position: "top-center",
      autoClose: 5000,
     
      closeOnClick: true,
     
     
     
      });
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8000/api/User_profile/${user.email}`);
    setProducts(result.data);
  };
 

        return (
          
      <div className="bg-gray-200">
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div className="container-fluid ps-2 pe-0">
                <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="">
                  My Profile
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
                      <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="/Moderator_dashboard">
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
                      <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Update User</h4>
                      <div className="row mt-3">
                        <div className="col-2 text-center ms-auto">
                          <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-facebook text-white text-lg" />
                          </a>
                        </div>
                        <div className="col-2 text-center px-1">
                          <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-github text-white text-lg" />
                          </a>
                        </div>
                        <div className="col-2 text-center me-auto">
                          <a className="btn btn-link px-3" href="javascript:;">
                            <i className="fa fa-google text-white text-lg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form role="form" onSubmit={e => onSubmit(e)} className="text-start">
                      <div className="input-group input-group-outline my-3">
                        <label className="form-label" />
                        <input type="text" name="name" value={name} onChange={e => onInputChange(e)}  className="form-control" />
                      </div>
                      <div className="input-group input-group-outline my-3">
                        <label className="form-label" />
                        <input type="number" name="phone" value={phone} onChange={e => onInputChange(e)}  placeholder="Phone" className="form-control" />
                      </div>
                      <div className="input-group input-group-outline my-3">
                        <label className="form-label" />
                        <input type="text" name="address" value={address} onChange={e => onInputChange(e)} placeholder="Address" className="form-control" />
                      </div>
                      <div className="input-group input-group-outline my-3">
                        <label className="form-label" />
                        <input type="email" name="email" value={email} onChange={e => onInputChange(e)} placeholder="Email" className="form-control" />
                      </div>
                      <div className="input-group input-group-outline mb-3">
                        <label className="form-label" />
                        <input type="password" name="password" value={password} onChange={e => onInputChange(e)} placeholder="Password" className="form-control" />
                      </div>
                      <div className="text-center">
                      <button type="submit"   className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Update Profile</button>
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


export default User_profile

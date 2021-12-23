import React from 'react'
import User_header from './User_header';
import User_nav from './User_nav';
const User_dashboard=()=>{
  return(
     <div>
       
<div className="g-sidenav-show  bg-gray-200">
  <User_header/>

        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          {/* Navbar */}
         <User_nav/>
          {/* End Navbar */}
          <div className="container-fluid py-4">
            <div className="row">
              
             
              <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">person</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">My Package</p>
                      <h4 className="mb-0">3,462</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="card">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">weekend</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">My Line History</p>
                      <h4 className="mb-0">$103,430</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main></div>

     </div>
    )
  }


export default User_dashboard
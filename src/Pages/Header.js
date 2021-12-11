import React from 'react'

import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
             {/* Preloader */}
  <div className="preLoader" />
  {/* Main header */}
  <header className="header">
    <div className="header-top" data-animate="fadeInDown" data-delay=".5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="header-info text-center text-md-left">
              <span>Get up to 50 MBps Download Speed Now Only 4000 TK <Link to="/">Get It Now</Link></span>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="header-top-right d-flex align-items-center justify-content-center justify-content-md-end">
              <form className="parsley-validate d-flex position-relative" action="#">
                <input type="text" placeholder="I am looking for" required />
                <button type="submit"><i className="fa fa-search" /></button>
              </form>
              <div className="client-area position-relative">
                <span id="dropdownMenuButton" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">My Account <i className="fa fa-caret-down" /></span>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                  < Link to="/" className="dropdown-item">Sign In</Link>
                  <Link to="/" className="dropdown-item">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-header" data-animate="fadeInUp" data-delay=".9">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-9">
            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <img src="assets/img/logo.png" data-rjs={2} alt="VPNet" />
              </Link>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-5 col-sm-2 col-3">
            <nav>
              {/* Header-menu */}
              <div className="header-menu">
                <ul>
                  <li className="active"><Link to="/">Home</Link></li>
                  <li>
                    <Link to="/">Area</Link>
                    
                  </li>
                  <li>
                    <Link to="/">Corporate Internet</Link>
                    
                  </li>
                  <li>
                    <Link to="/">Home Internet <i className="fa fa-caret-down" /></Link>
                    <ul>
                      <li><Link to="/">Student Packages</Link></li>
                      <li><Link to="/">Kids Packages</Link></li>
                      <li><Link to="/">Most Popular Packages</Link></li>
                      <li><Link to="/">Gamer Packages</Link></li>
                      
                    </ul>
                  </li>
                  
                  <li>
                    <Link to="/">Services <i className="fa fa-caret-down" /></Link>
                    <ul>
                      <li><Link to="/">All Services</Link></li>
                      <li><Link to="/">Cable TV</Link></li>
                      <li><Link to="/">Dedicated Server</Link></li>
                      
                      
                    </ul>
                  </li>
                 

                
                  <li>
                    <Link to="/">Payment & More <i className="fa fa-caret-down" /></Link>
                    <ul>
                     
                      <li><Link to="/">Bill Pay</Link></li>
                      <li><Link to="/">About Us</Link></li>
                      <li><Link to="/">Contact Us</Link></li>
                      <li><Link to="/">Support</Link></li>
                      <li><Link to="/">Special Offers</Link></li>
                    </ul>
                  </li>
                  
                </ul>
              </div>
              {/* End of Header-menu */}
            </nav>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 d-none d-sm-block">
            {/* Header Call */}
            <div className="header-call text-right">
              <span>Call Now</span>
              <a href="tel:+8801775503498">(+880) 1775503498</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* End of Main header */}
        </div>
    )
}

export default Header

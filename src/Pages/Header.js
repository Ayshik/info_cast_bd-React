import React from 'react'
import Login from './Login'
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
              <span>Get up to 50 MBps Download Speed Now Only 4000 TK <a href="/">Get It Now</a></span>
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
                  < button type="button" className="dropdown-item" data-toggle="modal" data-target="#loginModal">Login
      </button>
      < button type="button" className="dropdown-item" data-toggle="modal" data-target="#loginModal">Signup
      </button>
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
              <a href="/">
                <img src="assets/img/logo.png" data-rjs={2} alt="VPNet" />
              </a>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-5 col-sm-2 col-3">
            <nav>
              {/* Header-menu */}
              <div className="header-menu">
                <ul>
                  <li className="active"><a href="/">Home</a></li>
                  <li>
                    <a href="/">Area</a>

                  </li>
                  <li>
                    <a href="/Corporate">Corporate Internet</a>

                  </li>
                  <li>
                    <a href="/">Home Internet <i className="fa fa-caret-down" /></a>
                    <ul>
                      <li><a href="/Student_packages">Student Packages</a></li>
                      <li><a href="/Kids_packages">Kids Packages</a></li>
                      <li><a href="/Gamer_packages">Gamer Packages</a></li>


                    </ul>
                  </li>

                  <li>
                    <a href="/">Services <i className="fa fa-caret-down" /></a>
                    <ul>
                      <li><a href="/All-Service">All Services</a></li>
                      <li><a href="/Tv-Service">Cable TV</a></li>
                      <li><a href="/Dedicated-server">Dedicated Server</a></li>


                    </ul>
                  </li>



                  <li>
                    <a href="/">Payment & More <i className="fa fa-caret-down" /></a>
                    <ul>

                      <li><a href="/Bill_pay">Bill Pay</a></li>
                      <li><a href="/About_us">About Us</a></li>
                      <li><a href="/Contact_us">Contact Us</a></li>
                      <li><a href="/Special_offers">Special Offers</a></li>
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
<Login/>
  {/* End of Main header */}
        </div>
    )
}

export default Header

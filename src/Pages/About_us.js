import React from 'react'
import Clint from './Clint';
import Brands from './Brands';
import Header from './Header';
import Footer from './Footer';
const About_us=()=>{
  return(
     
<div>
  <Header/>
        <p>{/* Page Title */}
        </p><section className="page-title-wrap" data-bg-img="assets/img/hills.jpg" data-rjs={2}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-title" data-animate="fadeInUp" data-delay="1.2">
                  <h2>About Us</h2>
                  <ul className="list-unstyled m-0 d-flex">
                    <li><a href="index.html"><i className="fa fa-home" /> Home</a></li>
                    <li><a href="#">About us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Page Title */}
        {/* Abut Us */}
        <section className="pt-120 pb-55">
          <div className="container">
            <div className="row align-items-center pb-4">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="text-center" data-animate="fadeInUp" data-delay=".1">
                  <img src="assets/img/number-one.png" alt="" data-rjs={2} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="number-one-content" data-animate="fadeInUp" data-delay=".3">
                  <h2 className="mb-3">We are no. 1 internet service provider company in United States.</h2>
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensure and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="single-about-us" data-animate="fadeInUp" data-delay=".1">
                  <h3 className="h4">Our Mission</h3>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias similique sunt in culpa qui officia deserunt mollitia quidem rerum facilis est et expedita distinctio.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-about-us" data-animate="fadeInUp" data-delay=".4">
                  <h3 className="h4">Our Vission</h3>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias similique sunt in culpa qui officia deserunt mollitia quidem rerum facilis est et expedita distinctio.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-about-us" data-animate="fadeInUp" data-delay=".7">
                  <h3 className="h4">Our Ambition</h3>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias similique sunt in culpa qui officia deserunt mollitia quidem rerum facilis est et expedita distinctio.</p>
                </div>
              </div>
              <div className="col" data-animate="fadeInUp" data-delay=".1">
                <p className="pt-3 pb-5 mb-2"><strong>On the other hand, we denounce with righteous indignation and dislike men</strong> who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those <strong>who fail in their duty through weakness</strong> of will, which is the same as saying through shrinking from toil and pain.</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className="single-feature single-feature-img-top text-center" data-animate="fadeInUp" data-delay=".1">
                  <div className="single-feature-img">
                    <img src="assets/img/icons/setup.svg" alt="" className="svg" />
                  </div>
                  <div className="single-feature-content">
                    <h4>Free Installations &amp; Setup</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-feature single-feature-img-top text-center" data-animate="fadeInUp" data-delay=".4">
                  <div className="single-feature-img">
                    <img src="assets/img/icons/download.svg" alt="" className="svg" />
                  </div>
                  <div className="single-feature-content">
                    <h4>Up to 1 Gpbs Download Speed</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-feature single-feature-img-top text-center" data-animate="fadeInUp" data-delay=".7">
                  <div className="single-feature-img">
                    <img src="assets/img/icons/support.svg" alt="" className="svg" />
                  </div>
                  <div className="single-feature-content">
                    <h4>24/7 Customer Support</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </section>
        {/* End of Abut Us */}<p />
        <Clint/>
        <Brands/>
      </div>
      )
    }
  
  
  export default About_us
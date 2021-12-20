import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header';
export class Corporate extends Component {
    render() {
        return (
            <div>
              <Header/>
              
                 {/* Page Title */}
        <section className="page-title-wrap" data-bg-img="assets/img/hills.jpg" data-rjs={2}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-title" data-animate="fadeInUp" data-delay="1.2">
                  <h2>Corporate Packages</h2>
                  <ul className="list-unstyled m-0 d-flex">
                    <li><a href="index.html"><i className="fa fa-home" /> Home</a></li>
                    <li><a href="#">Corporate Packages</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Page Title */}
        {/* Packages Wrap */}
        <section className="pt-120 pb-55">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="section-title text-center" data-animate="fadeInUp" data-delay=".1">
                  <h2>Choose Affordable Packages</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                </div>
              </div>
            </div>
            {/* Packages */}
            <div className="row pb-90">
              <div className="col-lg-3 col-sm-6">
                <div className="single-package text-center" data-animate="fadeInUp" data-delay=".1">
                  <h4>Personal Pack</h4>
                  <span>for personal user</span>
                  <hr />
                  <ul className="list-unstyled">
                    <li>Free installation</li>
                    <li>Up to <span>15 Mpbs</span> download speed</li>
                    <li>Unlimited data usages</li>
                    <li><span>01 year</span> pricing lock guarantee</li>
                    <li>Unlimited bandwidth</li>
                  </ul>
                  <p><sup>$</sup>12.50 <span>/Monthly</span></p>
                  <a href="#" className="btn">Order This Plan</a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-package text-center" data-animate="fadeInUp" data-delay=".4">
                  <span className="pupular-pack">Most popular package</span>
                  <h4>Family Pack</h4>
                  <span>for family user</span>
                  <hr />
                  <ul className="list-unstyled">
                    <li>Free installation</li>
                    <li>Up to <span>25 Mpbs</span> download speed</li>
                    <li>Unlimited data usages</li>
                    <li><span>02 year</span> pricing lock guarantee</li>
                    <li>Unlimited bandwidth</li>
                  </ul>
                  <p><sup>$</sup>24.50 <span>/Monthly</span></p>
                  <a href="#" className="btn">Order This Plan</a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-package text-center" data-animate="fadeInUp" data-delay=".7">
                  <h4>Business Pack</h4>
                  <span>for business user</span>
                  <hr />
                  <ul className="list-unstyled">
                    <li>Free installation</li>
                    <li>Up to <span>30 Mpbs</span> download speed</li>
                    <li>Unlimited data usages</li>
                    <li><span>03 year</span> pricing lock guarantee</li>
                    <li>Unlimited bandwidth</li>
                  </ul>
                  <p><sup>$</sup>49.50 <span>/Monthly</span></p>
                  <a href="#" className="btn">Order This Plan</a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-package text-center" data-animate="fadeInUp" data-delay={1}>
                  <h4>Corporate Pack</h4>
                  <span>for corporate user</span>
                  <hr />
                  <ul className="list-unstyled">
                    <li>Free installation</li>
                    <li>Up to <span>39 Mpbs</span> download speed</li>
                    <li>Unlimited data usages</li>
                    <li><span>Unlimited</span> pricing lock guarantee</li>
                    <li>Unlimited bandwidth</li>
                  </ul>
                  <p><sup>$</sup>79.50 <span>/Monthly</span></p>
                  <a href="#" className="btn">Order This Plan</a>
                </div>
              </div>
            </div>
            {/* End of Packages */}
            {/* Packages Includes */}
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="section-title text-center" data-animate="fadeInUp" data-delay=".1">
                  <h2>All Plans Included</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="single-feature single-feature-img-left text-left" data-animate="fadeInUp" data-delay=".05">
                  <div className="single-feature-img">
                    <img src="assets/img/icons/ftp.svg" alt="" className="svg" />
                  </div>
                  <div className="single-feature-content">
                    <h4>Own FTP Server</h4>
                    <p>At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-feature single-feature-img-left text-left" data-animate="fadeInUp" data-delay=".2">
                  <div className="single-feature-img">
                    <img src="assets/img/icons/upgrade.svg" alt="" className="svg" />
                  </div>
                  <div className="single-feature-content">
                    <h4>Upgrade or Downgrade</h4>
                    <p>At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-feature single-feature-img-left text-left" data-animate="fadeInUp" data-delay=".35">
                  <div className="single-feature-img">
                    <img src="assets/img/icons/data.svg" alt="" className="svg" />
                  </div>
                  <div className="single-feature-content">
                    <h4>No Hard Data Limit</h4>
                    <p>At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-feature single-feature-img-left text-left" data-animate="fadeInUp" data-delay=".5">
                  <div className="single-feature-img">
                    <img src="assets/img/icons/lock.svg" alt="" className="svg" />
                  </div>
                  <div className="single-feature-content">
                    <h4>Lock in Low Rates</h4>
                    <p>At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-feature single-feature-img-left text-left" data-animate="fadeInUp" data-delay=".65">
                  <div className="single-feature-img">
                    <img src="assets/img/icons/cloud.svg" alt="" className="svg" />
                  </div>
                  <div className="single-feature-content">
                    <h4>No Video Streaming</h4>
                    <p>At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-feature single-feature-img-left text-left" data-animate="fadeInUp" data-delay=".8">
                  <div className="single-feature-img">
                    <img src="assets/img/icons/access.svg" alt="" className="svg" />
                  </div>
                  <div className="single-feature-content">
                    <h4>Access to All Website</h4>
                    <p>At vero eos et accusamus et iusto dignissimosus qui blanditiis praesentium uptatum</p>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
            {/* End of Packages Includes */}
          </div>
        </section>
        {/* End of Packages Wrap */}
       
            </div>
            
        )
    }
}

export default Corporate

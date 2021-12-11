import React from 'react'
import Clint from './Clint'

const Cable_tv=()=>{
        return (
            <div>
                 {/* Page Title */}
        <section className="page-title-wrap" data-bg-img="img/hills.jpg" data-rjs={2}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-title" data-animate="fadeInUp" data-delay="1.2">
                  <h2>Cable TV</h2>
                  <ul className="list-unstyled m-0 d-flex">
                    <li><a href="index.html"><i className="fa fa-home" /> Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="#">Cable TV</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Page Title */}
        {/* Service Details */}
        <section className="pt-120 pb-120 light-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="service-details" data-animate="fadeInUp" data-delay=".1">
                  <h2>Enjoy better with our greatest <span>cable tv</span> and world’s pupular channels.</h2>
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                  <p><i>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</i></p>
                  <ul className="rubik list-unstyled m-0 clearfix">
                    <li>TiVo HD/DVRs</li>
                    <li>Record, Rewind or Pause</li>
                    <li>Popular Channels</li>
                    <li>On Demand Choices</li>
                    <li>Pricing Lock Gurarantee</li>
                    <li>Quality Voice With Title</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-img text-center" data-animate="fadeInUp" data-delay=".4">
                  <img src="assets/img/cable-tv.png" alt="" data-rjs={2} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Service Details */}
        {/* Packages */}
        <section className="pt-120 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="section-title text-center" data-animate="fadeInUp" data-delay=".1">
                  <h2>Choose Affordable Packages</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                </div>
              </div>
            </div>
            <div className="row">
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
          </div>
        </section>
        {/* End of Packages */}
        {/* Channels */}
        <section className="pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="section-title text-center" data-animate="fadeInUp" data-delay=".1">
                  <h2>Popular Channels</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                </div>
              </div>
            </div>
            <div className="channels-wrap" data-animate="fadeInUp" data-delay=".3">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/zoom.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/rtv.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/satv.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/sling.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/sm.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/pogo.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/axn.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/fox.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/cnbc.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/disney.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/hgtv.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/cnn.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/cw.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/tvland.png" alt="" />
                </div>
                <div className="col-md-2 col-sm-3 col-4">
                  <img src="assets/img/channels/global.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Channels */}
        <Clint/>
            </div>
        )
    }


export default Cable_tv

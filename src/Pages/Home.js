
import React from 'react'



const Home=()=>{
return(

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
              <span>Get up to 1 Gbps Download Speed on $98.50/m <a href="#">Get It Now</a></span>
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
                  <a className="dropdown-item" href="#">Sign In</a>
                  <a className="dropdown-item" href="#">Sign Up</a>
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
              <a href="index.html">
                <img src="assets/img/logo.png" data-rjs={2} alt="VPNet" />
              </a>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-5 col-sm-2 col-3">
            <nav>
              {/* Header-menu */}
              <div className="header-menu">
                <ul>
                  <li className="active"><a href="index.html">Home</a></li>
                  <li><a href="http://billing.ywhmcs.com/?systpl=Serviney">WHMCS</a></li>
                  <li>
                    <a href="#">Pages <i className="fa fa-caret-down" /></a>
                    <ul>
                      <li><a href="about.html">About</a></li>
                      <li><a href="packages.html">Packages</a></li>
                      <li><a href="reviews.html">Reviews</a></li>
                      <li><a href="faq.html">FAQ</a></li>
                      <li><a href="404.html">404</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Services <i className="fa fa-caret-down" /></a>
                    <ul>
                      <li><a href="services.html">All services</a></li>
                      <li><a href="cable-tv.html">Cable TV</a></li>
                      <li><a href="dedicated-server.html">Dedicated server</a></li>
                      <li><a href="internet.html">Internet provider</a></li>
                      <li><a href="mobile.html">Mobile packages</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blog <i className="fa fa-caret-down" /></a>
                    <ul>
                      <li><a href="blog.html">Full Width</a></li>
                      <li>
                        <a href="#">Blog With Sidebar <i className="fa fa-caret-right" /></a>
                        <ul>
                          <li><a href="blog-sidebar-left.html">Blog Sidebar Left</a></li>
                          <li><a href="blog-sidebar-right.html">Blog Sidebar Right</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Blog Columns <i className="fa fa-caret-right" /></a>
                        <ul>
                          <li><a href="blog-2-columns.html">2 Columns Blog</a></li>
                          <li><a href="blog-3-columns.html">3 Columns Blog</a></li>
                        </ul>
                      </li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Shop <i className="fa fa-caret-down" /></a>
                    <ul>
                      <li>
                        <a href="#">Products <i className="fa fa-caret-right" /></a>
                        <ul>
                          <li><a href="products-2-columns.html">Products (2 Columns)</a></li>
                          <li><a href="products-3-columns.html">Products (3 Columns)</a></li>
                        </ul>
                      </li>
                      <li><a href="product-details.html">Product Details</a></li>
                      <li><a href="cart.html">Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
              {/* End of Header-menu */}
            </nav>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 d-none d-sm-block">
            {/* Header Call */}
            <div className="header-call text-right">
              <span>Call Now</span>
              <a href="tel:+1234567890">(+1) 234-567-8900</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* End of Main header */}
  {/* Banner */}
  <section>
    <div className="main-slider swiper-container">
      <div className="swiper-wrapper">
        {/* Single slide */}
        <div className="swiper-slide position-relative">
          <img src="assets/img/slide1.jpg" data-rjs={2} alt="" />
          <div className="slide-content container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-8">
                <div className="slide-content-inner">
                  <h4 data-animate="fadeInUp" data-delay=".05">Best Internet Service Provider In USA</h4>
                  <h2 data-animate="fadeInUp" data-delay=".3">Don’t Suffer The Buffer Speeds Up to 1 Gbps with Unlimited Data</h2>
                  <a data-animate="fadeInUp" data-delay=".6" href="#" className="btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Single slide */}
        {/* Single slide */}
        <div className="swiper-slide position-relative">
          <img src="assets/img/slide2.jpg" data-rjs={2} alt="" />
          <div className="slide-content container">
            <div className="row align-items-center">
              <div className=" col-xl-6 col-lg-8">
                <div className="slide-content-inner">
                  <h4 data-animate="fadeInUp" data-delay=".05">There is Now Way to Become a Internet User</h4>
                  <h2 data-animate="fadeInUp" data-delay=".3">Now a Days Internet Is a Useful Thing, Not Passion</h2>
                  <a data-animate="fadeInUp" data-delay=".6" href="#" className="btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Single slide */}
      </div>
      {/* Banner Pagination */}
      <div className="swiper-pagination main-slider-pagination" />
    </div>
  </section>
  {/* End of Banner */}
  {/* Abut Us */}
  <section className="pt-120 pb-55">
    <div className="container">
      <div className="row align-items-center pb-80">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="text-center" data-animate="fadeInUp" data-delay=".1">
            <img src="assets/img/number-one.png" alt="" data-rjs={2} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="number-one-content" data-animate="fadeInUp" data-delay=".5">
            <h2 className="mb-3">We are no. 1 internet service provider company in United States.</h2>
            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
            <a href="#" className="btn">View Details</a>
          </div>
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
  </section>
  {/* End of About Us */}
  {/* Services */}
  <section className="theme-bg-overlay bg-img-md-none pt-120 pb-90" data-bg-img="img/rocket.jpg" data-rjs={2}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-10">
          <div className="section-title section-title-white text-center" data-animate="fadeInUp" data-delay=".1">
            <h2>Services We Provide</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="single-service single-service-white text-center" data-animate="fadeInUp" data-delay=".1">
            <img src="assets/img/icons/earth.svg" alt="" className="svg" />
            <h4>High Speed Internet</h4>
            <p>Lorem ipsum dolor sit ametteturmpor incididunt most popular.</p>
            <a href="internet.html">Learn More <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-service single-service-white text-center" data-animate="fadeInUp" data-delay=".4">
            <img src="assets/img/icons/phone.svg" alt="" className="svg" />
            <h4>Phone Service</h4>
            <p>Lorem ipsum dolor sit ametteturmpor incididunt most popular.</p>
            <a href="mobile.html">Learn More <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-service single-service-white text-center" data-animate="fadeInUp" data-delay=".7">
            <img src="assets/img/icons/tv.svg" alt="" className="svg" />
            <h4>Cable TV</h4>
            <p>Lorem ipsum dolor sit ametteturmpor incididunt most popular.</p>
            <a href="cable-tv.html">Learn More <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single-service single-service-white text-center" data-animate="fadeInUp" data-delay={1}>
            <img src="assets/img/icons/server.svg" alt="" className="svg" />
            <h4>Dedicated Server</h4>
            <p>Lorem ipsum dolor sit ametteturmpor incididunt most popular.</p>
            <a href="dedicated-server.html">Learn More <i className="fa fa-angle-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End of Services */}
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
      {/* End of Packages Includes */}
    </div>
  </section>
  {/* End of Packages Wrap */}
  {/* Reviews */}
  <section className="theme-bg-overlay bg-img-xs-none pt-120 pb-120" data-bg-img="img/earth.jpg" data-rjs={2}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-10">
          <div className="section-title section-title-white text-center" data-animate="fadeInUp" data-delay=".1">
            <h2>What Our Client’s Say</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* Review Slider */}
          <div className="review-slider-wraper position-relative">
            <div className="swiper-container review-slider">
              <div className="swiper-wrapper">
                {/* Single Review */}
                <div className="swiper-slide">
                  <div className="review-text">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores similique sunt in culpa qui officia deserunt</p>
                  </div>
                  <div className="review-author d-flex align-items-center">
                    <div className="review-author-img">
                      <img src="assets/img/authors/female.png" alt="" />
                    </div>
                    <div className="review-author-info">
                      <ul className="list-inline">
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                      </ul>
                      <span><strong>Marie J. Campbell</strong>  Miami, USA</span>
                    </div>
                  </div>
                </div>
                {/* End of Single Review */}
                {/* Single Review */}
                <div className="swiper-slide">
                  <div className="review-text">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores similique sunt in culpa qui officia deserunt</p>
                  </div>
                  <div className="review-author d-flex align-items-center">
                    <div className="review-author-img">
                      <img src="assets/img/authors/male.png" alt="" />
                    </div>
                    <div className="review-author-info">
                      <ul className="list-inline">
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                      </ul>
                      <span><strong>John Doe</strong> Wakanda, Africa</span>
                    </div>
                  </div>
                </div>
                {/* End of Single Review */}
                {/* Single Review */}
                <div className="swiper-slide">
                  <div className="review-text">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores similique sunt in culpa qui officia deserunt</p>
                  </div>
                  <div className="review-author d-flex align-items-center">
                    <div className="review-author-img">
                      <img src="assets/img/authors/female.png" alt="" />
                    </div>
                    <div className="review-author-info">
                      <ul className="list-inline">
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                      </ul>
                      <span><strong>Marie J. Campbell</strong>  Miami, USA</span>
                    </div>
                  </div>
                </div>
                {/* End of Single Review */}
                {/* Single Review */}
                <div className="swiper-slide">
                  <div className="review-text">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores similique sunt in culpa qui officia deserunt</p>
                  </div>
                  <div className="review-author d-flex align-items-center">
                    <div className="review-author-img">
                      <img src="assets/img/authors/male.png" alt="" />
                    </div>
                    <div className="review-author-info">
                      <ul className="list-inline">
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                        <li><i className="fa fa-star" /></li>
                      </ul>
                      <span><strong>John Doe</strong> Wakanda, Africa</span>
                    </div>
                  </div>
                </div>
                {/* End of Single Review */}
              </div>
            </div>
            {/* Arrows */}
            <div className="swiper-button-next next-review">
              <img src="assets/img/icons/right-arrow.svg" alt="" className="svg" />
            </div>
            <div className="swiper-button-prev prev-review">
              <img src="assets/img/icons/left-arrow.svg" alt="" className="svg" />
            </div>
          </div>
          {/* End of Review Slider */}
        </div>
      </div>
    </div>
  </section>
  {/* End of Reviews */}
  {/* FAQ */}
  <section className="pt-120 pb-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="faq pb-50" data-animate="fadeInUp" data-delay=".1">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
            </div>
            <div className="accordion" id="accordionFaq">
              <div className="single-faq">
                <div className="faq-title d-flex align-items-center">
                  <h3 className="h5" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">I can’t access my internet. How do i contact with support center?</h3>
                </div>
                <div id="collapseOne" className="collapse show" data-parent="#accordionFaq">
                  <div className="faq-answer">
                    <p><span>Ans: </span>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                  </div>
                </div>
              </div>
              <div className="single-faq">
                <div className="faq-title d-flex align-items-center">
                  <h3 className="h5" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">I already paid my bill but still its showing Due. Why is that?</h3>
                </div>
                <div id="collapseTwo" className="collapse" data-parent="#accordionFaq">
                  <div className="faq-answer">
                    <p><span>Ans: </span>Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                  </div>
                </div>
              </div>
              <div className="single-faq">
                <div className="faq-title d-flex align-items-center">
                  <h3 className="h5" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How can I contact with your emergency higher management?</h3>
                </div>
                <div id="collapseThree" className="collapse" data-parent="#accordionFaq">
                  <div className="faq-answer">
                    <p><span>Ans: </span>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="popup-video mb-50" data-animate="fadeInUp" data-delay=".4">
            <img src="assets/img/video-thumb.jpg" data-rjs={2} alt="" />
            <a href="https://www.youtube.com/watch?v=6ZfuNTqbHE8" className="youtube-popup play-btn ripple">
              <i className="fa fa-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End of FAQ */}
  {/* Latest news */}
  <section className="light-bg pt-120 pb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-10">
          <div className="section-title text-center" data-animate="fadeInUp" data-delay=".1">
            <h2>Latest News</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="latest-news-wraper position-relative">
            <div className="swiper-container news-slider">
              <div className="swiper-wrapper">
                <div className="single-news swiper-slide">
                  <a className="tip" href="#">News</a>
                  <img src="assets/img/posts/post1.jpg" data-rjs={2} alt="" />
                  <ul className="list-unstyled d-flex align-items-center">
                    <li><img src="assets/img/authors/author1.jpg" alt="" /></li>
                    <li>by <a href="#">Zane M. Frye</a></li>
                    <li><a href="#">January 19, 2018</a></li>
                  </ul>
                  <h3 className="h5"><a href="blog-details.html">Everything you need to know to cut the cord and ditch cable to order now</a></h3>
                  <a href="blog-details.html">Continue Reading <i className="fa fa-angle-right" /></a>
                </div>
                <div className="single-news swiper-slide">
                  <a className="tip" href="#">News</a>
                  <img src="assets/img/posts/post2.jpg" data-rjs={2} alt="" />
                  <ul className="list-unstyled d-flex align-items-center">
                    <li><img src="assets/img/authors/male.png" alt="" /></li>
                    <li>by <a href="#">Zane M. Frye</a></li>
                    <li><a href="#">January 19, 2018</a></li>
                  </ul>
                  <h3 className="h5"><a href="blog-details.html">Why the FCC's latest net neutrality defense is hollow on the flow</a></h3>
                  <a href="blog-details.html">Continue Reading <i className="fa fa-angle-right" /></a>
                </div>
                <div className="single-news swiper-slide">
                  <a className="tip" href="#">News</a>
                  <img src="assets/img/posts/post3.jpg" data-rjs={2} alt="" />
                  <ul className="list-unstyled d-flex align-items-center">
                    <li><img src="assets/img/authors/female.png" alt="" /></li>
                    <li>by <a href="#">Zane M. Frye</a></li>
                    <li><a href="#">January 19, 2018</a></li>
                  </ul>
                  <h3 className="h5"><a href="blog-details.html">Powered Enterprise IT: Cloud implementation built for the future</a></h3>
                  <a href="blog-details.html">Continue Reading <i className="fa fa-angle-right" /></a>
                </div>
                <div className="single-news swiper-slide">
                  <a className="tip" href="#">News</a>
                  <img src="assets/img/posts/post1.jpg" data-rjs={2} alt="" />
                  <ul className="list-unstyled d-flex align-items-center">
                    <li><img src="assets/img/authors/author1.jpg" alt="" /></li>
                    <li>by <a href="#">Zane M. Frye</a></li>
                    <li><a href="#">January 19, 2018</a></li>
                  </ul>
                  <h3 className="h5"><a href="blog-details.html">Three privacy tools that block your Internet provider from tracking your computer</a></h3>
                  <a href="blog-details.html">Continue Reading <i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="swiper-button-next next-news">
              <img src="assets/img/icons/right-arrow.svg" alt="" className="svg" />
            </div>
            <div className="swiper-button-prev prev-news">
              <img src="assets/img/icons/left-arrow.svg" alt="" className="svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End of Latest news */}
  {/* Product Carousel */}
  <section className="pt-120 pb-120">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-10">
          <div className="section-title text-center" data-animate="fadeInUp" data-delay=".1">
            <h2>Popular Products</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="product-carousel-wraper position-relative">
            <div className="swiper-container product-carousel">
              <div className="swiper-wrapper">
                <div className="swiper-slide single-product">
                  <span className="tip">New</span>
                  <img src="assets/img/products/product1.jpg" data-rjs={2} alt="" />
                  <ul className="list-inline">
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                  <h3 className="h5">
                    <a href="#">Wireless security camera for personal/home use</a>
                  </h3>
                  <div className="price-and-all position-relative">
                    <span className="price">$10.50</span>
                    <ul className="list-unstyled d-flex">
                      <li><a href="#" className="btn">Add to Cart</a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-heart-o" /></a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-eye" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="swiper-slide single-product">
                  <span className="tip">New</span>
                  <span className="discount">25% off</span>
                  <img src="assets/img/products/product2.jpg" data-rjs={2} alt="" />
                  <ul className="list-inline">
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                  <h3 className="h5">
                    <a href="#">TpLink-MR3420, 3G/4G Wireless N Router</a>
                  </h3>
                  <div className="price-and-all position-relative">
                    <span className="price"><del>$12.50</del> $10.50</span>
                    <ul className="list-unstyled d-flex">
                      <li><a href="#" className="btn">Add to Cart</a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-heart-o" /></a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-eye" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="swiper-slide single-product">
                  <span className="tip">New</span>
                  <img src="assets/img/products/product3.jpg" data-rjs={2} alt="" />
                  <ul className="list-inline">
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                  <h3 className="h5">
                    <a href="#">Unlocked 4g lte Modem Aircard Sierra 320U 4G LTE</a>
                  </h3>
                  <div className="price-and-all position-relative">
                    <span className="price">$10.50</span>
                    <ul className="list-unstyled d-flex">
                      <li><a href="#" className="btn">Add to Cart</a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-heart-o" /></a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-eye" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="swiper-slide single-product">
                  <span className="tip">New</span>
                  <img src="assets/img/products/product4.jpg" data-rjs={2} alt="" />
                  <ul className="list-inline">
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                  <h3 className="h5">
                    <a href="#">Micro-soft Office 365 Business Premium</a>
                  </h3>
                  <div className="price-and-all position-relative">
                    <span className="price">$10.50</span>
                    <ul className="list-unstyled d-flex">
                      <li><a href="#" className="btn">Add to Cart</a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-heart-o" /></a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-eye" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="swiper-slide single-product">
                  <span className="tip">New</span>
                  <span className="discount">25% off</span>
                  <img src="assets/img/products/product5.jpg" data-rjs={2} alt="" />
                  <ul className="list-inline">
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                  <h3 className="h5">
                    <a href="#">TP-LINK TL-WR642G - wireless router - 802.11</a>
                  </h3>
                  <div className="price-and-all position-relative">
                    <span className="price"><del>$12.50</del> $10.50</span>
                    <ul className="list-unstyled d-flex">
                      <li><a href="#" className="btn">Add to Cart</a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-heart-o" /></a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-eye" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="swiper-slide single-product">
                  <span className="tip">New</span>
                  <span className="discount">25% off</span>
                  <img src="assets/img/products/product6.jpg" data-rjs={2} alt="" />
                  <ul className="list-inline">
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                    <li><i className="fa fa-star" /></li>
                  </ul>
                  <h3 className="h5">
                    <a href="#">LaCie Porsche Design 32GB USB 3.0 Flash Drive</a>
                  </h3>
                  <div className="price-and-all position-relative">
                    <span className="price"><del>$12.50</del> $10.50</span>
                    <ul className="list-unstyled d-flex">
                      <li><a href="#" className="btn">Add to Cart</a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-heart-o" /></a></li>
                      <li><a href="#" className="btn btn-icon"><i className="fa fa-eye" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next next-product">
              <img src="assets/img/icons/right-arrow.svg" alt="" className="svg" />
            </div>
            <div className="swiper-button-prev prev-product">
              <img src="assets/img/icons/left-arrow.svg" alt="" className="svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End of Product Carousel */}
  {/* Subscription */}
  <section className="pb-120">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-5">
          <div className="section-title pb-0" data-animate="fadeInUp" data-delay=".1">
            <h2>Sign Up to Newsletter</h2>
            <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-7">
          {/* Subscription form */}
          <div className="subscription-form" data-animate="fadeInUp" data-delay=".4">
            <form className="parsley-validate" action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&id=f4e0e93d1d" method="post" name="mc-embedded-subscribe-form" target="_blank">
              <input type="email" name="EMAIL" className="theme-input-style" placeholder="Enter your e-mail address" required />
              <button className="btn" type="submit">Subscribe Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End of Subscription */}
  {/* Brands */}
  <section className="light-bg pt-80 pb-50">
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="brands list-unstyled d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mb-0">
            <li data-animate="fadeInUp" data-delay=".05"><img src="assets/img/brands/brand1.png" alt="" /></li>
            <li data-animate="fadeInUp" data-delay=".2"><img src="assets/img/brands/brand2.png" alt="" /></li>
            <li data-animate="fadeInUp" data-delay=".35"><img src="assets/img/brands/brand3.png" alt="" /></li>
            <li data-animate="fadeInUp" data-delay=".5"><img src="assets/img/brands/brand4.png" alt="" /></li>
            <li data-animate="fadeInUp" data-delay=".65"><img src="assets/img/brands/brand5.png" alt="" /></li>
            <li data-animate="fadeInUp" data-delay=".8"><img src="assets/img/brands/brand6.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* End of Brands */}
  {/* Footer */}
  <footer className="main-footer">
    <div className="footer-widgets light-bg border-top pt-80 pb-50">
      <div className="container">
        <div className="row">
          {/* Footer Widget */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget mb-30" data-animate="fadeInUp" data-delay=".1">
              <h3 className="h4">Contact Us</h3>
              <div className="contact-widget-content">
                <p>Sed ut perspiciatis unde omnis natus vitae dicta sunt explicabo.</p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-phone" />
                    <a href="tel:+1234567890">(+1) 234-567-890</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" />
                    <a href="mailto:serviney.demo@fakemail.com">serviney.demo@fakemail.com</a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>784/A Zirtoli Bazar, Begumgonj, Noakhali-3800, BD</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End of Footer Widget */}
          {/* Footer Widget */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget mb-30" data-animate="fadeInUp" data-delay=".3">
              <h3 className="h4">My Account</h3>
              <div className="menu-wrap">
                <ul className="menu">
                  <li><a href="#">Pay My Bills</a></li>
                  <li><a href="#">Manage My Account</a></li>
                  <li><a href="#">Constant Guard</a></li>
                  <li><a href="#">Cable Customer Agreement</a></li>
                  <li><a href="#">Move Services</a></li>
                  <li><a href="#">Manage Users &amp; Alerts</a></li>
                  <li><a href="#">Log Out</a></li>
                  <li><a href="#">Internet Help</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* End of Footer Widget */}
          {/* Footer Widget */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget mb-30" data-animate="fadeInUp" data-delay=".5">
              <h3 className="h4">Support Links</h3>
              <div className="menu-wrap">
                <ul className="menu">
                  <li><a href="#">Comcast Customer Service</a></li>
                  <li><a href="#">Bill &amp; Payment Methods</a></li>
                  <li><a href="#">Support Forums</a></li>
                  <li><a href="#">Privacy Statement</a></li>
                  <li><a href="#">Comcast Customer Service</a></li>
                  <li><a href="#">Social Responsibility</a></li>
                  <li><a href="#">Support Forums</a></li>
                  <li><a href="#">Internet Help</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* End of Footer Widget */}
          {/* Footer Widget */}
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget mb-30" data-animate="fadeInUp" data-delay=".7">
              <h3 className="h4">Popular Products</h3>
              <div className="menu-wrap">
                <ul className="menu">
                  <li><a href="#">CC TV Camera</a></li>
                  <li><a href="#">Internet Connection Modem</a></li>
                  <li><a href="#">Wireless Router</a></li>
                  <li><a href="#">Update Anti-virus Softwares</a></li>
                  <li><a href="#">Fingerprint Access</a></li>
                  <li><a href="#">Powerful Switch Cable</a></li>
                  <li><a href="#">Wireless USB Adapter/Card</a></li>
                  <li><a href="#">Internet Help</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* End of Footer Widget */}
        </div>
      </div>
    </div>
    <div className="bottom-footer dark-bg">
      <div className="container">
        <div className="row align-items-center">
          {/* Copyright */}
          <div className="col-md-6">
            <div className="copyright-text text-center text-md-left">
              <p className="mb-md-0">© 2018 Serviney. All rights reserved.</p>
            </div>
          </div>
          {/* Social Profiles */}
          <div className="col-md-6">
            <ul className="social-profiles nav justify-content-center justify-content-md-end">
              <li><a href="#" target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-vimeo" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End of Footer */}
  {/* Back to top */}
  <div className="back-to-top">
    <a href="#"> <i className="fa fa-chevron-up" /></a>
  </div>
</div>
);
}

export default Home;
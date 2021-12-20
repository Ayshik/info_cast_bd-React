import React from 'react'
import Header from './Header';
import Footer from './Footer'
const Clint=()=>{
  return(
      <div>
        <Header/>
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
    <Footer/>
  </section>
      </div>
    )
  }


export default Clint

import React from 'react'
import Clint from './Clint'
import Header from './Header';
import Footer from './Footer'
const All_service=()=>{
    return(
            <div>
              <Header/>
                 {/* Page Title */}
        <section className="page-title-wrap" data-bg-img="img/hills.jpg" data-rjs={2}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-title" data-animate="fadeInUp" data-delay="1.2">
                  <h2>Services</h2>
                  <ul className="list-unstyled m-0 d-flex">
                    <li><a href="/"><i className="fa fa-home" /> Home</a></li>
                    <li><a href="#">All services</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Page Title */}
        {/* Services */}
        <section className="pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-service text-center" data-animate="fadeInUp" data-delay=".1">
                  <img src="assets/img/icons/earth.svg" alt="" className="svg" />
                  <h4>High Speed Internet</h4>
                  <p>Lorem ipsum dolor sit ametteturmpor incididunt most popular.</p>
                  <a href="internet.html">Learn More <i className="fa fa-angle-right" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-service text-center" data-animate="fadeInUp" data-delay=".4">
                  <img src="assets/img/icons/phone.svg" alt="" className="svg" />
                  <h4>Phone Service</h4>
                  <p>Lorem ipsum dolor sit ametteturmpor incididunt most popular.</p>
                  <a href="mobile.html">Learn More <i className="fa fa-angle-right" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-service text-center" data-animate="fadeInUp" data-delay=".7">
                  <img src="assets/img/icons/tv.svg" alt="" className="svg" />
                  <h4>Cable TV</h4>
                  <p>Lorem ipsum dolor sit ametteturmpor incididunt most popular.</p>
                  <a href="cable-tv.html">Learn More <i className="fa fa-angle-right" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-service text-center" data-animate="fadeInUp" data-delay={1}>
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
        {/* Why Us */}
        <section className="light-bg pt-120 pb-55">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8 col-md-10">
                <div className="section-title text-center" data-animate="fadeInUp" data-delay=".1">
                  <h2>Why choose us</h2>
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
          </div>
        </section>
        {/* End of Why One */}
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
                <div className="popup-video mb-50" data-animate="fadeInUp" data-delay=".5">
                  <img src="assets/img/video-thumb.jpg" data-rjs={2} alt="" />
                  <a href="https://www.youtube.com/watch?v=6ZfuNTqbHE8" className="youtube-popup play-btn ripple">
                    <i className="fa fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </section>
        {/* End of FAQ */}
        <Clint/>
            </div>
        )
    }


export default All_service

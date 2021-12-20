import React from 'react'


function Brands() {
    return (
        <div>
        
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
        </div>
    )
}

export default Brands

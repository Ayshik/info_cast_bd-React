import React, { Component } from 'react'

export class Contacts extends Component {
    render() {
        return (
            <div>
                 {/* Page Title */}
      <section className="page-title-wrap" data-bg-img="assets/img/hills.jpg" data-rjs={2}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title" data-animate="fadeInUp" data-delay="1.2">
                <h2>Contact</h2>
                <ul className="list-unstyled m-0 d-flex">
                  <li><a href="index.html"><i className="fa fa-home" /> Home</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Page Title */}
                {/* Contacts */}
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Map */}
              <div className="map" data-animate="fadeInUp" data-delay=".1" data-trigger="map" data-map-options="{&quot;latitude&quot;: &quot;37.386052&quot;, &quot;longitude&quot;: &quot;-122.083851&quot;, &quot;zoom&quot;: &quot;15&quot;, &quot;api_key&quot;: &quot;AIzaSyCjkssBA3hMeFtClgslO2clWFR6bRraGz0&quot;}" />
            </div>
            <div className="col-lg-4">
              {/* Map description */}
              <div className="map-description light-bg d-flex align-items-center" data-animate="fadeInUp" data-delay=".4">
                <p>" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis ntium voluptatum cupiditate non provident, lique sunt in culpa qui officia eserunt mollitia animi, id est laborum noakhalir lok fuga "</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="page-contacts-widget-wrapper light-bg d-flex align-items-center" data-animate="fadeInUp" data-delay=".1">
                {/* Contact Info */}
                <div className="page-contacts-widget">
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
            </div>
            <div className="col-lg-8">
              {/* Contact Form */}
              <div className="contact-form parsley-validate-wrap mt-60" data-animate="fadeInUp" data-delay=".4">
                <h3 className="bordered-title">Get In Touch</h3>
                <div className="form-response" />
                <form method="post" action="sendmail.php">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-field">
                        <input type="text" name="name" className="theme-input-style" placeholder="Your Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field">
                        <input type="email" name="email" className="theme-input-style" placeholder="E-mail address" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field">
                        <input type="text" name="phone" className="theme-input-style" placeholder="Telephone" data-parsley-pattern="^[\d\+\-\.\(\)\/\s]*$" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field">
                        <input type="text" name="subject" className="theme-input-style" placeholder="Subject" />
                      </div>
                    </div>
                  </div>
                  <div className="form-field">
                    <textarea name="message" className="theme-input-style" placeholder="Write your message" required defaultValue={""} />
                  </div>
                  <button type="submit" className="btn">Send Message</button>
                </form>
              </div>
              {/* End of Contact Form */}
            </div>
          </div>
        </div>
      </section>
      {/* End of Contacts */} 
            </div>
        )
    }
}

export default Contacts

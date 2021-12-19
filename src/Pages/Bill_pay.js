import React from 'react'
import Header from './Header';
import Footer from './Footer'
const Bill_pay=()=>{
  return(
    <div>
      <Header/>
    <p>{/* Page Title */}
    </p><section className="page-title-wrap" data-bg-img="img/hills.jpg" data-rjs={2}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-title" data-animate="fadeInUp" data-delay="1.2">
              <h2>Cart</h2>
              <ul className="list-unstyled m-0 d-flex">
                <li><a href="index.html"><i className="fa fa-home" /> Home</a></li>
                <li><a href="products-3-columns.html">Products</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End of Page Title */}
    {/* Checkout */}
    <section className="pt-120 pb-70">
      <div className="container">
        <div className="row">
          {/* Returning Customer */}
          <div className="col-12" data-animate="fadeInUp" data-delay=".1">
            <div className="checkout-additional-option light-bg mb-30">
              <span><i className="fa fa-window-maximize" />Returning Customer? <a href="#returning-customer" data-toggle="collapse" aria-expanded="false">Click Here to Login</a></span>
            </div>
            <div className="collapse" id="returning-customer">
              <div className="returning-customer mb-30">
                <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                <form className="parsley-validate" action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-field">
                        <span className="input-label">Username or E-mail Address <span className="text-danger">*</span></span>
                        <input type="text" className="theme-input-style" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-field">
                        <span className="input-label">Password <span className="text-danger">*</span></span>
                        <input type="password" className="theme-input-style" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-field d-flex align-items-center">
                        <button className="btn" type="submit">Log In</button>
                        <label className="m-0"><input type="checkbox" />Remember Me?</label>
                      </div>
                      <a href="#">Forgot Your Password?</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End of Returning Customer */}
          {/* Coupon Code */}
          <div className="col-12" data-animate="fadeInUp" data-delay=".3">
            <div className="checkout-additional-option light-bg mb-30">
              <span><i className="fa fa-window-maximize" />Have a coupon? <a href="#coupon-code" data-toggle="collapse" aria-expanded="false">Click here to enter your code</a></span>
            </div>
            <div className="collapse" id="coupon-code">
              <div className="returning-customer checkout-coupon mb-30">
                <form className="parsley-validate" action="#">
                  <div className="d-md-flex">
                    <div className="form-field mb-0">
                      <input type="text" className="theme-input-style" placeholder="Input Coupon Code" required />
                    </div>
                    <button className="btn">Apply Coupon</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* End of Coupon Code */}
        </div>
        <form className="parsley-validate" action="#">
          <div className="row">
            {/* Billing Details */}
            <div className="col-lg-6">
              <div className="billing-details pb-4" data-animate="fadeInUp" data-delay=".1">
                <h4 className="bordered-title">Billing Details</h4>
                <div className="row half-gutters">
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label>First Name <span className="text-danger">*</span></label>
                      <input type="text" className="theme-input-style" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label>Last Name <span className="text-danger">*</span></label>
                      <input type="text" className="theme-input-style" required />
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <label>Company Name</label>
                  <input type="text" className="theme-input-style" />
                </div>
                <div className="row half-gutters">
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label>Email address <span className="text-danger">*</span></label>
                      <input type="email" className="theme-input-style" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-field">
                      <label>Phone <span className="text-danger">*</span></label>
                      <input type="text" className="theme-input-style" data-parsley-pattern="^[\d\+\-\.\(\)\/\s]*$" required />
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <label>Country <span className="text-danger">*</span></label>
                  <div className="select-wrapper">
                    <select className="theme-input-style">
                      <option value="#">Australia</option>
                      <option value="#">Bangladesh</option>
                      <option value="#">Canada</option>
                      <option value="#">Denmark</option>
                      <option value="#">Russian Federation</option>
                      <option value="#">UK</option>
                      <option value="#">USA</option>
                    </select>
                  </div>
                </div>
                <div className="form-field mb-3">
                  <label>Address <span className="text-danger">*</span></label>
                  <input type="text" className="theme-input-style" placeholder="Stree address" required />
                </div>
                <div className="form-field">
                  <input type="text" className="theme-input-style" placeholder="Appartment, Suit, Flatl, etc. (Optional)" required />
                </div>
                <div className="form-field">
                  <label>Town/City <span className="text-danger">*</span></label>
                  <input type="text" className="theme-input-style" required />
                </div>
                <div className="form-field">
                  <label>State <span className="text-danger">*</span></label>
                  <input type="text" className="theme-input-style" required />
                </div>
                <div className="form-field">
                  <label>Post Code <span className="text-danger">*</span></label>
                  <input type="number" className="theme-input-style" required />
                </div>
                <div className="form-field">
                  <label data-toggle="collapse" data-target="#new-account-pass" aria-hidden="true"><input type="checkbox" />Creat an account?</label>
                </div>
                <div className="collapse" id="new-account-pass">
                  <div className="form-field">
                    <label>Create account password <span className="text-danger">*</span></label>
                    <input type="password" className="theme-input-style" placeholder="Password" required />
                  </div>
                </div>
                <div className="form-field">
                  <label data-toggle="collapse" data-target="#different-spipping-addr" aria-hidden="true"><input type="checkbox" />Ship To A Different Address?</label>
                </div>
                <div className="collapse" id="different-spipping-addr">
                  <div className="form-field mb-3">
                    <input type="text" className="theme-input-style" placeholder="Stree address" required />
                  </div>
                  <div className="form-field">
                    <input type="text" className="theme-input-style" placeholder="Appartment, Suit, Flatl, etc. (Optional)" required />
                  </div>
                </div>
                <div className="form-field">
                  <label>Order Note</label>
                  <textarea className="theme-input-style" placeholder="Note about your order, e.g. special notes for delivery." defaultValue={""} />
                </div>
              </div>
            </div>
            {/* End of Billing Details */}
            {/* Order Details */}
            <div className="col-lg-6">
              <div className="order-details" data-animate="fadeInUp" data-delay=".4">
                <h4 className="bordered-title">Your Order</h4>
                <p className="border-bottom">Product Name <span className="float-right">Total</span></p>
                <table className="order-details-table table table-bordered mb-50">
                  <tbody>
                    <tr>
                      <td>Wireless security camera for personal/home use</td>
                      <td>$13.50</td>
                    </tr>
                    <tr>
                      <td>TpLink-MR3420, 3G/4G Wireless N Router</td>
                      <td>$21.00</td>
                    </tr>
                    <tr>
                      <td>Micro-soft Office 365 Business Premium</td>
                      <td>$19.50</td>
                    </tr>
                    <tr>
                      <td>Shipping Charge</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>VAT</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>$50.20</td>
                    </tr>
                  </tbody>
                </table>
                <div className="form-field">
                  <div className="payment-method">
                    <label><input type="radio" name="payment-type" defaultChecked />Check / Cashout</label>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                  </div>
                </div>
                <div className="form-field">
                  <div className="payment-method">
                    <label><input type="radio" name="payment-type" />Debit/Credit Card</label>
                    <img src="assets/img/payment-methods.png" alt="" />
                    <hr className="mt-30 mb-30" />
                    <button type="submit" className="btn">Place Order</button>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Order Details */}
          </div>
        </form>
      </div>
      <Footer/>
    </section>
    {/* End of Checkout */}<p />
  </div>
    )
  }


export default Bill_pay
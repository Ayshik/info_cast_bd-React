import React from 'react'

const Bill_pay=()=>{
  return(
      <div>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Page Title */}
        {/* Cart */}
        <section className="pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col">
                {/* Products Table */}
                <form className="parsley-validate" action="#" data-animate="fadeInUp" data-delay=".1">
                  <div className="primary-bg text-white p-2 mb-4 d-md-none">
                    <span>Table is movable to left and right.</span>
                  </div>
                  <div className="table-responsive">
                    <table className="sn-cart light-bg mb-60 table table-bordered">
                      <tbody>
                        <tr>
                          <th colSpan={2}>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/img/products/cart-item1.jpg" alt="" />
                          </td>
                          <td>
                            <a href="#">Wireless security camera for personal/home use</a>
                          </td>
                          <td>
                            <span>$13.50</span>
                          </td>
                          <td>
                            <span className="quantity-control d-flex justify-content-center align-items-center">
                              <span className="minus"><img src="assets/img/icons/minus.svg" alt="" /></span>
                              <input type="text" defaultValue={1} />
                              <span className="plus"><img src="assets/img/icons/plus.svg" alt="" /></span>
                            </span>
                          </td>
                          <td>
                            <span>$13.50</span>
                          </td>
                          <td>
                            <a href="#"><i className="fa fa-times" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/img/products/cart-item2.jpg" alt="" />
                          </td>
                          <td>
                            <a href="#">TpLink-MR3420, 3G/4G Wireless N Router</a>
                          </td>
                          <td>
                            <span>$13.50</span>
                          </td>
                          <td>
                            <span className="quantity-control d-flex justify-content-center align-items-center">
                              <span className="minus"><img src="assets/img/icons/minus.svg" alt="" /></span>
                              <input type="text" defaultValue={1} />
                              <span className="plus"><img src="assets/img/icons/plus.svg" alt="" /></span>
                            </span>
                          </td>
                          <td>
                            <span>$13.50</span>
                          </td>
                          <td>
                            <a href="#"><i className="fa fa-times" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/img/products/cart-item3.jpg" alt="" />
                          </td>
                          <td>
                            <a href="#">Micro-soft Office 365 Business Premium</a>
                          </td>
                          <td>
                            <span>$13.50</span>
                          </td>
                          <td>
                            <span className="quantity-control d-flex justify-content-center align-items-center">
                              <span className="minus"><img src="assets/img/icons/minus.svg" alt="" /></span>
                              <input type="text" defaultValue={1} />
                              <span className="plus"><img src="assets/img/icons/plus.svg" alt="" /></span>
                            </span>
                          </td>
                          <td>
                            <span>$13.50</span>
                          </td>
                          <td>
                            <a href="#"><i className="fa fa-times" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/img/products/cart-item4.jpg" alt="" />
                          </td>
                          <td>
                            <a href="#">Unlocked 4g lte Modem Aircard Sierra 320U 4G LTE</a>
                          </td>
                          <td>
                            <span>$13.50</span>
                          </td>
                          <td>
                            <span className="quantity-control d-flex justify-content-center align-items-center">
                              <span className="minus"><img src="assets/img/icons/minus.svg" alt="" /></span>
                              <input type="text" defaultValue={1} />
                              <span className="plus"><img src="assets/img/icons/plus.svg" alt="" /></span>
                            </span>
                          </td>
                          <td>
                            <span>$13.50</span>
                          </td>
                          <td>
                            <a href="#"><i className="fa fa-times" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={6}>
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="cupon-field position-relative">
                                <input type="text" className="theme-input-style" placeholder="Input Coupon Code" required />
                                <button type="submit" className="btn">Apply Coupon</button>
                              </div>
                              <div className="cart-update">
                                <button type="button" className="btn">Update Cart</button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
                {/* End of Products Table */}
                {/* Price Calculation Table */}
                <div className="d-flex justify-content-end" data-animate="fadeInUp" data-delay=".1">
                  <div className="cart-totals light-bg">
                    <h2 className="bordered-title">Cart Total</h2>
                    <table className="w-100">
                      <tbody><tr>
                          <th>Sub Total</th>
                          <td>$48.00</td>
                        </tr>
                        <tr>
                          <th>Shipping</th>
                          <td>Free</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td>$48.00</td>
                        </tr>
                      </tbody></table>
                    <a href="#" className="btn">Proceed To Checkout</a>
                  </div>
                </div>
                {/* End of Price Calculation Table */}
              </div>
            </div>
          </div>
        </section>
        {/* End of Cart */}<p />
      </div>
    )
  }


export default Bill_pay
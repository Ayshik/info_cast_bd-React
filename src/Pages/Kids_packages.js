import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Request from './Request';

const Kids_packages=()=>{
  const [products, setProducts] = useState([]);
    
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/kids_packages")
        .then(resp=>{
            console.log(resp.data);
            setProducts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
  return(
    <div>
    <p>{/* Packages Wrap */}
            </p><section className="pt-120 pb-55">
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
               {
               products.map(p=>(

                  <div key={p.id} className="col-lg-3 col-sm-6">
                    <div className="single-package text-center" data-animate="fadeInUp" data-delay=".1">
                    <h4>{p.name}</h4>
                      
                      <ul className="list-unstyled">
                        <li>Free installation</li>
                        <li>Up to <span>{p.speed}</span> download speed</li>
                        <li>Unlimited data usages</li>
                        <li><span>{p.pricinglock}</span> pricing lock guarantee</li>
                        <li>Unlimited bandwidth</li>
                      </ul>

                      <p><sup>৳</sup>{p.price}<span>/Monthly</span></p>
                       <Link to={`/Request/${p.name}/${p.price}`} className="btn">Order This Plan</Link>
                    </div>
                  </div>
                 
                
              
                      ))
                }
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
            {/* End of Packages Wrap */}<p />
          </div>
    )
  }


export default Kids_packages
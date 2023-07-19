import React from "react";
import { Link } from "react-router-dom";

import pricingBG from "../../img/service-cost-bg.jpg";

import "./style.css";

const Pricing = ({ pricing }) => {
  return (
    <section
      className="pricing-area"
      style={{ backgroundImage: `url(${pricingBG})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading" data-aos="fade-up">
              <h3 className="sub-title">PRICING</h3>
              <h2 className="section-title">SERVICING COST</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {pricing?.map((priceData, index) => (
            <div className="col-lg-4 col-md-6">
              <div className="pricing-box" data-aos="fade-up" key={index}>
                <div className="pricing-header">
                  <h3>{priceData.name}</h3>
                  <div className="price">
                    {priceData.price}
                  </div>
                </div>
                <div className="pricing-content">
                  <ul>
                    {priceData.details?.map((detailData, index) => (
                      <li key={index}>
                        <p>
                          <i className="fa fa-arrow-circle-right" />
                          {detailData}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-action">
                  <Link to="/contact">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;

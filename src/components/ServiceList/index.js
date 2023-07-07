import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../img/service-bg-1.png";
import serviceImg2 from "../../img/service-bg-2.png";
import serviceImg3 from "../../img/service-bg-3.jpg";
import serviceImg4 from "../../img/service-bg-4.jpg";
import serviceImg5 from "../../img/service-bg-5.jpg";
import serviceImg6 from "../../img/service-bg-6.jpg";
import serviceIcon1 from "../../img/service-icon-1.png";
import serviceIcon2 from "../../img/service-icon-2.png";
import serviceIcon3 from "../../img/service-icon-3.png";
import serviceIcon4 from "../../img/service-icon-4.png";
import serviceIcon5 from "../../img/service-icon-5.png";
import serviceIcon6 from "../../img/service-icon-6.png";



import "./style.css";

const ServiceSection = () => {
  return (
    <section className="service-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon1} alt="img" />
              </div>
              <div className="service-text">
                <h3>Virtual Declutter</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single?service=Virtual-Duculator" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg1} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon2} alt="img" />
              </div>
              <div className="service-text">
                <h3>Image Enhancement</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single?service=Image-Enhancement" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg2} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon3} alt="img" />
              </div>
              <div className="service-text">
                <h3>Virtual Staging</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single?service=virtual-staging" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg3} alt="img" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon4} alt="img" />
              </div>
              <div className="service-text">
                <h3>Website Development</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single?service=website-development" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg4} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon5} alt="img" />
              </div>
              <div className="service-text">
                <h3>Wordpress Designing</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single?service=wordpress-designing" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg5} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon6} alt="img" />
              </div>
              <div className="service-text">
                <h3>Interior Design</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
                <Link to="/service-single?service=interior-designing" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg6} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;


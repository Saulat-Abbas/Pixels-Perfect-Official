import React from "react";
// import ServiceBg from "../../img/service-bg-1.png";
import Pricing from "../../components/pricing";
import Partners from "../../components/partners";
import ImageSlider from "../../components/imageSlider";
import "./style.css";
import Testimonial from "../testimonial";

const ServiceSingle = () => {

  return (
    <div>
      <section className="service-video-box-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="site-heading">
            </div>
          </div>
          <div id="image-container" class="virtual-duculator-images">
            <ImageSlider />
          </div>
        </div>
      </section>
      {/* <Testimonial /> */}
      <Pricing />
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading text-center" data-aos="fade-up">
                <h3 className="sub-title">CORPORATION</h3>
                <h2 className="section-title">OUR CLIENTS & PARTNERS</h2>
              </div>
            </div>
          </div>
        </div>
        {/* <Partners /> */}
      </section>
    </div>
  );
};

export default ServiceSingle;

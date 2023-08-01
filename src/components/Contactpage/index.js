import React from "react";
import ContactForm from "../ContactFrom";
import "./style.css";
import { Modal } from "react-bootstrap";
const Contactpage = () => {
  return (
    <section className="contact-page-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="contact-form">
              <div className="site-heading" data-aos="fade-up">
              <h2 className="section-title">LET'S CONNECT!</h2>
                <h3 className="sub-title">FEEL FREE TO CONTACT ME DIRECTLY FOR FUTURE WORK</h3>
                
              </div>
              <ContactForm />
            </div>
          </div>
          {/* <div className="col-lg-7 col-sm-6">
            <div className="contact-page-right">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d555482.3711026354!2d55.086876101283096!3d24.842777577980748!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1629183603415!5m2!1sen!2sbd"
              ></iframe>
            </div> */}
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Contactpage;
  
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
         
          </div>
        </div>
    </section>
  );
};

export default Contactpage;
  
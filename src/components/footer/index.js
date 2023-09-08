import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
  const NewsletterHandler = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
              <div className="single-footer">
                <h3>About</h3>
              
                <ul className="footer-contact">
                  <li>
                    <i className="fas fa-phone-square-alt" /> (+1) 307 243 2920
                  </li>
                  <li>
                    <i className="fas fa-envelope" /> info@Pixelperfect.com
                  </li>
                  <li>
                    <i className="fas fa-map" /> 30 N Gould Street, Sheridan, Wyoming, USA.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
              <div className="single-footer">
               
              </div>
            </div>
           
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer" >
                
                <h3>Qucik Links</h3>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                  </li>
                  <li>
                    <Link to="/service">Our Services</Link>
                  </li>
                  <li>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fade_rule" />
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; Copyright 2023 by Pixel Perfect</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

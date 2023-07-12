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
                <p>
                  Precious ipsum dolor sit amet consectetur
                  <br /> adipisicing elit, sed dos mod tempor
                </p>
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
                {/* <h3>Exlore</h3>
                <ul>
                  <li>
                    <Link to="/">Case Study</Link>
                  </li>
                  <li>
                    <Link to="/">Latest News</Link>
                  </li>
                  <li>
                    <Link to="/">Help Center</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms & Condition</Link>
                  </li>
                </ul> */}
              </div>
            </div>
            {/* <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
              <div className="single-footer">
                <h3>Newsletter</h3>
                <p>Sign up now for weekly news & updates.</p>
                <div className="newsletter_form">
                  <form onSubmit={NewsletterHandler}>
                    <input type="email" placeholder="Email Address" />
                    <button type="submit">
                      <i className="fas fa-long-arrow-alt-right" />
                    </button>
                  </form>
                </div>
                <ul className="footer-social">
                  <li>
                    <Link to="/">
                      <i className="fab fa-pinterest-p" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
              <div className="single-footer" >
                
                <h3>Qucik Links</h3>
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    {/* <Link to="/">Our Projects</Link> */}
                  </li>
                  <li>
                    <Link to="/service">Our Services</Link>
                  </li>
                  <li>
                    {/* <Link to="/">Meet The Team</Link> */}
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

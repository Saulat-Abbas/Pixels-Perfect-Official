import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.gif";
import MobileMenu from "../../components/MobileMenu";

import "./style.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-inn">
            <div className="site-logo">
              <NavLink to="/" activeClassName="active-link">
                <img src={Logo} alt="" />
              </NavLink>
            </div>
            <div className="header-navigation">
              <div className="mainmenu">
                <nav id="menu">
                  <ul className="dropdown">
                    <li>
                      <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" activeClassName="active-link">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/service" activeClassName="active-link">Service</NavLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio" activeClassName="active-link">Portfolio</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-action">
                <NavLink to="/contact" className="header-btn">
                  <div className="icon-holder">
                    <i className="far fa-envelope"></i>
                  </div>
                  Get In Touch
                </NavLink>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  

  {
    id: 2,
    title: "About",
    link: "/about",
  },

  
  {
    id: 4,
    title: "Service",
    link: "/service",
   
  },
  {
    id: 71,
    title: "Portfolio",
    link: "/portfolio",
  },
 
  {
    id: 88,
    title: "Contact",
    link: "/contact",
  },
];

export default class  MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;
    return (
      <div className="responsiveMenu">
        <nav
          id="mobileMenu"
          className={`mobileMenu ${isMenuShow ? "active" : ""}`}
        >
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p
                      onClick={this.setIsOpen(item.id)}
                      aria-expanded={isMenuShow}
                    >
                      {item.title}
                      {item.submenu ? "" : ""}
                    </p>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}

                  {item.submenu ? (
                    <Collapse in={item.id === isOpen}>
                      <ul className="sub-menu">
                        {item.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link className="active" to={submenu.link}>
                              {submenu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`spinner-master ${isMenuShow ? "active" : ""}`}
          onClick={this.menuHandler}
        >
          <div id="spinner-form" className="spinner-spin">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

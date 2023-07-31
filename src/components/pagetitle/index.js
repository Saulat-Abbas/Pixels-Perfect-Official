import React from "react";
import { Link } from "react-router-dom";
// import bg from "../../img/breadcrumb-bg.jpg";

import "./style.css";
const PageTitle = (props) => {
  const bg = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/breadcrumb-bg.jpg?alt=media&token=ba82ae8b-8bb3-4771-aa37-ebf9a7e39756"
  return (
    <section
    className="breadcrumb-area"
    style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-social">
        <ul>
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
        <p>Follow Us</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-inn">
              <h1>{props.pageTitle}</h1>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;


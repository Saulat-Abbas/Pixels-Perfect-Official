import React from "react";

import Icon1 from "../../img/logo01-1.png";
import Icon2 from "../../img/logo02-1.png";
import Icon3 from "../../img/logo03-1.png";
import "./style.css";

const Feature = () => {

  const img1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/about-3.jpg?alt=media&token=deec33a5-22ae-41dd-9d2c-b33dc480b150"
  const img2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/about-4.jpg?alt=media&token=04aa1193-526d-4422-a9c7-4707f1340179 "

  return (
    <section className="about-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading text-center">
              <h3 className="sub-title">MODERN TRENDS OF LIVING</h3>
              <h2 className="section-title">
                We focused on modern
                <br /> architecture and interior design
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-left">
              <div className="single-about-listing">
                <div className="about-icon">
                  <img src={Icon1} alt="icon" />
                </div>
                <div className="about-text">
                  <h3>Design Approach</h3>
                  <p>
                    We combine innovative design practises with traditional
                    manufacturing techniques.
                  </p>
                </div>
              </div>
              <div
                className="single-about-listing wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="about-icon">
                  <img src={Icon2} alt="icon" />
                </div>
                <div className="about-text">
                  <h3>Innovative Solutions</h3>
                  <p>
                    Our core business is all about aligning our clients’ brands
                    and businesses.
                  </p>
                </div>
              </div>
              <div
                className="single-about-listing wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              >
                <div className="about-icon">
                  <img src={Icon3} alt="icon" />
                </div>
                <div className="about-text">
                  <h3>Project Management</h3>
                  <p>
                    As a full-service firm, Inteco is present on projects from
                    start to finish, ensuring the ideas conceived.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-right">
              <div className="single-about-image">
                <img src={img1} alt="img" />
              </div>
              <div className="single-about-image">
                <img src={img2} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Feature;

import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Team = () => {
  return (
    <section className="team-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="site-heading text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <h3 className="sub-title">TEAM MEMBERS</h3>
              <h2 className="section-title">Our Creative Minds</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <div className="team-meta">
                      <h4>Silon Michel</h4>
                      <p>Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <div className="team-meta">
                      <h4>Jhonny Jackman</h4>
                      <p>Art Director</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-team-box">
                  <div className="team-image">
                    <div className="team-meta">
                      <h4>Tyron</h4>
                      <p>Chief Architect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-5">
              <Link to="/team" className="cta-btn btn-fill">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;

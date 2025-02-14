import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    var settings = {
      dots: false,
      arrows: false,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };
const hero1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/hero-1.jpg?alt=media&token=145ba5d6-642d-4c97-a929-cfa50b10c60a"
const hero2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/hero-2.jpg?alt=media&token=840e6d85-5066-4d0d-9843-c88c19c3e305"
    return (
      <section className="hero-area">
        <div className="hero-social">
          <ul>
            
            <li>
              <a href="https://www.facebook.com/PxlPerfects/" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>

            </li>
           
          </ul>
          <p>Follow Us</p>
        </div>

        <div className="hero-slider">
          <div className="hero_arrows">
            <button className="button" onClick={this.previous}>
              <i className="fas fa-angle-left"></i>
            </button>
            <button className="button" onClick={this.next}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div className="slide">
              <div
                className="hero-slide-item"
                style={{ backgroundImage: `url(${hero1})` }}
              >
                <div className="container">
                  <div className="hero-text">
                    <h2>
                      Unique Architecture <br />
                      Design Ideas
                    </h2>
                    <div className="hero-action">
                      <Link to="/service"  className="cta-btn btn-fill">
                        Services
                      </Link>
                      <Link to="/contact" className="cta-btn btn-border">
                        Get Contact
                      </Link>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="hero-slide-item"
                style={{ backgroundImage: `url(${hero2})` }}
              >
                <div className="container">
                  <div className="hero-text">
                    <h2>
                      Unique Architecture <br />
                      Design Ideas
                    </h2>
                    <div className="hero-action">
                      <Link to="/projects" className="cta-btn btn-fill">
                        See Projects
                      </Link>
                      <Link to="/contact" className="cta-btn btn-border">
                        Get Contact
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </Slider>

        </div>
      </section>
    );
  }
}

export default Hero;

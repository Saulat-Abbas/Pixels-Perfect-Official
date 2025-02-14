import React from "react";
import { Link } from "react-router-dom";


import "./style.css";

const BlogSection = () => {
  
  const blog1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/news-1.jpg?alt=media&token=50c2b145-7a83-492b-acb7-33547ffbd176"
  const blog2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/news-2.png?alt=media&token=4b16771b-7bcc-45a0-ad83-98c8526ea1d1"

  return (
    <section className="latest-news-area" data-aos="fade-up" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading">
              <h3 className="sub-title">LATEST NEWS</h3>
              <h2 className="section-title">Thoughts on Things</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/blog-single" className="news-box news-box-margin">
              <div className="news-img">
                <img src={blog1} alt="img" />
              </div>
              <div className="news-text">
                <p className="news-date">Planning - 21.04.2020</p>
                <h3>Modern Architecture Buildings</h3>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/blog-single" className="news-box">
              <div className="news-img">
                <img src={blog2} alt="img" />
              </div>
              <div className="news-text">
                <p className="news-date">Planning - 18.04.2020</p>
                <h3>Luxurious And Ultra Modern Homes</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center news_more">
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

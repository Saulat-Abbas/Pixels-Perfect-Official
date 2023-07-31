import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Sidebar = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const Img1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/post-1.jpg?alt=media&token=febad0d1-fb26-435f-8141-c9413f8d3bda"
  const Img2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/post-2.jpg?alt=media&token=5b49663f-125d-4d70-8fb1-cc9a4e37d8b3"
  const Img3 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/post-3.jpg?alt=media&token=c45c4608-0a12-4e07-bb9d-f12043ab2b50"
  const Img4 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/post-4.jpg?alt=media&token=85913f11-46c5-4a87-9036-1466ca7b9f52"
  const Img5 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/post-5.jpg?alt=media&token=d2c826cc-edbe-45db-b0dc-d347057cf056"

  return (
    <div className="col-lg-4 col-md-5">
      <div className="blog-sidebar" data-aos="fade-up">
        <div className="blog-search-box">
          <form onSubmit={SubmitHandler}>
            <input type="search" placeholder="Search" />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
      <div className="blog-sidebar-categories" data-aos="fade-up">
        <div className="blog-sidebar-heading">
          <h3>Categories</h3>
        </div>
        <ul className="sidebar-content">
          <li>
            <Link to="/blog">
              Interior Design <span>12</span>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Architecture <span>08</span>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              House Planning <span>11</span>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              Painting <span>18</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="blog-sidebar-post" data-aos="fade-up">
        <div className="blog-sidebar-heading">
          <h3>Popular Post</h3>
        </div>
        <div className="sidebar-post-box" data-aos="fade-up">
          <div className="sidebar-post-img">
            <img src={Img1} alt="img" />
          </div>
          <div className="sidebar-post-text">
            <p>Jan 06 2021</p>
            <Link to="/blog-single">
              <h5>Modern extension to brick house</h5>
            </Link>
          </div>
        </div>
        <div className="sidebar-post-box">
          <div className="sidebar-post-img">
            <img src={Img2} alt="img" />
          </div>
          <div className="sidebar-post-text">
            <p>Jan 06 2021</p>
            <Link to="/blog-single">
              <h5>Modern Architectural Structures</h5>
            </Link>
          </div>
        </div>
        <div className="sidebar-post-box">
          <div className="sidebar-post-img">
            <img src={Img3} alt="img" />
          </div>
          <div className="sidebar-post-text">
            <p>Jan 06 2021</p>
            <Link to="/blog-single">
              <h5>Proin suscipit risus eu ullamcorper fauibu</h5>
            </Link>
          </div>
        </div>
        <div className="sidebar-post-box">
          <div className="sidebar-post-img">
            <img src={Img4} alt="img" />
          </div>
          <div className="sidebar-post-text">
            <p>Jan 06 2021</p>
            <Link to="/blog-single">
              <h5>Architecture potenti fringilla pretium</h5>
            </Link>
          </div>
        </div>
        <div className="sidebar-post-box">
          <div className="sidebar-post-img">
            <img src={Img5} alt="img" />
          </div>
          <div className="sidebar-post-text">
            <p>Jan 06 2021</p>
            <Link to="/blog-single">
              <h5>Modern Architecture Buildings</h5>
            </Link>
          </div>
        </div>
        <div className="siderbar-newslater" data-aos="fade-up">
          <div className="blog-sidebar-heading">
            <h3>Newsletter</h3>
          </div>
          <p>
            Enter your e-mail and subscribe to our newsletter. Sit amet of Lorem
            Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis
          </p>
          <form onSubmit={SubmitHandler}>
            <input type="email" placeholder="Email here" />
            <button type="submit">
              <i className="fa fa-paper-plane" />
            </button>
          </form>
        </div>
        <div className="sidebar-tags" data-aos="fade-up">
          <div className="blog-sidebar-heading">
            <h3>Tags</h3>
          </div>
          <ul>
            <li>
              <Link to="/blog">Interior</Link>
            </li>
            <li>
              <Link to="/blog">Painting</Link>
            </li>
            <li>
              <Link to="/blog">Constraction</Link>
            </li>
            <li>
              <Link to="/blog">Ingineering</Link>
            </li>
            <li>
              <Link to="/blog">Consultanty</Link>
            </li>
            <li>
              <Link to="/blog">Property</Link>
            </li>
            <li>
              <Link to="/blog">Swimming Pool</Link>
            </li>
            <li>
              <Link to="/blog">Garden</Link>
            </li>
            <li>
              <Link to="/blog">Furniture</Link>
            </li>
            <li>
              <Link to="/blog">Event</Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-gallery" data-aos="fade-up">
          <div className="blog-sidebar-heading">
            <h3>From Instagram</h3>
          </div>
          <ul>
            <li>
              <img src={Img1} alt="img" />
            </li>
            <li>
              <img src={Img2} alt="img" />
            </li>
            <li>
              <img src={Img3} alt="img" />
            </li>
            <li>
              <img src={Img4} alt="img" />
            </li>
            <li>
              <img src={Img5} alt="img" />
            </li>
            <li>
              <img src={Img1} alt="img" />
            </li>
            <li>
              <img src={Img2} alt="img" />
            </li>
            <li>
              <img src={Img3} alt="img" />
            </li>
            <li>
              <img src={Img4} alt="img" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

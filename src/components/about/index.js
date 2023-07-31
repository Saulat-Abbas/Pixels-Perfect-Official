import React from "react";
import CountUp from "react-countup";



import "./style.css";

const   About = () => {
  
  const img2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/about-2.png?alt=media&token=0eb61a4f-de18-4855-afe9-2e7c32367405"
  const img1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/about-1.jpg?alt=media&token=add1b6a1-3a79-4dd4-a6ed-07f335d6ce83"
  const bg = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/about-bg.jpg?alt=media&token=0e62e2ff-df54-47f2-8dde-52bb2b645537"
  const signature = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/signature.png?alt=media&token=b06d0a48-8a1a-4c77-921e-2de3180758b4"

  return (
    <section className="about-area" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
              <div className="site-heading">
                <h3 className="sub-title">ABOUT US</h3>
                <h2 className="section-title">
                  Strategy-led design in every detail
                </h2>
              </div>
              <p>
              Welcome to  <strong>Pixel Perfects!
                </strong><br></br>
At <strong>Pixel Perfects</strong>, we believe in the power of imagination and transformation. Our mission is to bring life to your spaces through virtual staging, renovation, and enhancement services. Whether you're a real estate agent, homeowner, or interior designer, we are here to elevate your property and make it stand out in the market.
              </p>
              <p>
              We look forward to hearing from you and discussing how our virtual staging, renovation, and enhancement services can add value to your projects. Feel free to reach out to us with any questions or inquiries – our team is ready to assist you every step of the way.
              </p>
              {/* <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" />
                </div>
                <div className="signature-right">
                  <h3>Robertho Garcia</h3>
                  <p>President</p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter">
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={105} duration={5} />
                  </span>
                </h2>
                <p>
                  Years of <br />
                  experience
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={436} duration={8} />
                  </span>
                  +
                </h2>
                <p>
                  Projects <br />
                  Completed
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={180} duration={5} />
                  </span>
                  +
                </h2>
                <p>
                  Awards <br />
                  Winning
                </p>
              </div>
            </div>
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} alt="img" />
              <img className="about_img_2" src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

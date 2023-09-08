import React from "react";
import { Link } from "react-router-dom";





import "./style.css";

const ServiceSection = () => {
  const serviceImg1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-bg-1.png?alt=media&token=70173d77-117b-44d9-b5e5-139a62289ade"
  const serviceImg2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-bg-2.png?alt=media&token=8b05003d-abd6-4cc2-84df-03cb6c2d9215"
  const serviceImg3 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-bg-3.jpg?alt=media&token=4c012a14-1d73-41c4-b9fd-15961584e432"
  const serviceImg4 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-bg-4.jpg?alt=media&token=a8152bb0-13ae-481c-a549-647c29085c93"
  const serviceImg5 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-bg-5.jpg?alt=media&token=9f826547-63fa-4d23-90d4-1b4b48681fda"
  const serviceImg6  = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-bg-6.jpg?alt=media&token=82a45ba2-4621-4318-ab37-4798868c8bd6"
  const serviceIcon1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-icon-1.png?alt=media&token=bfba3402-6d36-4ac5-86c7-c5bf3e548f6d"
  const serviceIcon2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-icon-2.png?alt=media&token=2d1b309f-32d3-4558-ac4e-244395be503a"
  const serviceIcon3 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-icon-3.png?alt=media&token=dfbef278-3442-4f08-b11f-3986d7af4217"
  const serviceIcon4 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-icon-4.png?alt=media&token=90b81a21-9091-46c6-9ca3-82cea559e96a"
  const serviceIcon5 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-icon-5.png?alt=media&token=2c830ceb-8684-4019-ba91-a7cd126a6e7a"
  const serviceIcon6 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-icon-6.png?alt=media&token=a7cbdde8-731f-427f-ba3b-ccfdba669469"
  return (
    <section className="service-area">
      <div className="container">
        <div className="row justify-content-center" style={{
          flexWrap: 'nowrap !important'
        }}>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon1} alt="img" />
              </div>
              <div className="service-text">
                <h3>Virtual Declutter</h3>
                <p>
                Digital decluttering: Organize files, reduce clutter, streamline digital environment for efficiency..                </p>
               
              </div>
              <img src={serviceImg1} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon2} alt="img" />
              </div>
              <div className="service-text">
                <h3>Image Enhancement</h3>
                <p>
                Improve image quality: brightness, contrast, color, sharpness, noise.
                </p>
              
              </div>
              <img src={serviceImg2} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon3} alt="img" />
              </div>
              <div className="service-text">
                <h3>Virtual Staging</h3>
                <p>
                  We develop the full cycle of project documentation &amp; full
                  details. Our clients satisfaction is most
                </p>
               
              </div>
              <img src={serviceImg3} alt="img" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon4} alt="img" />
              </div>
              <div className="service-text">
                <h3><a href="">Website Development</a></h3>
                <p>
                Website development for services involves creating a professional and user-friendly website that showcases the offered services, with tasks including coding, design, and content implementation to effectively promote and attract potential customers.
                </p>
                
              </div>
              <img src={serviceImg4} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon5} alt="img" />
              </div>
              <div className="service-text">
                <h3>Wordpress Designing</h3>
                <p>
                WordPress design services tailored to your needs. We create visually appealing and user-friendly websites using customized themes, plugins, and branding elements.
                </p>
             
              </div>
              <img src={serviceImg5} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon6} alt="img" />
              </div>
              <div className="service-text">
                <h3>Interior Design</h3>
                <p>
                We offer personalized interior design services, including space planning, color selection, furniture sourcing, lighting design, and project management, to create captivating and customized interiors that reflect our clients' unique style and preferences.
                </p>
            
              </div>
              <img src={serviceImg6} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;


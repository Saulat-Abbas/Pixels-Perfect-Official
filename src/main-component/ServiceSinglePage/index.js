import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import ImageSlider from '../../components/imageSlider';
import Footer from '../../components/footer';
import image1 from "../../img/slider-3.jpg";
import image2 from "../../img/slider-5.jpg";
import image3 from "../../img/slider-6.jpg";
import Testimonial from '../../components/testimonial';
import Pricing from '../../components/pricing';
import Partners from '../../components/partners';
import "./style.css"


const ServiceSinglePage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('service');
    window.scrollTo(0, 0);

    let pageTitle = '';
    let pageSub = '';
    let images = []; // Declare images array

    // Set the page title, subtitle, and images based on the type query parameter
    switch (type) {
        case 'Virtual-Duculator':
            pageTitle = 'Virtual Duculator';
            pageSub = 'Virtual Duculator Details';
            images = [image1, image2, image3];
            break;
        case 'Image-Enhancement':
            pageTitle = 'Image Enhancement';
            pageSub = 'Image Enhancement Details';
            images = [image2, image1, image3];
            break;
        case 'virtual-staging':
            pageTitle = 'Virtual Staging';
            pageSub = 'Virtual Staging Details';
            images = [image3, image1, image1];
            break
        case 'website-development':
            pageTitle = 'website development';
            pageSub = 'website development Details';
            images = [image3, image1, image1];
            break;
        case 'wordpress-designing':
            pageTitle = 'wordpress designing ';
            pageSub = 'wordpress designing Details';
            images = [image3, image1, image1];
            break;
        case 'interior-designing':
            pageTitle = 'interior designing';
            pageSub = 'interior designing';
            images = [image3, image1, image1];
            break;
        default:
            pageTitle = 'Service Details';
            pageSub = 'Service Details';
            break;
    }

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={pageTitle} pagesub={pageSub} />
            <div className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ImageSlider images={images} /> {/* Pass the images array as a prop to ImageSlider component */}
                            <Testimonial />
                            <Pricing />
                            <section className="pb-0">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="site-heading text-center" data-aos="fade-up">
                                                <h3 className="sub-title">CORPORATION</h3>
                                                <h2 className="section-title">OUR CLIENTS & PARTNERS</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Partners />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default ServiceSinglePage;

import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import ImageSlider from '../../components/imageSlider';
import Footer from '../../components/footer';
import staging1 from "../../img/staging-1.jpg";
import staging2 from "../../img/staging-2.jpg";
import staging3 from "../../img/staging-3.jpg";
import staging4 from "../../img/staging-4.jpg";
import staging5 from "../../img/staging-5.jpg";
import staging6 from "../../img/staging-6.jpg";
import decluter1 from "../../img/decluter-1.jpeg";
import decluter3 from "../../img/decluter-3.jpeg";
import decluter5 from "../../img/decluter-5.jpeg";
import decluter2 from "../../img/decluter-2.jpg";
import decluter4 from "../../img/decluter-4.jpg";
import decluter6 from "../../img/decluter-6.jpg";
import enhacment1 from "../../img/enhacment-1.jpg";
import enhacment2 from "../../img/enhacment-2.jpg";
import enhacment3 from "../../img/enhacment-3.jpg";
import enhacment4 from "../../img/enhacment-4.jpg";
import web1 from "../../img/web-1.jpg";
import web2 from "../../img/web-2.jpg";
import web3 from "../../img/web-3.jpg";
import word1 from "../../img/word-1.jpg";
import interior1 from "../../img/interior-1.jpg";
import interior2 from "../../img/interior-2.jpg";
import interior3 from "../../img/interior-3.jpg";
import interior4 from "../../img/interior-4.jpg";
import interior5 from "../../img/interior-5.jpg";
import interior6 from "../../img/interior-6.jpg";
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
    let pricing = []
    // Set the page title, subtitle, and images based on the type query parameter
    switch (type) {
        case 'Virtual-Duculator':
            pageTitle = 'Virtual Duculator';
            pageSub = 'Virtual Duculator Details';
            images = [decluter1, decluter2, decluter3, decluter4, decluter5, decluter6];
            pricing = [
                {
                    name: "Starter",
                    price: "$10",
                    details: [" I will remove all the existing furniture in Just $10 for each image"]
                },
                {
                    name: "Regular",
                    price: "$60",
                    details: [" I will remove all the existing furniture in Just $50 for 6 images"]

                },
                {
                    name: "Premium",
                    price: "$100",
                    details: ["I will remove all the existing furniture in Just $100 for 12 images"]

                },
            ]
            break;
        case 'Image-Enhancement':
            pageTitle = 'Image Enhancement';
            pageSub = 'Image Enhancement Details';
            images = [enhacment1, enhacment2, enhacment3, enhacment4];
            pricing = [
                {
                    name: "Starter",
                    price: "$2",
                    details: ["Blue Sky replacement, Boost color, Shadow Lift, Straighten & Crop, Sharpen Clarity.", "1 Image"]

                },
                {
                    name: "Regular",
                    price: "$20",
                    details: ["Blue Sky replacement, Boost color, Shadow Lift, Straighten & Crop, Object removing (3 Images)"]

                },
                {
                    name: "Premium",
                    price: "$25",
                    details: ["Basic Enhancement, Object removing  (8 Images), Your company Logo as watermark, Sharpen Clarity."]

                },
            ]
            break;
        case 'virtual-staging':
            pageTitle = 'Virtual Staging';
            pageSub = 'Virtual Staging Details';
            images = [staging1, staging2, staging3, staging4, staging5, staging6];
            pricing = [
                {
                    name: "Starter",
                    price: "$10",
                    details: ["I'll virtual stage your One image of your Room in Just $10"]

                },
                {
                    name: "Regular",
                    price: "$70",
                    details: ["I'll virtual stage your 8 image of your Vacant Room in Just $70"]

                },
                {
                    name: "Premium",
                    price: "$110",
                    details: ["I'll virtual stage your 12 image of your Vacant Room in Just $110"]

                },
            ]
            break;
        case 'website-development':
            pageTitle = 'Website Development';
            pageSub = 'Website Development Details';
            images = [web1, web2, web3];
            pricing = [
                {
                    name: "Starter",
                    price: "150",
                    details: ["detail 1", 'detail 2', 'detail 3']

                },
                {
                    name: "Regular",
                    price: "500",
                    details: ["detail 1", 'detail 2', 'detail 3']

                },
                {
                    name: "Premium",
                    price: "100",
                    details: ["detail 1", 'detail 2', 'detail 3']

                },
            ]
            break;
        case 'wordpress-designing':
            pageTitle = 'WordPress Designing';
            pageSub = 'WordPress Designing Details';
            images = [word1];
            pricing = [
                {
                    name: "Starter",
                    price: "$150",
                    details: ["detail 1", 'detail 2', 'detail 3']

                },
                {
                    name: "Regular",
                    price: "$500",
                    details: ["detail 1", 'detail 2', 'detail 3']

                },
                {
                    name: "Premium",
                    price: "$1000",
                    details: ["detail 1", 'detail 2', 'detail 3']

                },
            ]
            break;
        case 'Virtual-Renovation':
            pageTitle = 'Virtual-Renovation';
            pageSub = 'Virtual-Renovation Details';
            images = [interior1, interior2, interior3, interior4, interior5, interior6];
            pricing = [
                {
                    name: "Starter",
                    price: "$25",
                    details: ["Removing old furniture and then Replace with new Furniture, Paint walls, Change Floor in $25/Photo"]

                },
                {
                    name: "Regular",
                    price: "$140",
                    details: ["Removing old furniture and then Replace with new Furniture, Paint walls, Change Floor in $140/ 6 Photo"]

                },
                {
                    name: "Premium",
                    price: "100",
                    details: ["Removing old furniture and then Replace with new Furniture, Paint walls, Change Floor in $220/ 10 Photo"]

                },
            ]
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
                            <Pricing pricing={pricing}/>
                            <section className="pb-0">
                                {/* <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="site-heading text-center" data-aos="fade-up">
                                                <h3 className="sub-title">CORPORATION</h3>
                                                <h2 className="section-title">OUR CLIENTS & PARTNERS</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <Partners /> */}
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

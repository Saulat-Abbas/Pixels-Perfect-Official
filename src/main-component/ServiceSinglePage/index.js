import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header';
import PageTitle from '../../components/pagetitle';
import ImageSlider from '../../components/imageSlider';
import Footer from '../../components/footer';
import Testimonial from '../../components/testimonial';
import Pricing from '../../components/pricing';
import Partners from '../../components/partners';
import "./style.css"


const ServiceSinglePage = () => {
    const decluter1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/decluter-1.jpeg?alt=media&token=b78cc221-bb6d-4249-a940-0cb14214c4f5"
    const decluter2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/decluter-2.jpg?alt=media&token=c1633aec-3cd9-498c-b30f-ac24ce5fa094"
    const decluter3 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/decluter-3.jpeg?alt=media&token=c4c04e49-f5df-472e-af45-01b137452069"
    const decluter4 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/decluter-4.jpg?alt=media&token=60e51568-a514-461f-a324-bef53441bc43"
    const decluter5 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/decluter-5.jpeg?alt=media&token=c9ab91c3-fc2e-40a8-84d0-4da50cad1038"
    const decluter6 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/decluter-6.jpg?alt=media&token=fd7c22c7-a139-4b45-93dd-5610e23421ab"
    const enhacment1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/enhacment-1.jpg?alt=media&token=bcd5fb34-c65b-428a-af15-43c5d2cfe65c"
    const enhacment2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/enhacment-2.jpg?alt=media&token=dccf171d-040c-44ab-ba0b-4cc86aae4832"
    const enhacment3 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/enhacment-3.jpg?alt=media&token=34b958d4-b8ce-4c03-881f-23825dc2ade8"
    const enhacment4 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/enhacment-4.jpg?alt=media&token=0d0f2b33-a1df-4a22-900e-b89bd3ac5999"
    const interior1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/interior-1.jpg?alt=media&token=6c0f9d62-3cde-4e12-aba1-c74da535358c"
    const interior2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/interior-2.jpg?alt=media&token=a5531bdb-3776-4124-a3d4-9b371574a000"
    const interior3 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/interior-3.jpg?alt=media&token=cb0dd6da-d9dc-4c65-b73b-ecc56768b572"
    const interior4 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/interior-4.jpg?alt=media&token=b3b654c4-1a83-4a73-9d35-f7856328950e"
    const interior5 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/interior-5.jpg?alt=media&token=74a3d7d9-59d4-41fb-b1cc-d56504404897"
    const interior6 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/interior-6.jpg?alt=media&token=176b37b2-a242-41d4-b224-322017d85dcf"
    const staging1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/staging-1.jpg?alt=media&token=cdc29a90-90b6-49e7-9935-e8d7d012f7a7"
    const staging2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/staging-2.jpg?alt=media&token=36324d4e-af8a-4658-bb99-6d26b781acaf"
    const staging3 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/staging-3.jpg?alt=media&token=047a2b97-88e1-48b8-a8d9-d10d157e482d"
    const staging4 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/staging-4.jpg?alt=media&token=d3d28c65-cfe8-4f29-afce-40fa6b417ba9"
    const staging5 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/staging-5.jpg?alt=media&token=7c8602ff-e1c0-4c86-9b3a-2f1d0650eedd"
    const staging6 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/staging-6.jpg?alt=media&token=2da9843d-7a5e-4311-8b47-5bb312a835a2"
    const web1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/web-1.jpg?alt=media&token=76e0e991-c8f9-4427-85fd-504f88c8ffb8"
    const web2 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/web-2.jpg?alt=media&token=124b5cb6-3e68-4d9c-9899-5163bdeb97bb"
    const web3 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/web-3.jpg?alt=media&token=df660f7e-9f16-4409-931f-16c1da8f751f"
    const word1 = "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/word-1.jpg?alt=media&token=ae8d22d2-d968-42ce-a01a-e37db3340516"



    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('service');
    window.scrollTo(0, 0);

    let pageTitle = '';
    let pageSub = '';
    let images = []; // Declare images array
    let pricing = [];
    let description = ""
    // Set the page title, subtitle, and images based on the type query parameter
    switch (type) {
        case 'Virtual-Duculator':
            pageTitle = 'Virtual Duculator';
            pageSub = 'Virtual Duculator Details';
            images = [decluter1, decluter2, decluter3, decluter4, decluter5, decluter6];
            description = "Virtual Duculator is an innovative digital tool that transforms the way calculations are conducted. Combining cutting-edge technology with user-friendly design, it offers a virtual calculator experience that transcends traditional methods. Virtual Duculator's intuitive interface allows users to perform a wide range of calculations, from basic arithmetic to advanced mathematical operations, all within a digital environment. Its 24/7 availability ensures instant access whenever needed, while data security measures prioritize privacy. Virtual Duculator is a versatile solution that suits students, professionals, and anyone seeking accurate and efficient computations, redefining the concept of digital calculators."
            pricing = [
                {
                    name: "Starter",
                    price: 10,
                    details: [" I will remove all the existing furniture in Just $10 for each image", "1 revision"],
                },
                {
                    name: "Regular",
                    price: 50,
                    details: [" I will remove all the existing furniture in Just $50 for 6 images", "2 revison "],
                    time: "15"

                },
                {
                    name: "Premium",
                    price: 100,
                    details: ["I will remove all the existing furniture in Just $100 for 12 images", "3 revison "],
                    time: "25"

                },
            ]
            break;
        case 'Image-Enhancement':
            pageTitle = 'Image Enhancement';
            pageSub = 'Image Enhancement Details';
            images = [enhacment1, enhacment2, enhacment3, enhacment4];
            description = "Image enhancement refers to the process of improving the visual quality of a photograph or image through various techniques and technologies. It aims to make images more visually appealing, clear, and detailed by adjusting attributes such as brightness, contrast, color balance, sharpness, and removing unwanted elements or imperfections. Image enhancement can be applied for various purposes, including improving the visual impact of photographs, enhancing the clarity of details, and making images more suitable for specific applications such as printing, publishing, or digital display. This process can involve manual adjustments using software tools or automated algorithms to achieve desired outcomes while maintaining the integrity of the original content."
            pricing = [
                {
                    name: "Starter",
                    price: 1,
                    details: ["Blue Sky replacement, Boost color, Shadow Lift, Straighten & Crop, Sharpen Clarity.", "1 revision "]

                },
                {
                    name: "Regular",
                    price: 20,
                    details: ["Blue Sky replacement, Boost color, Shadow Lift, Straighten & Crop, Object removing (25 Images)", "2 revison "],
                    time: "15"

                },
                {
                    name: "Premium",
                    price: 25,
                    details: ["Basic Enhancement, Object removing  (35 Images), Your company Logo as watermark, Sharpen Clarity.", "3 revision "],
                    time: "25"

                },
            ]
            break;
        case 'virtual-staging':
            pageTitle = 'Virtual Staging';
            pageSub = 'Virtual Staging Details';
            images = [staging1, staging2, staging3, staging4, staging5, staging6];
            description = "Virtual staging is a modern real estate technique where software is used to digitally furnish and decorate vacant or minimally furnished rooms in property photographs. By adding virtual furniture and design elements, it creates visually engaging images that help potential buyers envision the full potential of a space. This cost-effective approach allows for customization of styles, layouts, and decor, while also enabling quick turnaround for property listings. However, it's important to transparently communicate that these images are digitally enhanced for marketing purposes to set accurate expectations for potential buyers or renters.  "
            pricing = [
                {
                    name: "Starter",
                    price: 10,
                    details: ["I'll virtual stage your One image of your Room in Just $10", "1 Revision", ""]

                },
                {
                    name: "Regular",
                    price: 70,
                    details: ["I'll virtual stage your 8 image of your Vacant Room in Just $70", "2 Revision ", "2 Days Dalivery "],
                    time: "15"

                },
                {
                    name: "Premium",
                    price: 100,
                    details: ["I'll virtual stage your 12 image of your Vacant Room in Just $100", "3 Revision ", "3 Days Dalivery"],
                    time: "25"

                },
            ]
            break;
        case 'website-development':
            pageTitle = 'Website Development';
            pageSub = 'Website Development Details';
            images = [web1, web2, web3];
            description = "Website development involves designing, creating, and maintaining websites to ensure they are functional, visually appealing, and user-friendly. It encompasses various aspects such as front-end development, which focuses on the user interface and design, and back-end development, which involves the server-side functionality and databases. Website developers use programming languages like HTML, CSS, JavaScript, and backend languages (e.g., PHP, Python, Ruby) to build dynamic and interactive websites. They also integrate features like navigation, forms, multimedia, e-commerce, and responsive design for optimal performance across different devices. The goal is to deliver websites that meet specific requirements, engage users, and provide a seamless browsing experience."
            pricing = [
                {
                    name: "Starter",
                    price: 500,
                    details: ["I will develop a single page Frontend website (Static)."]

                },
                {
                    name: "Regular",
                    price: 700,
                    details: ["3 pages Frontend application"]

                },
                {
                    name: "Premium",
                    price: 1000,
                    details: ["Complete Website, up to 5 pages with frontend and backend."]

                },
            ]
            break;
        case 'wordpress-designing':
            pageTitle = 'WordPress Designing';
            pageSub = 'WordPress Designing Details';
            images = [word1];
            description = "WordPress designing encompasses the creation and customization of websites using the WordPress platform. It involves selecting themes, layouts, and plugins to build websites tailored to specific needs. WordPress's user-friendly interface allows for seamless content management, from text and images to interactive elements. Designers can leverage pre-designed themes or create unique layouts, ensuring responsive and visually appealing sites. With its vast community and extensive resources, WordPress is a powerful tool for crafting websites ranging from blogs and portfolios to e-commerce stores and corporate sites."
            pricing = [
                {
                    name: "Starter",
                    price: 150,
                    details: [" Elegant Design", " Domain & Hosting Setup Support ", " 5 Sections Design"]

                },
                {
                    name: "Regular",
                    price: 250,
                    details: [" Custom Design", " Booking", " Appointment", "Event", " Payment Integration ", "GTMetrix score upto 80%"]

                },
                {
                    name: "Premium",
                    price: 350,
                    details: [" Business Plan inc", "Membership Features", "Mailchimp Setup", " Page Speed 80% - 90%"]

                },
            ]
            break;
        case 'Virtual-Renovation':
            pageTitle = 'Virtual Renovation';
            pageSub = 'Virtual-Renovation Details';
            images = [interior1, interior2, interior3, interior4, interior5, interior6];
            description = "Virtual renovation refers to the digital transformation of real estate property images to showcase potential renovations, improvements, or updates. Through specialized software, virtual renovation allows visual enhancements like new paint colors, flooring materials, fixtures, and furniture placements to be added to existing images. This technique helps potential buyers or renters envision the possibilities for a property, whether it's a vacant space or a property in need of updates. Virtual renovation can be a cost-effective way to demonstrate the potential of a space without physically making changes. However, it's important to transparently communicate that the images represent a virtual concept and not the current state of the property."
            pricing = [
                {
                    name: "Starter",
                    price: 25,
                    details: ["Removing old furniture and then Replace with new Furniture, Paint walls, Change Floor in $25/Photo", "1 Revision "]

                },
                {
                    name: "Regular",
                    price: 140,
                    details: ["Removing old furniture and then Replace with new Furniture, Paint walls, Change Floor in $140/ 6 Photo", "2 Revision "],
                    time: "30"

                },
                {
                    name: "Premium",
                    price: 220,
                    details: ["Removing old furniture and then Replace with new Furniture, Paint walls, Change Floor in $220/ 10 Photo", "3 Revision "],
                    time: "50"

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
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 image-slider">
                            <ImageSlider images={images} />
                        </div>
                        <div class="col-lg-6 pricing">
                            <Pricing pricing={pricing} />
                        </div>
                        <div class="row">
                            <div className="about-left" style={{marginBottom:"100px", marginLeft:"2px"}}>
                                    <h1 class="col-lg-12 sub-title">
                                    {pageSub}
                                    </h1>
                                <p className=''>
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </Fragment>
    );
};

export default ServiceSinglePage;

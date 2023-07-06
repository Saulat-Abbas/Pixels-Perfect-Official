import React, { useState } from 'react';
import './style.css';
import image1 from "../../img/slider-3.jpg";
import image2 from "../../img/slider-5.jpg";
import image3 from "../../img/slider-6.jpg";


const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [image1, image2, image3];

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
    
        
        <div className="slider-container">



            <div className="slider">
            <h1 className="sub-title">PROJECTS</h1>
                <img src={images[currentSlide]} alt={`Image ${currentSlide + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <button onClick={handlePrevSlide} className="slider-button prev-button">
                    <span className="button-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#B78D65" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>
                    </span>
                </button>
                <button onClick={handleNextSlide} className="slider-button next-button">
                    <span className="button-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#B78D65" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
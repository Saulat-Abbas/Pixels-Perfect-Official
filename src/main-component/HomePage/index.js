import React, {Fragment} from 'react';
import Header from '../../components/header'
import Hero from '../../components/hero'
import About from '../../components/about'
import ServiceSection from '../../components/ServiceSection'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'



const HomePage =() => {
    return(
        <Fragment>
            <Header/>
            <Hero/>
            <About/>
            <ServiceSection/>
            <BlogSection/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage;


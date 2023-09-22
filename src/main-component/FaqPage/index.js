import React, {Fragment} from 'react'
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'

const FaqPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'FAQ'} pagesub={'Faq'}/>
            <Footer/>
        </Fragment>
    )
};
export default FaqPage;


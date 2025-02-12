import React, { Fragment } from "react";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import ServiceSection from "../../components/ServiceSection";

const ServicePage = () => {
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"SERVICE"} pagesub={"Service"} />
      <ServiceSection />
      <Footer />
    </Fragment>
  );
};
export default ServicePage;

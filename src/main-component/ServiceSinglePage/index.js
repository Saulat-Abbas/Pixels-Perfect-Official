import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header";
import PageTitle from "../../components/pagetitle";
import ImageSlider from "../../components/imageSlider";
import Footer from "../../components/footer";
import Pricing from "../../components/pricing";
import { handleServiceData } from "./ServiceData";
import "./style.css";

const ServiceSinglePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("service");
  const [serviceData, setServiceData] = useState(null);
  window.scrollTo(0, 0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await handleServiceData(type);
      setServiceData(data);
    };

    fetchData();
  }, [type]);

  if (!serviceData) {
    return null;
  }

  return (
    <Fragment>
      <Header />
      <PageTitle
        pageTitle={serviceData.pageTitle}
        pagesub={serviceData.pageSub}
      />
      <div className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 image-slider">
              <ImageSlider images={serviceData.images} />
            </div>
            <div className="col-lg-6 pricing">
              <Pricing
                pricing={serviceData.pricing}
                pageTitle={serviceData.pageTitle}
              />
            </div>
            <div className="row">
              <div
                className="about-left"
                style={{ marginBottom: "100px", marginLeft: "2px" }}
              >
                <h1 className="col-lg-12 sub-title">{serviceData.pageSub}</h1>
                <p className="">{serviceData.description}</p>
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

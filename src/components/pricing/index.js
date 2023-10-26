import React, { useState } from "react";
import "./style.css";
import PricingActionModal from "./PricingActionModal";
import { Button as MuiButton } from "@mui/material";
import { Tabs, Tab, Paper } from "@mui/material";

const Pricing = ({ pricing, pageTitle }) => {

  const [pricingModalData, setPricingModalData] = useState(null);

  const [showModal, setShowModal] = useState(false);


  const handleShowModal = (priceData) => {
    setPricingModalData({ priceData, pageTitle });
    setShowModal(true);
  };


  const handleCloseModal = () => setShowModal(false);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div>
        <div>
          <div></div>
        </div>
        <div>
          <div className="col-md-6" style={{ width: "100%", height: "100%" }}>
            {" "}
           
            <Paper elevation={3} className="pricing-box" data-aos="fade-up">
              <div className="site-heading" data-aos="fade-up">
                <h2 className="section-title" style={{ textAlign: "center" }}>
                  Packages
                </h2>
              </div>
              <Tabs
                value={value} 
                onChange={handleChange} 
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                style={{ marginBottom: "20px", color: "black" }}
              >
                {pricing?.map((priceData, index) => (
                  <Tab key={index} label={priceData.name} />
                ))}
              </Tabs>

              {pricing?.map((priceData, index) => (
                <div key={index} hidden={value !== index}>
                  <div className="pricing-header">
                    <h3>{priceData.name}</h3>
                    <div className="price">${priceData.price}</div>
                  </div>
                  <div
                    className="pricing-content"
                    style={{ marginBottom: "20px" }}
                  >
                    <ul>
                      {priceData.details?.map((detailData, index) => (
                        <li key={index}>
                          <p>
                            <i className="fa fa-arrow-circle-right" />
                            {detailData}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mui-button">
                    <MuiButton
                      variant="contained"
                      style={{
                        backgroundColor: "#B78D65",
                        color: "white",
                        marginBottom: "2px",
                      }}
                      onClick={() => handleShowModal(priceData)}
                    >
                      Proceed to Checkout
                    </MuiButton>
                  </div>
                </div>
              ))}
            </Paper>
          </div>
        </div>
      </div>

      {pricingModalData && (
        <PricingActionModal
          show={showModal}
          handleClose={handleCloseModal}
          pricingModalData={pricingModalData}
        />
      )}
    </section>
  );
};

export default Pricing;

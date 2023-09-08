import React, { useState } from "react";
import "./style.css";
import PricingActionModal from "./PricingActionModal";
import { Button as MuiButton, colors } from "@mui/material";
import { Tabs, Tab, Paper } from "@mui/material";


const Pricing = ({ pricing }) => {
  const pricingBG =
    "https://firebasestorage.googleapis.com/v0/b/pixel-perfects.appspot.com/o/service-cost-bg.jpg?alt=media&token=36ba7e12-c9c5-490a-800c-c2dbd5020846";

  // State to store the pricing data for the modal
  const [pricingModalData, setPricingModalData] = useState(null);

  // State to manage the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to show the modal and set the pricing data for the modal
  const handleShowModal = (priceData) => {
    setPricingModalData(priceData);
    setShowModal(true);
  };

  // Function to hide the modal
  const handleCloseModal = () => setShowModal(false);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section >
      <div >
        <div >
          <div>
          </div>
        </div>
        <div >
          <div className="col-md-6" style={{ width: "100%", height: "100%" }}> {/* Adjust the column width as needed */}
            <Paper elevation={3} className="pricing-box" data-aos="fade-up">
            <div className="site-heading" data-aos="fade-up">
              <h2 className="section-title" style={{textAlign:"center"}}>Packages</h2>
            </div>
              <Tabs
                value={value} // Set the active tab value
                onChange={handleChange} // Handle tab change
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
                  <div className="pricing-content" style={{ marginBottom: "20px" }}>
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
                        backgroundColor: "#B78D65", color: "white",
                        marginBottom: "2px"
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
          pricingData={pricingModalData}
        />
      )}
    </section>
  );
};

export default Pricing;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./style.css";
import PricingActionModal from "./PricingActionModal";
import { Button as MuiButton } from "@mui/material";

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

  return (
    <section
      className="pricing-area"
      style={{ backgroundImage: `url(${pricingBG})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="site-heading" data-aos="fade-up">
              <h3 className="sub-title">PRICING</h3>
              <h2 className="section-title">SERVICING COST</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {pricing?.map((priceData, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="pricing-box" data-aos="fade-up">
                <div className="pricing-header">
                  <h3>{priceData.name}</h3>
                  <div className="price">${priceData.price}</div>
                </div>
                <div className="pricing-content">
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
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {/* Button to trigger the modal */}
        <MuiButton
                    variant="contained"
                    style={{ backgroundColor: "#B78D65", color: "white" }}
                    onClick={() => handleShowModal(priceData)}
                  >
                    Proceed to Checkout
                  </MuiButton>
      </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render the PricingActionModal component with pricing data */}
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

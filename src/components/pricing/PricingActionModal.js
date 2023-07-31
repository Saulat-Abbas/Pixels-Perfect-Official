import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { ShowChart } from '@mui/icons-material';

import "./pricingActionmodal.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PricingActionModal = ({ show, handleClose, pricingData }) => {
  const [imageQuantity, setImageQuantity] = useState(1);

  {/* State to manage the quantity of revisions */}
 const [revisionQuantity, setRevisionQuantity] = useState(1);
 
  {/* useEffect to set initial values for imageQuantity and revisionQuantity */}
 useEffect(() => {
   setImageQuantity(pricingData.details[0]);
   setRevisionQuantity(pricingData.details[1]);
 }, [pricingData]);
 
  {/* Function to increase the image quantity */}
 const handleImageIncrement = () => {
   setImageQuantity((prevQuantity) => prevQuantity + 1);
 };
 
  {/* Function to decrease the image quantity */}
 const handleImageDecrement = () => {
   setImageQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
 };
 
  {/* Function to increase the revision quantity */}
 const handleRevisionIncrement = () => {
   setRevisionQuantity((prevQuantity) => prevQuantity + 1);
 };
 
  {/* Function to decrease the revision quantity */}
 const handleRevisionDecrement = () => {
   setRevisionQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
 };
 
  {/* Calculate the total price by multiplying price and quantity */}
 const imagePrice = pricingData.price[0] * imageQuantity;
 const revisionPrice = pricingData.price[1] * revisionQuantity;
 const totalPrice = imagePrice + revisionPrice;
  const list = () => (
    <Box
      sx={{ width:" 400px" }}
      role="presentation"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
     <div className="pricing-box pricing-area">
          <div className="pricing-header"></div>
          <h5 className="section-title">Details:</h5>
          <ul className="pricing-content pricing-modal-details">
            {pricingData.details.map((detail, index) => (
              <li key={index}>
                <p>
                  <i className="pricing-action">&#9679;</i>
                  {detail}
                </p>
              </li>
            ))}
          </ul>
          <div className="counter">
            <div className="counter-section">
              <h5>No of Images:</h5>
              <button className="pricing-action" onClick={handleImageDecrement}>
                -
              </button>
              <span>{imageQuantity}</span>
              <button className="pricing-action" onClick={handleImageIncrement}>
                +
              </button>
            </div>
            <div className="counter-section">
              <h5>No of Revisions:</h5>
              <button
                className="pricing-action"
                onClick={handleRevisionDecrement}
              >
                -
              </button>
              <span>{revisionQuantity}</span>
              <button
                className="pricing-action"
                onClick={handleRevisionIncrement}
              >
                +
              </button>
            </div>
          </div>
          </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open={show}
        onClose={handleClose}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}

export default PricingActionModal;

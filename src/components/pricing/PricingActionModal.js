import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import './pricingActionmodal.css';

const PricingActionModal = ({ show, handleClose, pricingData }) => {
  const [imageQuantity, setImageQuantity] = useState(1);
  const [revisionQuantity, setRevisionQuantity] = useState(1);

  useEffect(() => {
    setImageQuantity(1);
    setRevisionQuantity(1);
  }, []);

  const handleImageIncrement = () => {
    setImageQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleImageDecrement = () => {
    setImageQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleRevisionIncrement = () => {
    setRevisionQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRevisionDecrement = () => {
    setRevisionQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const imagePrice = pricingData.price[0] * imageQuantity;
  const revisionPrice = pricingData.price[1] * revisionQuantity;
  const totalPrice = imagePrice + revisionPrice;

  const list = () => (
    <Box sx={{ width: '400px' }} role="presentation">
      <div className="pricing-box pricing-area">
        <div className="pricing-header">
          <h2 className="section-title" style={{ fontSize: '30px' }}>
            Pricing Details:
          </h2>
        </div>
        <div>
          <ul className="pricing-content pricing-modal-details">
            {pricingData.details.map((detail, index) => (
              <li key={index}>
                <p style={{ color: 'black' }}>
                  <i className="pricing-action">&#9679;</i>
                  {detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="counter">
          <div className="counter-section">
            <h4 className="heading">No of images</h4>
            <div className="counter-buttons">
              <Button
                onClick={handleImageDecrement}
                variant="contained"
                color="secondary"
                startIcon={<RemoveCircleOutlineIcon />}
              />
              <span style={{ color: 'black', margin: '0 10px' }}>{imageQuantity}</span>
              <Button
                onClick={handleImageIncrement}
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
              />
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="counter-section">
            <h4 className="heading">No of revisions</h4>
            <div className="counter-buttons">
              <Button
                onClick={handleRevisionDecrement}
                variant="contained"
                color="secondary"
                startIcon={<RemoveCircleOutlineIcon />}
              />
              <span style={{ color: 'black', margin: '0 10px' }}>{revisionQuantity}</span>
              <Button
                onClick={handleRevisionIncrement}
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutlineIcon />}
              />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2 style={{ fontSize: '20px', marginRight: '10px' }}>Extra Fast Delivery:</h2>
          <input type="checkbox" name="extraFastDelivery" id="extraFastDelivery" style={{ height: '20px', marginRight: '5px' }} />
        </div>
        <div className="checkout-footer">
          <p>Total Price: ${totalPrice}</p>
          <Button variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={show} onClose={handleClose}>
        {list('right')}
      </Drawer>
    </div>
  );
};

export default PricingActionModal;

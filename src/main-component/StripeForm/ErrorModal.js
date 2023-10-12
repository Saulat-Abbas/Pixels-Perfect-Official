// ErrorModal.js
import React, { useState } from "react";
import { Modal, Typography, Button } from "@mui/material";
import "./ErrorModal.css"; 

const ErrorModal = ({ open, onClose, errorMessage }) => {
  const [broken, setBroken] = useState(false);

  const handleClose = () => {
    setBroken(true);
    setTimeout(() => {
      onClose();
    }, 300); 
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={`error-modal ${broken ? "broken" : ""}`} 
    >
      <div className="modal-content">
        <i className="fas fa-exclamation-circle fa-2x text-danger mb-3"></i>

        <Typography variant="h6" style={{ marginBottom: "20px" }}>
          O Shit, It's Error !!
        </Typography>
        <div className="modal-inner-content">
          <p className="modal-text">
            An error has occurred due to something wrong.
          </p>
          <Typography variant="body1">{errorMessage}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            style={{ width: "100%", marginTop: "20px" }}
          >
            Dismiss
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;

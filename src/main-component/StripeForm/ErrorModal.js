import React from "react";
import { Modal, Typography, Button } from "@mui/material";

const ErrorModal = ({ open, onClose, errorMessage }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          outline: "none",
          textAlign: "center",
          width: "90%",
          maxWidth: "400px",
          maxHeight: "80vh",
        }}
      >
        <Typography variant="h6">Error</Typography>
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
            outline: "none",
            textAlign: "center",
            width: "90%",
            maxWidth: "400px",
            maxHeight: "80vh",
          }}
        >
          <Typography variant="body1">{errorMessage}</Typography>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorModal;

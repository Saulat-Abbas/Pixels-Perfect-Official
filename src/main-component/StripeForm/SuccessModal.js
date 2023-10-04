import React from "react";
import { Modal, Typography, Button } from "@mui/material";
import { CheckCircleOutlineRounded } from "@mui/icons-material";

const SuccessModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
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
        <CheckCircleOutlineRounded style={{ fontSize: 80, color: "green" }} />
        <Typography variant="h6">Thank You!</Typography>
        <Typography>Your payment was successful.</Typography>
        <Typography textAlign={"left"} variant="h6">
          Dear Customer....!
        </Typography>
        <Typography textAlign={"left"}>
          Thank you for your payment and for completing the form. Your support
          is valued.
        </Typography>
        <Typography textAlign={"left"}>
          We will be in touch soon via email. Please contact us at{" "}
          <strong>
            <i>info@Pxlperfects.com</i>
          </strong>
          .
        </Typography>
        <Typography>
          <b>Best regards:</b>
        </Typography>
        <Typography>
          <b>Pxlperfects Team</b>
        </Typography>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default SuccessModal;

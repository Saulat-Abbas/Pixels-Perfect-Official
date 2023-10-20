import React from "react";
import { Modal, Paper, Button } from "@mui/material";
import InvoicePDF from "./Invoicepdf";
import "./SuccessModal.css";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import CloseIcon from "@mui/icons-material/Close";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function printInvoice() {
  window.print();
}

function downloadInvoice() {
  const anchor = document.createElement("a");
  anchor.href = "path_to_invoice.pdf";
  anchor.download = "invoice.pdf";
  anchor.click();
}

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
      <Paper
        elevation={3}
        sx={{
          width: "50vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          justifyContent: "center", 
          alignItems: "center", 
        }}
      >
      
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div style={{ fontSize: "24px", color: "green" }}>
            <i
              className="fas fa-check-circle"
              style={{ marginRight: "10px" }}
            ></i>
            Thank you for your business
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <InvoicePDF />
        </div>
        <div>
          <button class="button"  style={{color:"red"}} onClick={onClose}><CloseIcon/>Close </button>
          <button class="button" onClick={downloadInvoice}><FileDownloadIcon/>Download </button>
          <button class="button"  onClick={printInvoice}><LocalPrintshopIcon/>Print </button>
        </div>
      </Paper>
    </Modal>
  );
};

export default SuccessModal;

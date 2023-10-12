import React from "react";
import { Modal, Typography, Button,Paper } from "@mui/material";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import InvoicePDF from "./Invoicepdf";


function printInvoice(){
  window.print();
}
function downloadInvoice() {
  // Create an anchor element
  const anchor = document.createElement("a");

  // Set the href attribute to the URL of the file you want to download
  anchor.href = "path_to_invoice.pdf"; // Replace with the actual path to your PDF file

  // Set the download attribute to specify the default file name
  anchor.download = "invoice.pdf"; // You can change the file name if needed

  // Programmatically click the anchor element to trigger the download
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
        // maxWidth: "800px",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
        
      {/* InvoicePDF Component */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <InvoicePDF />
      </div>

      {/* Close Button */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained" className="invoice-btn" onClick={printInvoice}>
         Print
        </Button>
        <Button variant="contained" className="download-btn" onClick={downloadInvoice}>
          Download
        </Button>
      </div>
    </Paper>
  </Modal>
  );
};

export default SuccessModal;

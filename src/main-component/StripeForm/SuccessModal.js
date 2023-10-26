import React from "react";
import { Modal, Paper } from "@mui/material";
import InvoicePDF from "./Invoicepdf";
import "./SuccessModal.css";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function printInvoice() {
  window.print();
}

const SuccessModal = ({ open, onClose }) => {
  const generatePDF = () => {
    const input = document.getElementById("invoice-container");

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);
      pdf.save("invoice.pdf");
    });
  };

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
          height: "95vh",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div style={{ fontSize: "24px", color: "green" }}>
            <i className="fas fa-check-circle" style={{ marginRight: "10px" }}></i>
            Thank you for your business
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", width: "100%" }}>
          <InvoicePDF style={{ width: "50%" }} />
        </div>
        <div>
          <button className="button" style={{ color: "red" }} onClick={onClose}>
            <CloseIcon />
            Close
          </button>
          <button className="button" onClick={printInvoice}>
            <LocalPrintshopIcon />
            Print
          </button>
          <button className="button" onClick={generatePDF}>
          <PictureAsPdfIcon/>
            Download PDF 
          </button>
        </div>
      </Paper>
    </Modal>
  );
};

export default SuccessModal;

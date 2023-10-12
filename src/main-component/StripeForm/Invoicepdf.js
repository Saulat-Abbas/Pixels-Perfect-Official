import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Invoicepdf.css";
import Logo from "../../img/logo.gif";

const InvoicePDF = ({ InvoiceData }) => {
  const generatePDF = () => {
    const input = document.getElementById("invoice-container");

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);
      pdf.save("invoice.pdf");
    });
  };
  function printInvoice() {
    window.print();
  }
  const currentDate = new Date().toLocaleDateString();
  const invoiceData = [
    {
      description: "Item 1",
      quantity: 2,
      unitPrice: 10.99,
    },
    {
      description: "Item 2",
      quantity: 3,
      unitPrice: 15.99,
    },
    // Add more items as needed
  ];
  const InvoicePDF = ({ invoiceData }) => {
    if (!invoiceData || invoiceData.length === 0) {
      return <p>No invoice data available.</p>;
    }

    // The rest of your component code
  };
  <InvoicePDF invoiceData={invoiceData} />;
  // Helper function to calculate subtotal
  const calculateSubtotal = (items) => {
    return items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
  };

  // Helper function to calculate total
  const calculateTotal = (items) => {
    const subtotal = calculateSubtotal(items);
    const tax = subtotal * 0.1; // Assuming 10% tax rate
    return subtotal + tax;
  };
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
  const generateInvoiceNumber = () => {
    return Math.floor(Math.random() * 10000);
  };

  return (
    <div class="invoice-wrapper" id="print-area">
      <div class="invoice">
        <div id="invoice-container" class="invoice-container">
          <div class="invoice-head">
            <div class="invoice-head-top">
              <div class="invoice-head-top-left text-start">
                <img src={Logo} alt="" />
              </div>
              <div class="invoice-head-top-right text-end">
                <h3>Invoice</h3>
              </div>
              <div>
                <h2>Pxl Perfects</h2>
              </div>
            </div>
            <div class="hr"></div>
            <div class="invoice-head-middle">
              <div class="invoice-head-middle-left text-start">
                <p>
                  <span class="text-bold">Date</span>: {currentDate}
                </p>
              </div>
              <div class="invoice-head-middle-right text-end">
                <p>
                  <span f class="text-bold">
                    Invoice No:
                  </span>
                  {generateInvoiceNumber}
                </p>
              </div>
            </div>
            <div class="hr"></div>
            <div class="invoice-head-bottom">
              <div class="invoice-head-bottom-left">
                <ul>
                  <li class="text-bold">Invoiced To:</li>
                  <li>Smith Rhodes</li>
                  <li>15 Hodges Mews, High Wycombe</li>
                  <li>HP12 3JL</li>
                  <li>United Kingdom</li>
                </ul>
              </div>
              <div class="invoice-head-bottom-right">
                <ul class="text-end">
                  <li class="text-bold">Pay To:</li>
                  <li>Pxlperfects.</li>
                  <li>30 N Gould Street,</li>
                  <li>Sheridan, Wyoming, USA.</li>
                  <li>info@Pxlperfects.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="overflow-view">
            <div class="invoice-body">
              <table>
                <thead>
                  <tr>
                    <td class="text-bold">Service</td>
                    <td class="text-bold">Description</td>
                    <td class="text-bold">Rate</td>
                    <td class="text-bold">QTY</td>
                    <td class="text-bold">Amount</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Design</td>
                    <td>Creating a website design</td>
                    <td>$50.00</td>
                    <td>10</td>
                    <td class="text-end">$500.00</td>
                  </tr>
                  <tr>
                    <td>Development</td>
                    <td>Website Development</td>
                    <td>$50.00</td>
                    <td>10</td>
                    <td class="text-end">$500.00</td>
                  </tr>
                  <tr>
                    <td>SEO</td>
                    <td>Optimize the site for search engines (SEO)</td>
                    <td>$50.00</td>
                    <td>10</td>
                    <td class="text-end">$500.00</td>
                  </tr>
                  <tr>
                    <td colspan="4">10</td>
                    <td>$500.00</td>
                  </tr>
                </tbody>
              </table>
              <div class="invoice-body-bottom">
                <div class="invoice-body-info-item border-bottom">
                  <div class="info-item-td text-end text-bold">Sub Total:</div>
                  <div class="info-item-td text-end">$2150.00</div>
                </div>
                <div class="invoice-body-info-item border-bottom">
                  <div class="info-item-td text-end text-bold">Tax:</div>
                  <div class="info-item-td text-end">$215.00</div>
                </div>
                <div class="invoice-body-info-item">
                  <div class="info-item-td text-end text-bold">Total:</div>
                  <div class="info-item-td text-end">$21365.00</div>
                </div>
              </div>
            </div>
          </div>
          <div class="invoice-foot text-center">
            <p>
              <span class="text-bold text-center">NOTE:&nbsp;</span>This is
              computer generated receipt and does not require physical
              signature.
            </p>

            <div class="invoice-btns">
              <button
                type="button"
                className="invoice-btn"
                onClick={printInvoice}
              >
                <span>
                  <i class="fa-solid fa-print"></i>
                </span>
                <span>Print</span>
              </button>
              <button
                type="button"
                className="download-btn"
                onClick={downloadInvoice}
              >
                <span>
                  <i class="fa-solid fa-download"></i>
                </span>
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePDF;

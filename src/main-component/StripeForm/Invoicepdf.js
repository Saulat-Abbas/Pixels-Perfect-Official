import React from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Invoicepdf.css";
import Logo from "../../img/logo.gif";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';



const InvoicePDF = () => {
  const cartUpdate = useSelector((state) => state.pricing.pricingData);
  const formData = useSelector((state) => state.formData);

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
  const generateInvoiceNumber = () => {
    return Math.floor(Math.random() * 10000);
  };

  return (
    <div className="invoice-wrapper" id="print-area">
      <div className="invoice">
        <div id="invoice-container" className="invoice-container">
          <div className="invoice-head">
            <div className="invoice-head-top">
              <div className="invoice-head-top-left text-start">
                <img src={Logo} alt="" />
              </div>
              <div className="invoice-head-top-right text-end">
                <h3>Invoice</h3>
              </div>
              <div>
                <h2>Pxl Perfects</h2>
              </div>
            </div>
            <div className="hr"></div>
            <div className="invoice-head-middle">
              <div className="invoice-head-middle-left text-start">
                <p>
                  <span className="text-bold">Date</span>: {currentDate}
                </p>
              </div>
              <div className="invoice-head-middle-right text-end">
                <p>
                  <span className="text-bold">Invoice No:</span>
                  {generateInvoiceNumber()}
                </p>
              </div>
            </div>
            <div className="hr"></div>
            <div className="invoice-head-bottom">
              {formData && (
                <div className="invoice-head-bottom-left">
                  <ul>
                    <li className="text-bold">Invoiced To:</li>
                    <li>
                    <strong><AccountCircleIcon/>Name:</strong>  {formData?.fullName}
                    </li>
                    <li>
                      <strong><EmailIcon/>Email:</strong> {formData.Email}
                    </li>
                    <li>
                      <strong><PublicIcon/>Country:</strong> {formData.country}
                    </li>
                    <li>
                    <i class="fas fa-map-marked-alt"></i>
                      <strong>State:</strong> {formData.state}
                    </li>
                    <li>
                      <strong><LocationCityIcon/>City:</strong> {formData.city} /{" "}
                      {formData.zip}
                    </li>             
                  </ul>
                </div>
              )}
              <div className="invoice-head-bottom-right">
                <ul className="text-end">
                  <li className="text-bold">Pay To:</li>
                  <li>Pxlperfects.</li>
                  <li>30 N Gould Street,</li>
                  <li>Sheridan, Wyoming, USA.</li>
                  <li>info@Pxlperfects.com</li>
                  <li>(+1) 307 243 2920</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="overflow-view">
            <div className="invoice-body">
              <table>
                <thead>
                  <tr>
                    <td className="text-bold">Service</td>
                    <td className="text-bold">package</td>
                    <td className="text-bold">Rate</td>
                    <td className="text-bold">QTY</td>
                    <td className="text-bold">Amount</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{cartUpdate?.pageTitle}</td>
                    <td>{cartUpdate?.package}</td>
                    <td>${cartUpdate?.price}</td>
                    <td>{cartUpdate?.quantity}</td>
                    <td className="text-end">${cartUpdate?.totalPrice}</td>
                  </tr>
                </tbody>
              </table>
              <div className="invoice-body-bottom">
                <div className="invoice-body-info-item border-bottom">
                  <div className="info-item-td text-end text-bold">
                    Sub Total:
                  </div>
                  <div className="info-item-td text-end">
                    ${cartUpdate.totalPrice}
                  </div>
                </div>
                <div className="invoice-body-info-item border-bottom">
                  <div className="info-item-td text-end text-bold">
                    Extra fastDelivery:
                  </div>
                  <div className="info-item-td text-end">
                    {cartUpdate.fastDelivery ? (
                      <CheckIcon color="success" />
                    ) : (
                      <ClearIcon color="error" />
                    )}
                  </div>
                </div>
                <div className="invoice-body-info-item">
                  <div className="info-item-td text-end text-bold">Total:</div>
                  <div className="info-item-td text-end">
                    ${cartUpdate.totalPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="invoice-foot text-center">
            <p>
              <span className="text-bold text-center">NOTE:&nbsp;</span>This is
              a computer-generated receipt and does not require a physical
              signature.
            </p>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePDF;

import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button as MuiButton } from "@mui/material";
import { Card, Grid, Typography, Divider, Modal, Button } from "@mui/material";
import { countriesData } from "./countriesData";
import { useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import "./PaymentForm.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useHistory } from "react-router-dom";
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";

const PaymentForm = ({ images }) => {
  const cartUpdate = useSelector((state) => state.pricing.pricingData);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countryIndex, setCountryIndex] = useState("");
  const [formData, setFormData] = useState({
  fullName: "",
  Email: "",
  CompanyName: "",
  country: "United States",
  state: "",
  city: "",
  zip: "",
});
  
  const isFormValid = () => {
    return (
      formData.fullName !== "" &&
      formData.Email !== "" &&
      formData.state !== "" &&
      formData.city !== "" &&
      formData.zip !== ""
      );
    };

  useEffect(() => {
    const index = countriesData.findIndex(
      (country) => country.code === formData.country
    );
    setCountryIndex(index);
  }, [formData.country]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name: formData.fullName,
          email: formData.Email,
          address: {
            country: formData.country,
            state: formData.state,
            city: formData.city.toLowerCase(),
            postal_code: formData.zip,
          },
        },
      });

      setLoading(false);

      if (error) {
        setError(error.message);
        setShowErrorModal(true);
      } else {
        if (paymentMethod) {
          setShowSuccessModal(true);
        }
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred while processing your payment.");

      setShowErrorModal(true);
    }
  };

  return (
  
    <div>
      <form onSubmit={handleSubmit}>
        <Typography
          variant="h2"
          textAlign={"center"}
          bgcolor={"FFFF6DC"}
          fontFamily={"Raleway"}
        >
          Payment Information
        </Typography>
        <div className="two-panel-container">
          <div className="code-panel">
            <div className="form-body">
              <div
                style={{ width: "80%", marginTop: "10%", marginBottom: "10%" }}
              >
                <div className="form-group">
                  <h3 style={{ paddingBottom: "2%" }}>Billing Information</h3>
                  <div className="name-container">
                    <div className="form-group" style={{ width: "100.5%" }}>
                      <label>
                        <b>Full Name</b>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group" style={{ width: "100.5%" }}>
                  <label>
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="abc@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Country</b>
                  </label>
                  <select
                    onChange={(e) => handleChange(e)}
                    name="country"
                    defaultValue="United States"
                    value={formData.country}
                  >
                    {countriesData.map((country) => (
                      <option value={country.code} key={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    <b>State/Province/Territory</b>
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>City / ZIP Code</b>
                  </label>
                  <div className="d-flex">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="input-wrapper1">
                      <input
                        type="number"
                        max={"99999"}
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value))
                            .toString()
                            .slice(0, 5);
                        }}
                        placeholder="ZIP"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <label>
                  <b>Card</b>
                </label>
                <CardElement className="card-element" />
                <MuiButton
                  variant="contained"
                  color="primary"
                  style={{
                    backgroundColor: "#B78D65",
                    color: "white",
                    marginTop: "40px",
                    marginLeft: "30%",
                    fontSize: "80%",
                  }}
                  onClick={() => history.goBack()}
                >
                  Back
                </MuiButton>
              
              </div>
            </div>
          </div>
          <div className="picture-panel">
            <div className="row">
              <div className="col-md-8">
                <div className="left">
                  <div className="row">
                    <Card
                      sx={{
                        height: "50.5vh",
                        width: "80%",
                        border: "1px solid gray",
                      }}
                    >
                      <Grid item sm={10} xs={10}>
                        <Typography
                          variant="button"
                          item
                          sm={12}
                          style={{
                            textAlign: "center",
                            fontSize: "15px",
                          }}
                        >
                          <h3 style={{ marginTop: "5%" }}>
                            {" "}
                            Your Order Summary
                          </h3>
                         
                        </Typography>
                      </Grid>
                      <Grid item sm={10} xs={10}>
                        <Divider style={{ marginTop: "2%" }} />
                      </Grid>
                      <Grid
                        item
                        sm={10}
                        xs={10}
                        variant="button"
                        style={{
                          marginRight: "5%",
                          fontSize: "25px",
                        }}
                      >
                        <Grid container alignItems="center">
                          <Grid item xs={12}>
                            <h4
                              style={{ textAlign: "center", marginTop: "2%" }}
                            >
                              {" "}
                              {cartUpdate.pageTitle}
                            </h4>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="body1"
                              style={{
                                marginTop: "10px",
                                width: "100%",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                              }}
                            ></Typography>
                          </Grid>
                        </Grid>
                        <Divider style={{ marginTop: "2%" }} />
                        <Grid container spacing={2} alignItems="center">
                          <Grid
                            item
                            xs={10}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Typography variant="body1" gutterBottom>
                              <strong> {cartUpdate.package}</strong>
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography
                              variant="h6"
                              component="div"
                              align="right"
                              marginTop="5%"
                              marginBottom="10%"
                            >
                              ${cartUpdate.price}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid sx={{ marginTop: "10px" }}>
                          <Grid container spacing={2} alignItems="center">
                            <Grid
                              item
                              xs={10}
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              <Typography
                                variant="h6"
                                component="div"
                              ></Typography>
                            </Grid>
                          </Grid>
                          <Grid item xs={2}>
                            <Divider sx={{ mb: "20px" }} />
                            <Typography>
                              {cartUpdate.fastDelivery ? (
                                <CheckIcon color="success" />
                              ) : (
                                <ClearIcon color="error" />
                              )}
                              <b style={{ marginLeft: "2%" }}>
                                Extra fast delivery
                              </b>
                            </Typography>
                          </Grid>
                          <Divider sx={{ mb: "30px", marginTop: "2%" }} />
                          <Grid container spacing={2} alignItems="center">
                            <Grid
                              item
                              xs={10}
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              <Typography component="div">
                                <b>No of Quantity</b>
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography
                                variant="h6"
                                component="div"
                                align="right"
                              >
                                {cartUpdate.quantity}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Divider sx={{ mb: "5px", marginBottom: "5%" }} />
                          <Grid container spacing={2} alignItems="center">
                            <Grid
                              item
                              xs={10}
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              <Typography variant="h6" component="div">
                                Total Price
                              </Typography>
                            </Grid>
                            <Grid item xs={2}>
                              <Typography
                                variant="h6"
                                component="div"
                                align="right"
                              >
                                ${cartUpdate.totalPrice}
                              </Typography>
                            </Grid>
                            {error && (
                              <div className="error-message">{error}</div>
                            )}
                            <MuiButton
                              type="submit"
                              disabled={!isFormValid() || !stripe || loading}
                              variant="contained"
                              style={{
                                backgroundColor: "#B78D65",
                                color: "white",
                                marginTop: "40px",
                                marginLeft: "30%",
                                fontSize: "80%",
                              }}
                            >
                              {loading ? "Processing..." : "Submit"}
                            </MuiButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ErrorModal
        open={showErrorModal}
        onClose={() => setShowErrorModal(false)}
      />
      <SuccessModal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
};

export default PaymentForm;

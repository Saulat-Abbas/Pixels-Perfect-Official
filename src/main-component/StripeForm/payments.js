import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { FormControlLabel, Button as MuiButton } from "@mui/material";
import { Card, Grid, Typography, Divider } from "@mui/material";
import { countriesData } from "./countriesData";
import { useSelector } from "react-redux";
import img from "../../img/decluter-1.jpg";
import CheckIcon from "@mui/icons-material/Check";
import "./PaymentForm.css";
import { updatePricingCart } from "../CreateSlice/pricingSlice";
import ClearIcon from "@mui/icons-material/Clear";

const PaymentForm = ({ images }) => {
  const cartUpdate = useSelector((state) => state.pricing.pricingData);
  // console.log("Wiki baba================>",cartUpdate);

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [countryIndex, setCountryIndex] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    lastName: "",
    address: "",
    apartment: "",
    phoneNumber: "",
    zip: "",
    state: "",
    city: "",
    country: "United States",
  });

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

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: formData.fullName,
        email: formData.email,
        address: {
          postal_code: formData.zip,
          state: formData.state,
          line1: formData.address,
          line2: formData.apartment,
          city: formData.city.toLowerCase(),
        },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      // Handle successful payment here
    }
  };
  return (
    <div className="two-panel-container">
      <div className="code-panel">
        <div className="form-body">
          <form
            onSubmit={handleSubmit}
            style={{ width: "85%", marginTop: "20%", marginBottom: "20%" }}
          >
            <div className="form-group">
              <h3 style={{ paddingBottom: "2%" }}>Billing Information</h3>
              <div className="name-container">
                <div className="form-group" style={{ width: "60.5%" }}>
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
              <label>
                <b>Company Name</b>
              </label>
              <input
                type="text"
                name="Text"
                value={formData.Text}
                onChange={handleChange}
                placeholder="Company Name"
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
                <b>City</b>
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
                <div className="input-wrapper">
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
            <div className="form-group">
              <label>VAT Number</label>
              <input
                type="Number"
                name="VAT Number"
                value={formData.apartment}
                placeholder="VAT Number"
                onChange={handleChange}
              />
            </div>
            <CardElement className="card-element" />
          </form>
        </div>
      </div>
      <div className="picture-panel">
        <div className="row">
          <div className="col-md-8">
            <div className="left border">
              <div className="row">
                <div className="card-element-container"></div>
                <Card
                  variant="outlined"
                  sx={{
                    height: "600px",
                    width: "800px",
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
                        marginLeft: "90px",
                        fontSize: "15px",
                      }}
                    >
                      Your order summary
                    </Typography>
                  </Grid>
                  <Grid item sm={10} xs={10}>
                    <Divider />
                  </Grid>
                  <Grid
                    item
                    sm={10}
                    xs={10}
                    variant="button"
                    style={{
                      marginLeft: "10px",
                      fontSize: "25px",
                      marginTop: "10px",
                    }}
                  >
                    <Grid container alignItems="center">
                      <Grid item xs={12}>
                        <img
                          src={cartUpdate.image}
                          //  alt={'Images'  }
                          //  className="main-images"
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body1"
                          style={{
                            marginTop: "20px",
                            width: "100ch",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {/* Your data goes here */}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      <Grid
                        item
                        xs={10}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="body1" gutterBottom>
                          Pricing details
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="h6" component="div" align="right">
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
                          <Typography variant="h6" component="div"></Typography>
                        </Grid>
                        {/* <Grid item xs={2}>
                          <Typography
                            variant="h6"
                            component="div"
                            align="right"
                          >
                            $10
                          </Typography>
                        </Grid> */}
                      </Grid>
                      <Grid item xs={2}>
                        <Divider sx={{ mb: "10px" }} />
                        <Typography>
                          {cartUpdate.fastDelivery ? (
                            <CheckIcon color="success" />
                          ) : (
                            <ClearIcon color="error" />
                          )}
                          Extra fast delivery
                        </Typography>
                      </Grid>
                      {/* <Grid item xs={2}>
                          <Typography
                            variant="h6"
                            component="div"
                            align="right"
                          >
                            
                         <span style={{ color: "green", fontSize: "24px" }}>✓</span>
                           {cartUpdate.fastDelivery}
                          </Typography>
                        </Grid> */}
                      <Divider sx={{ mb: "30px" }} />
                      <Grid container spacing={2} alignItems="center">
                        <Grid
                          item
                          xs={10}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Typography component="div">
                            No of Quantity
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
                      <Divider sx={{ mb: "10px" }} />
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
                        <MuiButton
                          variant="contained"
                          style={{
                            backgroundColor: "#B78D65",
                            color: "white",
                            marginTop: "20px",
                            marginLeft: "20%",
                          }}
                        >
                          Proceed to Checkout
                        </MuiButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            </div>
          </div>
          {/* {error && <div className="error-message">{error}</div>}
                            <button type="submit" disabled={!stripe || loading}>
                              {loading ? "Processing..." : "Continue to Shipping"}
                            </button> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

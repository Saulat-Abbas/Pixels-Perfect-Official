import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PaymentForm.css";
import { FormControlLabel } from "@mui/material";
import { Card, Grid, Typography, Divider } from "@mui/material";
import { countriesData } from "./countriesData";
import { useSelector } from "react-redux";
import img from "../../img/decluter-1.jpg";
import CheckIcon from "@mui/icons-material/Check";
import { Bolt } from "@mui/icons-material";
import { Button as MuiButton } from "@mui/material";

function PaymentForm() {

  const imageQuantity = useSelector((state) => state.pricing.imageQuantity);
  const isCheckboxChecked = useSelector((state) => state.pricing.isCheckboxChecked);

  // const imageQuantity = useSelector((state) =>
  //   console.log("state imageQuantity ===========>", state?.pricing)
  // );
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
  const data = [
    // ... (all the country data you provided)
  ];
  useEffect(() => {
    const index = countriesData.findIndex(
      (country) => country.code === formData.country
    );
    setCountryIndex(index);
  }, [formData.country]);

  // Sort the data array in ascending order based on country name
  data.sort((a, b) => a.name.localeCompare(b.name));

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
          postal_code: formData.zip, // Include the zip code
          state: formData.state,
          line1: formData.address,
          line2: formData.apartment,
          city: formData.city.toLowerCase(), // City
          // country: formData.country, //Country
        },
      },
    });
    console.log("card elementv =========>", CardElement);
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
    }
  };

  return (
    <div className="two-panel-container">
      <div className="code-panel">
        <div className="form-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h3 style={{ paddingBottom: "2%" }}>Contact Form</h3>
              <label style={{ cursor: "none" }}>
                <b>Email</b>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email:abc@email.com"
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <FormControlLabel
                control={<defaultChecked />}
                label="Email me with news and offers"
              />
            </div>
            <div className="form-group" style={{ width: "100%" }}>
              <label>
                <b>Shipping Country</b>
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
            <div className="form-group" style={{ width: "100%" }}>
              <label>
                <b>Shipping City</b>
              </label>
              {/* <select onChange={(e) => handleChange(e)} name='city'>
                {countriesData[countryIndex]?.cities.map((city, index) => (
                  <option key={city} value={city}>
                    {city || "Please Choose Country"}
                  </option>
                ))}
              </select> */}

              <div class="d-flex" style={{ marginTop: "5%" }}>
                <input
                  class=""
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
                <input
                  class=""
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

                <input
                  class=""
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="name-container">
              <div className="form-group" style={{ width: "60.5%" }}>
                <label style={{ cursor: "none" }}></label>
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

            <div className="form-group">
              <label style={{ cursor: "none" }}></label>
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label style={{ cursor: "none" }}></label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                placeholder="Apartment, suit etc (Optional)"
                onChange={handleChange}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" disabled={!stripe || loading}>
              {loading ? "Processing..." : "Continue to Shipping"}
            </button>
          </form>
        </div>
      </div>
      <div className="picture-panel">
        <div className="row">
          <div className="col-md-8">
            <div className="left border">
              <div className="row">
                <div className="card-element-container">
                  <CardElement className="card-element" />
                </div>
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
                          src={img}
                          style={{
                            width: "100%", // Set the width to 100% to fill the container
                            height: "auto", // Use "auto" to maintain the aspect ratio
                            border: "2px solid black",
                          }}
                          alt="Your Image"
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
                          Your data goes here
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                      <Grid
                        item
                        xs={10}
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        <Typography variant="h6" component="div">
                          Standard Package {imageQuantity}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="h6" component="div" align="right">
                          $10
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: "10px" }}>
                      <Typography sx={{ mt: "10px", mb: "10px" }}>
                        {" "}
                        <CheckIcon sx={{ color: "green" }} /> 3 revision{" "}
                      </Typography>
                      <Divider sx={{ mb: "10px" }} />
                      <Typography>
                        {" "}
                        <CheckIcon sx={{ color: "green" }} /> Extra fast
                        delivery
                      </Typography>
                      <Divider sx={{ mb: "30px" }} />
                      <Typography sx={{ mb: "10px" }}>
                        No of days Delivery
                      </Typography>
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
                            $10
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
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;

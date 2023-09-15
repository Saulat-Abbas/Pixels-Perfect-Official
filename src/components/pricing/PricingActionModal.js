import React, { useEffect, useState } from "react";
import "./pricingActionmodal.css";
import {
  Box,
  Button,
  Card,
  Drawer,
  Divider,
  Typography,
  IconButton,
  Grid,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import InventoryIcon from "@mui/icons-material/Inventory";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { updatePricingCart } from "../../main-component/CreateSlice/pricingSlice";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Pricing from ".";

const PricingActionModal = ({ show, handleClose, pricingData }) => {
  useEffect(() => {
    setImageQuantity(1);
  }, []);

  const dispatch = useDispatch(updatePricingCart);

  const [imageQuantity, setImageQuantity] = useState(0);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(0);

  const handleImageIncrement = () => {
    setImageQuantity(imageQuantity + 1);
  };

  const handleImageDecrement = () => {
    setImageQuantity(Math.max(imageQuantity - 1, 1));
  };

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const checkbox = isCheckboxChecked
    ? parseFloat(pricingData.time) * imageQuantity
    : 0;
  const totalPrice = pricingData.price * imageQuantity + checkbox;

  const dataToSend = {
      imageQuantity,
      isCheckboxChecked,
      totalPrice,
      
  };

  const longText =
    "This is a long text that needs to be split into lines when its length is greater than 10.";
  const lines = longText.match(/.{1,10}/g) || [];

  const list = () => (
    <Grid container spacing={1} maxWidth={450} justifyContent={"center"}>
      <Grid item xs={11.1} md={12}>
        <Grid container spacing={2}>
          <Grid item xs={9} ml={4}>
            <Typography variant="h6">Order Option</Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11.1} md={12}>
        <Card
          variant="outlined"
          sx={{ m: 2, p: 2, maxWidth: { xs: "400px", sm: 400 } }}
        >
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography variant="button">{pricingData.name}</Typography>
            </Grid>
            <Grid item xs={2}>
              $ {pricingData.price}
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: "100%", maxWidth: 600 }}>
                <Typography variant="body1" gutterBottom>
                  {pricingData?.details?.map((detail, index) => (
                    <li key={index}>
                      <p>
                        <ArrowCircleRightIcon
                          fontSize="small"
                          sx={{ color: "#B78D65" }}
                        />{" "}
                        {detail}
                      </p>
                    </li>
                  ))}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h6">Gig Quantity</Typography>
            </Grid>
            <Grid item xs={1.6}>
              <IconButton onClick={handleImageDecrement} sx={{ border: 1 }}>
                <RemoveIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item xs={0}>
              <Typography variant="h5" sx={{ color: "gray" }}>
                {imageQuantity}
              </Typography>
            </Grid>
            <Grid item xs={1.4} onClick={handleImageIncrement}>
              <IconButton sx={{ border: 1 }}>
                <AddIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={11.1} md={12}>
        <Typography variant="subtitle2" mt={12} m={2}>
          Upgrade your order with extras
        </Typography>
      </Grid>
      <Grid item xs={11.1} md={12}>
        <Card variant="outlined" sx={{ m: 2, mb: 2, p: 2, maxWidth: 400 }}>
          <Grid container spacing={1}>
            <Grid item xs={10} mt={1}>
              <Typography variant="subtitle2">
                Extra-fast 1-day delivery
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Tooltip
                title={
                  !pricingData?.time && "Extra fast delivary is not available."
                }
              >
                <span>
                  <Checkbox
                    disabled={!pricingData?.time}
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                    sx={{ color: "#B78D65" }}
                  />
                </span>
              </Tooltip>
            </Grid>
            <Grid item xs={12} mt={"-15px"} mb={1}>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {isCheckboxChecked
                  ? `$${pricingData.time * imageQuantity}`
                  : ""}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={11.1} md={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={11.1} md={12}>
        <Card
          variant="outlined"
          sx={{ m: 2, mt: 2, p: 2, maxWidth: 400, bgcolor: "#E5E4E2" }}
          xs={2}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} mt={1}>
              <Typography variant="h4" sx={{ color: "#36454F" }}>
                ${totalPrice}
              </Typography>
            </Grid>
            <Grid item xs={12} mt={"-15px"} mb={1}>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {`Single Order (X${imageQuantity})`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              {isCheckboxChecked ? (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <InventoryIcon fontSize="small" sx={{ mr: 2 }} />
                    <Typography variant="subtitle2">{`${pricingData.name} (X${imageQuantity})`}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ mx: 4.5, mt: "-14px" }}>
                    <Typography variant="body2">
                      + Extra-fast 1-day Delivery
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ) : (
                <Card
                  variant="outlined"
                  sx={{
                    bgcolor: "white",
                    display: "inline-flex",
                    width: "100%",
                    padding: 1.5,
                  }}
                >
                  <InventoryIcon fontSize="small" sx={{ mr: 2 }} />
                  <Typography variant="subtitle2">{`${pricingData.name} (X${imageQuantity})`}</Typography>
                </Card>
              )}
            </Grid>
            <Grid item xs={6}>
              <Button
                startIcon={<QueryBuilderIcon />}
                sx={{
                  color: "black",
                  pointerEvents: "none",
                  textTransform: "capitalize",
                }}
              >
                {pricingData.details[2]}
              </Button>
            </Grid>
            <Grid item xs={5} sm={4} md={12} lg={12}>
              <Button
                // startIcon={<AutorenewIcon />}
                sx={{
                  color: "black",
                  pointerEvents: "none",
                  textTransform: "capitalize",
                }}
              >
                {pricingData.details[1]}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Link to="/payments">
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    width: "300px",
                    backgroundColor: "#B78D65",
                    marginLeft: "35px",
                  }}
                  onClick={() => {
                    dispatch(updatePricingCart({
                     quantity : imageQuantity,
                     fastDelivery : isCheckboxChecked,  
                     totalPrice : totalPrice,
                     price:pricingData.price,
                     

                    }));
                  }}
                >
                  Proceed to checkout
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <div className="element">
      <Drawer anchor="right" open={show} onClose={handleClose} width={"350px"}>
        {list("right")}
      </Drawer>
    </div>
  );
};

export default PricingActionModal;

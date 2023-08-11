import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import './pricingActionmodal.css';
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
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip
} from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Payments } from '@mui/icons-material';


// const Container = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100%',
// });
const PricingActionModal = ({ show, handleClose, pricingData }) => {
  const [imageQuantity, setImageQuantity] = useState(1);
  const [revisionQuantity, setRevisionQuantity] = useState(1);
  // console.log('pricingData====>', pricingData);
  useEffect(() => {
    setImageQuantity(1);
    setRevisionQuantity(1);
  }, []);
 
  const handleImageIncrement = () => {
    setImageQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleImageDecrement = () => {
    setImageQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleRevisionIncrement = () => {
    setRevisionQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRevisionDecrement = () => {
    setRevisionQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const imagePrice = pricingData.price[0] * imageQuantity;
  const revisionPrice = pricingData.price[1] * revisionQuantity;
  const totalPrice = pricingData.price * imageQuantity + (isCheckboxChecked ? parseFloat(pricingData.time) : 0);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const longText = 'This is a long text that needs to be split into lines when its length is greater than 10.';
  const lines = longText.match(/.{1,10}/g) || [];

  const list = () => (
    <div style={{ paddingTop: 10, width: '100%' }}>
      <Grid container spacing={5}>
        <Grid item sm={8} xs={8} ml={4} >
          <Typography variant="h6">
            Order Option
          </Typography>
        </Grid>
        <Grid item sm={1} xs={3}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Card variant='outlined' sx={{ m: 2, p: 2, maxWidth: { xs: '600px', sm: 400 } }}>
        <Grid container spacing={2}>
          <Grid item sm={10} xs={10}>
            <Typography variant="button">
              {pricingData.name}
            </Typography>
          </Grid>
          <Grid item sm={2} >
            $ {pricingData.price}
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: '100%', maxWidth: 600 }}>
              <Typography variant="body1" gutterBottom>
                {pricingData.details.map((detail, index) => (
                  <li key={index}>
                    <p>
                      <ArrowCircleRightIcon fontSize='small' sx={{ color: '#B78D65' }} /> {detail}
                    </p>
                  </li>
                ))}
              </Typography>
            </Box>

          </Grid>
          <Grid item xs={12} >
            <Divider />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h6">
              Gig Quantity
            </Typography>
          </Grid>
          <Grid item xs={1.6}>
            <IconButton onClick={handleImageDecrement} sx={{ border: 1 }}>
              <RemoveIcon fontSize='small' />
            </IconButton>
          </Grid>
          <Grid item xs={0}>
            <Typography variant="h5" sx={{ color: 'gray' }}>
              {imageQuantity}
            </Typography>
          </Grid>
          <Grid item xs={1.4} onClick={handleImageIncrement}>
            <IconButton sx={{ border: 1 }}>
              <AddIcon fontSize='small' />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
      <Typography variant="subtitle2" mt={1.6} m={2}>
        Upgrade your order with extras
      </Typography>
      <Card variant='outlined' sx={{ m: 2, mb: 2, p: 2, maxWidth: 400 }}  >
        <Grid container spacing={2}>
          <Grid item xs={10} mt={1}>
            <Typography variant="subtitle2">
              Extra-fast 1-day delivery
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Tooltip title={!pricingData?.time && "Extra fast delivary is not available."}>
              <span>
                <Checkbox disabled={!pricingData?.time} checked={isCheckboxChecked} onChange={handleCheckboxChange}  sx={{color:"#B78D65"}}/>
              </span>
            </Tooltip>
          </Grid>
          <Grid item xs={12} mt={'-15px'} mb={1}>
            <Typography variant="body2" sx={{ color: 'gray' }}>
              {isCheckboxChecked ? `$${pricingData.time}` : ''}
            </Typography>
          </Grid>
        </Grid>
      </Card>
      <Divider variant="middle" />
      <Card variant='outlined' sx={{ m: 1, mt: 2, p: 2, maxWidth: 400, bgcolor: '#E5E4E2' }} xs={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} mt={1}>
            <Typography variant="h4" sx={{ color: '#36454F' }}>
              ${totalPrice}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={'-15px'} mb={1}>
            <Typography variant="body2" sx={{ color: 'gray' }}>
              {`Single Order (X${imageQuantity})`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            {isCheckboxChecked ? ( // Check if the checkbox is checked
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <InventoryIcon fontSize='small' sx={{ mr: 2 }} />
                  <Typography variant='subtitle2'>{`${pricingData.name} (X${imageQuantity})`}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ mx: 4.5, mt: '-14px' }}>
                  <Typography variant='body2'>
                    + Extra-fast 1-day Delivery
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ) : (
              <Card variant='outlined' sx={{ bgcolor: 'white', display: 'inline-flex', width: '100%', padding: 1.5 }}>
                <InventoryIcon fontSize='small' sx={{ mr: 2 }} />
                <Typography variant='subtitle2'>{`${pricingData.name} (X${imageQuantity})`}</Typography>
              </Card>
            )}

          </Grid>
          <Grid item xs={8}>
            <Button startIcon={<QueryBuilderIcon />} sx={{ color: 'black', pointerEvents: 'none', textTransform: 'capitalize' }}>1-day Delivery</Button>
          </Grid>
          <Grid item xs={4} sm={4} md={12} lg={12}>
            <Button startIcon={<AutorenewIcon />} sx={{ color: 'black', pointerEvents: 'none', textTransform: 'capitalize' }}>{pricingData.details[1]}</Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size='large' href='/payments' style={{ width: "365px", backgroundColor: '#B78D65' }}>
              Proced to checkout
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );


  return (
    <div className='element'>
      <Drawer anchor="right" open={show} onClose={handleClose} width={'xs'}>
        {list('right')}
      </Drawer>
    </div>
  );
};

export default PricingActionModal;

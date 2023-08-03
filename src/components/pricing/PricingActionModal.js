import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Grid version 
import Item from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import './pricingActionmodal.css';
import { BoltOutlined, Height } from '@mui/icons-material';

const PricingActionModal = ({ show, handleClose, pricingData }) => {
  const [imageQuantity, setImageQuantity] = useState(1);
  const [revisionQuantity, setRevisionQuantity] = useState(1);

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

  const imagePrice = pricingData.price[0] * imageQuantity;
  const revisionPrice = pricingData.price[1] * revisionQuantity;
  const totalPrice = imagePrice + revisionPrice;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const list = () => (
    <div style={{ width: '500px', display: 'flex', justifyContent: 'center' }}>
      <Card variant='outlined' sx={{ maxWidth: 500, mt: 10 }}>
        <Grid container spacing={1} p={2}>
          <Grid item xs={8}>
            <Item>waqas</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Saulat</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>abbas</Item>
              <Divider variant="inset"/>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Card>
    </div >



  );


  return (
    <div>
      <Drawer anchor="right" open={show} onClose={handleClose}>
        {list('right')}
      </Drawer>
    </div>
  );
};

export default PricingActionModal;

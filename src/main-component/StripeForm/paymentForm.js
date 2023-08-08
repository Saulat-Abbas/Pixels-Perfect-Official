import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Box, TextField, Button } from '@mui/material';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
  });
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    // Create a payment method using the CardElement and include the email
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: formData.email,
        name: formData.name,
        phone: formData.phoneNumber,
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      // Handle successful payment and user data
      console.log(paymentMethod);
      console.log(formData); // This will contain the user's email, name, and phone number
      console.log(`Quantity: ${quantity}`); // Display the selected quantity
    }
  };

  return (
    <div className="payment-box" style={{ marginTop: "100px" }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="standard"
            required
          />
        </div>
        <div>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="standard"
            required
          />
        </div>
        <div>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            variant="standard"
            required
          />
        </div>
       
        <div className="card-element-container">
          <CardElement />
        </div>
        {error && <div className="error-message">{error}</div>}
        <Button type="submit" variant="contained" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay'}
        </Button>
      </Box>
    </div>
  );
}

export default PaymentForm;

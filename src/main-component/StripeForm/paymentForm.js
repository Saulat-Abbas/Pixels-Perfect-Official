import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Header from '../../components/header'
import './PaymentForm.css'; // Import your custom CSS file for styling

// import { Card, Button, Alert } from 'react-bootstrap';



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
        <div className= "form-body" >
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div className="form-group">
                <label>Quantity</label>
                <div className="quantity-control">
                    <button type="button" onClick={handleDecrement}>
                        -
                    </button>
                    <span>{quantity}</span>
                    <button type="button" onClick={handleIncrement}>
                        +
                    </button>
                </div>
            </div>
            <div className="card-element-container">
                <CardElement />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay'}
            </button>
        </form>
        </div>
    );
}

export default PaymentForm;

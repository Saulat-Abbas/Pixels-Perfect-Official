// CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      setError(stripeError.message);
      setProcessing(false);
      return;
    }

    // Send the payment method ID to your server to create a payment intent or charge
    console.log('Payment method created:', paymentMethod);
    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>

        <div className="wrapper">
          <h2>Payment Form</h2>
          <form method="POST">
            <h4>Account</h4>
            <div className="input-group">
              <div className="input-box">
                <input type="text" placeholder="Full Name" required className="name" />
                <i className="fa fa-user icon"></i>
              </div>
              <div className="input-box">
                <input type="text" placeholder="Nick Name" required className="name" />
                <i className="fa fa-user icon"></i>
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                <input type="email" placeholder="Email Address" required className="name" />
                <i className="fa fa-envelope icon"></i>
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                <h4>Date of Birth</h4>
                <input type="text" placeholder="DD" className="dob" />
                <input type="text" placeholder="MM" className="dob" />
                <input type="text" placeholder="YYYY" className="dob" />
              </div>
              <div className="input-box">
                <h4>Gender</h4>
                <input type="radio" id="b1" name="gender" defaultChecked className="radio" />
                <label htmlFor="b1">Male</label>
                <input type="radio" id="b2" name="gender" className="radio" />
                <label htmlFor="b2">Female</label>
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                <h4>Payment Details</h4>
                <input type="radio" name="payment" id="bc1" defaultChecked className="radio" />
                <label htmlFor="bc1"><span><i className="fa fa-cc-visa"></i> Credit Card</span></label>
                <input type="radio" name="payment" id="bc2" className="radio" />
                <label htmlFor="bc2"><span><i className="fa fa-cc-paypal"></i> Paypal</span></label>
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                <input type="tel" placeholder="Card Number" required className="name" />
                <i className="fa fa-credit-card icon"></i>
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                <input type="tel" placeholder="Card CVC" required className="name" />
                <i className="fa fa-user icon"></i>
              </div>
              <div className="input-box">
                <select>
                  <option>01 Jun</option>
                  <option>02 Jun</option>
                  <option>03 Jun</option>
                </select>
                <select>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                {error && <div>{error}</div>}
                <button type="submit" disabled={!stripe || processing}>
                  {processing ? 'Processing...' : 'Pay'}
                </button>
              </div>
            </div>
          </form>
        </div>



        <CardElement />
      </div>
    </form>
  );
};

export default CheckoutForm;

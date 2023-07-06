// // CheckoutForm.js
// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     if (!stripe || !elements) {
//       // Stripe.js has not yet loaded.
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (stripeError) {
//       setError(stripeError.message);
//       setProcessing(false);
//       return;
//     }

//     // Send the payment method ID to your server to create a payment intent or charge
//     console.log('Payment method created:', paymentMethod);
//     setProcessing(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Card details:</label>
//         <CardElement />
//       </div>
//       {error && <div>{error}</div>}
//       <button type="submit" disabled={!stripe || processing}>
//         {processing ? 'Processing...' : 'Pay'}
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;

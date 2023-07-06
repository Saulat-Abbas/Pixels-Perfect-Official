import React, { useEffect } from 'react';
import AllRoute from '../router';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000
    });
  });

  return (
    <div className="App body_wrap">
      <Elements stripe={stripePromise}>
        <AllRoute />
      </Elements>
    </div>
  );
}

export default App;

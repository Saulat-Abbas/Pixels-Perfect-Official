import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllRoute from '../router';
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import PaymentForm from '../../stripeForm/paymentForm';
import { Modal } from 'react-bootstrap';

const stripePromise = loadStripe('pk_test_51LkExQD2dU6r3UJMo1HDdTm4E9g36D4Db12YmQzG7AnkXsBrFnwiMqOGJbNdpHUVX7SwHJXZXxsHCJNd12ahZfw5005R8EAYYi');


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000
    });
  }, []);

  return (
      <div className="App body_wrap"> 
    <Elements stripe={stripePromise}>
        <AllRoute />
        <Modal/>
    </Elements>
      </div>
      
  );
};

export default App;

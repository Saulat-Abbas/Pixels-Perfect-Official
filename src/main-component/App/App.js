import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllRoute from '../router';
import './App.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '../../stripeForm/paymentForm';


const stripePromise = loadStripe('sk_test_51LkExQD2dU6r3UJMffByBHtycl7YllCjgGoUOzcecDaBv9znZOYwFYYVpiNAoNzWglpmk4q3sCtorfB4EDpG7ITB00XK1wcbNY');


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
        <PaymentForm />
    </Elements>
      </div>

  );
};

export default App;

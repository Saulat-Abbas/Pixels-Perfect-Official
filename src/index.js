import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/all.min.css';
import App from './main-component/App/App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');


ReactDOM.render(
  // <React.Fragment>
  //   <App />
  // </React.Fragment>,
  <Elements stripe={stripePromise}>
    <App />
  </Elements>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


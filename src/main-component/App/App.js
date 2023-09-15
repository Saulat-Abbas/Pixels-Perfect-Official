import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllRoute from '../router';
import './App.css';
import Logo from '../../img/logo.gif';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading for 1 second

    AOS.init({
      offset: 100,
      duration: 1000,
    });
  }, []);

  const pricingData = {
    imageQuantity: 5,
    totalPrice: 100,
  };


  return (
    <div className="App body_wrap">
      {loading ? (
        <div className="loader-overlay">
          <div className="gif-loader-container">
            <img src={Logo} alt="Loading" className="gif-loader" />
          </div>
        </div>
      ) : (
        <Provider store={store}>
          <AllRoute />
        </Provider>
      )}
    </div>
  );
}

export default App;

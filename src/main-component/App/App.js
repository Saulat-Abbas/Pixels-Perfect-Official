import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllRoute from '../router';
import './App.css';
import Logo from '../../img/logo.gif';

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
  }, [window.location.pathname]);
  console.log("window.location", window.location);
  return (
    <div className="App body_wrap">
      {loading ? (
        <div className="loader-overlay">
          <div className="gif-loader-container">
            <img src={Logo} alt="Loading" className="gif-loader" />
          </div>
        </div>
      ) : (
        <AllRoute />
      )}
    </div>
  );
}

export default App;

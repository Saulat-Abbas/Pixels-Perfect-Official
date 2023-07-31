import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllRoute from '../router';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000
    });
  }, []);

  return (
    <div className="App body_wrap">
      <AllRoute />
    </div>

  );
};

export default App;

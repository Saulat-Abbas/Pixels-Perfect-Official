import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllRoute from '../router';
import './App.css';
import Logo from "../../img/logo.gif";

const App = () => {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 3000
    )


    AOS.init({
      offset: 100,
      duration: 1000
    });
  }, []);

  return (
    <div className="App body_wrap">
      {loading ? (
        <div className="loader-overlay">
          {/* <ClimbingBoxLoader color={"blue"} size={30} loading={loading} /> */}
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

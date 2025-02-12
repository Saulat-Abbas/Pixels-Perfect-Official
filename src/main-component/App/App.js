import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AllRoute from "../router";
import "./App.css";
import Logo from "../../img/logo.gif";
import { Provider } from "react-redux";
import { store, persistor } from "../ReduxStore/Store/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s fake loading

    AOS.init({
      offset: 100,
      duration: 1000,
    });

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;

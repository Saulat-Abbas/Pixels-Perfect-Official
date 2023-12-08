// Banner.js
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../img/LogoFooter.png";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(90deg, rgb(3, 189, 165) 0% 23.5043%, rgb(64, 127, 119) 47.0085% 73.5043%, rgb(32, 75, 128) 100%)`,
    height: "100vh", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  about: {
    textAlign: "center",
    padding: "20px", 
    borderRadius: "10px", 
  },
  image: {
    maxWidth: "400px",
    maxHeight: "400px", 
    margin: "0 auto", 
    display: "block", 
  },
  text: {
    fontSize: "36px", 
    fontFamily: "'Roboto', sans-serif", 
    color: "#fff", 
    margin: "10px 0", 
    overflow: "hidden", 
    whiteSpace: "nowrap",
    borderRight: "2px solid #fff", 
    animation: "$typewriter 2s steps(30, end)", 
  },
 
  "@keyframes typewriter": {
    from: {
      width: 0,
    },
    to: {
      width: "100%",
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  const [textAnimation, setTextAnimation] = useState(false);

  useEffect(() => {
    setTextAnimation(true);
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.about}>
        <div>
          <img src={Bg} alt="Logo" className={classes.image} />
        </div>
        <div style={{ marginTop: "1cm" }}>
          <p className={`${classes.text} ${textAnimation ? "animated-text" : ""}`}>
            Something Amazing Is Coming Soon......!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

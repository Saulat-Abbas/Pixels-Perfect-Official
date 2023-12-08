// Banner.js
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../img/LogoFooter.png";
import BG from "../../img/bannerbg.jpg"
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${BG})`,
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

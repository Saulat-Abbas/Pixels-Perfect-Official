// Banner.js
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Bg from "../../img/LogoFooter.png";
import CssBaseline from "@material-ui/core/CssBaseline";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" />


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
    border: "2px solid #fff", 
    borderRadius: "10px", 
  },
  image: {
    maxWidth: "150px", 
    maxHeight: "150px",
    margin: "0 auto", 
    display: "block", 
  },
  text: {
    fontSize: "24px", 
    fontFamily: "'Roboto', sans-serif", 
    color: "#fff", 
    margin: "10px 0", 
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.about}>
        <div>
          <img src={Bg} alt="Logo" className={classes.image} />
        </div>
        <div>
          <p className={classes.text}>Something Is Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

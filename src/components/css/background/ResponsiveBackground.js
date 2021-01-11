import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

const desktopImage = require("../../../asset/cover.jpg");
const mobileImage = require("../../../asset/cover.jpg");

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
  },
  App: {
    height: "95vh",
    margin: theme.spacing(-1),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "center center",
    },
  },
  Heading:{
    lineHeight:1,
    fontSize:'3rem',
    margin:0,
  },
  Tagline:{
    lineHeight:1,
    fontSize:'1.2rem',
  },
  AppContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "40px",
    transform: `translateY(20% )`,
  },
}));

const ResponsiveBackground = () => {
  const classes = useStyles();
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <div className={classes.root}>
      <div
        className={classes.App}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={classes.AppContent}>
          <h1 className={classes.Heading}>Pineapples</h1>
          <p className={classes.Tagline}>They are good</p>
        </div>
      </div>
    </div>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowWidth;
};

export default React.memo(ResponsiveBackground);

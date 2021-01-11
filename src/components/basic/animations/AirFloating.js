import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  animatedItem: {
    overflow: "hidden",
    transform: "translateY(0px)",
    animation: `$myEffect 5s ${theme.transitions.easing.easeInOut} infinite`,
  },
  "@keyframes myEffect": {
    "0%": {
      transform: "translateY(0px)",
    },

    "50%": {
      transform: "translateY(-20px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
}));

const AirFloating = (props) => {
  const classes = useStyles();
  return <div class={classes.animatedItem}>{props.children}</div>;
};

export default React.memo(AirFloating);

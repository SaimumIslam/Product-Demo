import React from "react";
import classes from "./FlippingCard.module.css";
//not used

export default function FlippingCard(props) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div
          className={classes.front}
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className={classes.inner}>{props.front}</div>
        </div>
        <div className={classes.back}>
          <div className={classes.inner}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

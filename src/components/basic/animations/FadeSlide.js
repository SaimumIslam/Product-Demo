import React from "react";
import { Fade, Slide } from "@material-ui/core";

const FadeSlide = (props) => {
  return (
    <Slide {...props} mountOnEnter>
      <Fade {...props}>{props.children}</Fade>
    </Slide>
  );
};
export default React.memo(FadeSlide);

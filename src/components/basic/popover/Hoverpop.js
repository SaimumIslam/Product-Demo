import React from "react";
import HoverPopover from "material-ui-popup-state/HoverPopover";

const Hoverpop = (props) => {
  const { anchor, ...rest } = props;
  return (
    <HoverPopover
      anchorOrigin={{
        vertical: "bottom",
        horizontal: anchor,
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: anchor,
      }}
      disableRestoreFocus
      {...rest}
    >
      {props.children}
    </HoverPopover>
  );
};

export default Hoverpop;

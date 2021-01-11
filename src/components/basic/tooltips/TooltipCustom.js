import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  arrow: (props) => ({
    color: props.white
      ? theme.palette.common.white
      : theme.palette.action.hover,
  }),
  tooltip: (props) => ({
    backgroundColor: props.white
      ? theme.palette.common.white
      : theme.palette.action.hover,
    color: props.white
      ? theme.palette.common.black
      : theme.palette.common.white,
  }),
}));

export default function TooltipCustom(props) {
  const { white, children, ...rest } = props;
  const classes = useStyles({ white });
  return (
    <Tooltip
      classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
      {...rest}
    >
      {children}
    </Tooltip>
  );
}

import React from "react";
import Popover from "@material-ui/core/Popover";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function Navpop(props) {
  const { anchor, ...rest } = props;
  const classes = useStyles();
  return (
    <Popover
      classes={{
        paper: classes.paper,
      }}
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
    </Popover>
  );
}

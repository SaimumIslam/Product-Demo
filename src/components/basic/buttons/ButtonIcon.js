import React from "react";
import IconButton from "@material-ui/core/IconButton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    borderRadius: 0,
    color: theme.palette.grey[800],
    "&:hover": {
      color: theme.palette.action.hover,
      backgroundColor: "transparent",
    },
  },
}));

const ButtonIcon = (props) => {
  const classes = useStyles();

  return (
    <IconButton classes={{ root: classes.root }} {...props}>
      {props.children}
    </IconButton>
  );
};
export default React.memo(ButtonIcon);

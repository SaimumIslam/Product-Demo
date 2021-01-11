import React from "react";
import Button from "@material-ui/core/Button";

import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    padding: 0,
    textTransform: "capitalize",
    color: fade(theme.palette.text.primary, 0.7),
    transition: "none",
    "&:hover": {
      color: theme.palette.action.hover,
      backgroundColor: "transparent",
    },
    text: {
      padding: "6px 8px",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
}));

const TextButton = (props) => {
  const classes = useStyles();

  return (
    <Button
      variant='text'
      disableRipple
      disableFocusRipple
      classes={{ root: classes.root, text: classes.text }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
export default React.memo(TextButton);

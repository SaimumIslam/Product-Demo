import React from "react";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      color: theme.palette.action.hover,
    },
  },
}));

const LinkButton = (props) => {
  const classes = useStyles();

  return (
    <Link
      component='button'
      variant='body2'
      color='inherit'
      underline='none'
      classes={{ root: classes.root }}
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default React.memo(LinkButton);

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import { Slide, Fade } from "@material-ui/core";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import TextButton from "../../../components/basic/buttons/TextButton";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
    },
  },
}));

const DrawerList = (props) => {
  const { anchor, productsItem, navOptions, toggleDrawer, ...rest } = props;
  const classes = useStyles();
  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role='presentation'
      onKeyDown={toggleDrawer(anchor, false)}
      {...rest}
    >
      <div className={classes.drawerHeader}>
        <TextButton
          size='small'
          startIcon={<CloseIcon />}
          onClick={toggleDrawer(anchor, false)}
        >
          Close
        </TextButton>
      </div>
      <Divider />
      <List dense>
        {productsItem.map((el) => (
          <ListItem
            button
            key={el.label}
            classes={{ button: classes.button }}
            onClick={el.onClick}
          >
            <ListItemText primary={el.label} />
            <NavigateNextIcon />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {navOptions.map((el) => (
          <ListItem dense key={el.label}>
            <TextButton startIcon={el.icon}>{el.label}</TextButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default React.memo(DrawerList);

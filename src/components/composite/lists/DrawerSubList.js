import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Slide, Fade } from "@material-ui/core";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
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

const DrawerSubList = (props) => {
  const {
    anchor,
    productsItem,
    toggleDrawer,
    isSubDrawer,
    setIsSubDrawer,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <Slide
      direction='left'
      in={Boolean(isSubDrawer)}
      mountOnEnter
      timeout={400}
      {...rest}
    >
      <div>
        <Fade in={Boolean(isSubDrawer)} timeout={400}>
          <div
            className={clsx(classes.list, {
              [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role='presentation'
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <div className={classes.drawerHeader}>
              <TextButton
                size='small'
                startIcon={<NavigateBeforeIcon />}
                onClick={() => {
                  setIsSubDrawer(false);
                }}
              >
                Back
              </TextButton>
            </div>
            <Divider />
            <List dense>
              {productsItem.map((el) => (
                <ListItem
                  button
                  key={el.name}
                  classes={{ button: classes.button }}
                >
                  {el.name !== null ? (
                    <React.Fragment>
                      <ListItemText primary={el.name} />
                      <NavigateNextIcon />
                    </React.Fragment>
                  ) : null}
                </ListItem>
              ))}
            </List>
          </div>
        </Fade>
      </div>
    </Slide>
  );
};

export default React.memo(DrawerSubList);

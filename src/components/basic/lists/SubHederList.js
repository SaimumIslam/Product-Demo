import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkButton from "../buttons/LinkButton";

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    "&focusVisible": {
      backgroundColor: theme.palette.action.selected,
    },
    "&selected, &selected:hover": {
      backgroundColor: theme.palette.action.selected,
    },
  },
  button: {
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.action.hover,
    },
  },
}));

const SubHeaderList = (props) => {
  const classes = useStyles();
  const { listItems, subHeader, ...rest } = props;

  return (
    <List
      dense
      subheader={
        <ListSubheader>
          <LinkButton> {subHeader}</LinkButton>
        </ListSubheader>
      }
      {...rest}
    >
      {listItems.map((listElemet, index) => (
        <ListItem
          key={listElemet.name}
          dense
          button
          classes={{ button: classes.button, root: classes.listItem }}
        >
          <ListItemText primary={listElemet.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default React.memo(SubHeaderList);

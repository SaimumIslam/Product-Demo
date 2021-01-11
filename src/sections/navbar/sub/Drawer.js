import React, { forwardRef, useImperativeHandle } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import CompareIcon from "@material-ui/icons/Compare";
import PersonIcon from "@material-ui/icons/Person";
import TuneIcon from "@material-ui/icons/Tune";

import DrawerList from "../../../components/composite/lists/DrawerList";
import DrawerSubList from "../../../components/composite/lists/DrawerSubList";
import {
  accesories,
  electronics,
  automobiles,
  computers,
  phones as smartphones,
  lifestyle,
} from "../../../data/menus/navItems";

const Drawer = forwardRef((props, ref) => {
  const anchor = props.anchor;
  const [subDrawerContent, setSubDrawerContent] = React.useState(null);
  const [isSubDrawer, setIsSubDrawer] = React.useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useImperativeHandle(ref, () => ({
    openDrawer() {
      setState((prevState) => ({
        ...prevState,
        [anchor]: true,
      }));
    },
  }));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState((prevState) => ({
      ...prevState,
      [anchor]: open,
    }));
    setSubDrawerContent(null);
    setIsSubDrawer(false);
  };

  const navOptions = [
    { label: "Sign In", icon: <PersonIcon /> },
    { label: "Compare", icon: <CompareIcon /> },
    { label: "Settings", icon: <TuneIcon /> },
  ];

  const productsItem = [
    {
      label: "Smartphones",
      onClick: () => {
        setSubDrawerContent(smartphones);
        setIsSubDrawer(true);
      },
    },
    {
      label: "Computers",
      onClick: () => {
        setSubDrawerContent(computers);
        setIsSubDrawer(true);
      },
    },
    {
      label: "Accessories",
      onClick: () => {
        setSubDrawerContent(accesories);
        setIsSubDrawer(true);
      },
    },
    {
      label: "Electronics",
      onClick: () => {
        setSubDrawerContent(electronics);
        setIsSubDrawer(true);
      },
    },
    {
      label: "Automobiles",
      onClick: () => {
        setSubDrawerContent(automobiles);
        setIsSubDrawer(true);
      },
    },

    {
      label: "LifeStyle",
      onClick: () => {
        setSubDrawerContent(lifestyle);
        setIsSubDrawer(true);
      },
    },
  ];

  const list = (anchor) => (
    <DrawerList
      anchor={anchor}
      productsItem={productsItem}
      navOptions={navOptions}
      toggleDrawer={toggleDrawer}
    />
  );

  const SubList = (anchor) => (
    <DrawerSubList
      anchor={anchor}
      productsItem={subDrawerContent}
      toggleDrawer={toggleDrawer}
      isSubDrawer={isSubDrawer}
      setIsSubDrawer={setIsSubDrawer}
    />
  );

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
      onOpen={toggleDrawer(anchor, true)}
    >
      {isSubDrawer ? SubList(anchor) : list(anchor)}
    </SwipeableDrawer>
  );
});

export default React.memo(Drawer);

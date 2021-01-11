import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Hoverpop from "../../../components/basic/popover/Hoverpop";
import LinkButton from "../../../components/basic/buttons/LinkButton";

// import Accesories from "../../../features/nav_items/desktop/Accesories";
// import Automobiles from "../../../features/nav_items/desktop/Automobiles";
// import Computers from "../../../features/nav_items/desktop/Computers";
// import Electronics from "../../../features/nav_items/desktop/Electronics";
// import LifeStyle from "../../../features/nav_items/desktop/LifeStyle";
// import Phones from "../../../features/nav_items/desktop/Phones";

import {
  accesories,
  electronics,
  automobiles,
  computers,
  phones,
  lifestyle,
} from "../../../data/menus/navItems";
import NavHoverList from "../../../components/composite/lists/NavHoverLIst";

import {
  usePopupState,
  bindHover,
  bindPopover,
} from "material-ui-popup-state/hooks";

const useStyles = makeStyles((theme) => ({
  ItemRoot: {
    display: "flex",
    justifyContent: "flex-start",
  },
  textItems: {
    paddingRight: theme.spacing(2),
    paddingBottom: 4,
  },
}));

const NavItems = (props) => {
  const classes = useStyles();
  const [popoverContent, setPopoverContent] = React.useState("home");

  const popupHoverState = usePopupState({
    variant: "popover",
    popupId: "hoverPopover",
  });

  const productsItem = [
    {
      label: "Smartphones",
      onHover: () => {
        setPopoverContent(<NavHoverList productsLists={phones} />);
      },
    },
    {
      label: "Computers",
      onHover: () => {
        setPopoverContent(<NavHoverList productsLists={computers} />);
      },
    },
    {
      label: "Electronics",
      onHover: () => {
        setPopoverContent(<NavHoverList productsLists={electronics} />);
      },
    },
    {
      label: "Accessories",
      onHover: () => {
        setPopoverContent(<NavHoverList productsLists={accesories} />);
      },
    },
    {
      label: "Automobiles",
      onHover: () =>
        setPopoverContent(<NavHoverList productsLists={automobiles} />),
    },
    {
      label: "LifeStyle",
      onHover: () =>
        setPopoverContent(<NavHoverList productsLists={lifestyle} />),
    },
  ];

  return (
    <div className={classes.ItemRoot}>
      {productsItem.map((el) => (
        <LinkButton
          key={el.label}
          className={classes.textItems}
          {...bindHover(popupHoverState)}
          onMouseOver={el.onHover}
        >
          {el.label}
        </LinkButton>
      ))}
      <Hoverpop {...bindPopover(popupHoverState)} anchor='left'>
        {popoverContent}
      </Hoverpop>
    </div>
  );
};

export default React.memo(NavItems);

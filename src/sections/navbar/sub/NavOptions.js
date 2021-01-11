import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PersonIcon from "@material-ui/icons/Person";
import CompareIcon from "@material-ui/icons/Compare";
import TuneIcon from "@material-ui/icons/Tune";

import Navpop from "../../../components/basic/popover/Navpop";
import ButtonIcon from "../../../components/basic/buttons/ButtonIcon";
import TooltipCustom from "../../../components/basic/tooltips/TooltipCustom";

import {
  bindTrigger,
  usePopupState,
  bindPopover,
} from "material-ui-popup-state/hooks";

const useStyles = makeStyles((theme) => ({
  navIcons: {
    display: "flex",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      marginRight: theme.spacing(4),
    },
  },
}));

const NavOptions = (props) => {
  const classes = useStyles();

  const popupClickState = usePopupState({
    variant: "popover",
    popupId: "clickPopover",
  });

  const navOptions = [
    { label: "Sign In", icon: <PersonIcon />, onClick: () => {} },
    { label: "Settings", icon: <TuneIcon />, onClick: () => {} },
  ];

  return (
    <div className={classes.navIcons}>
      <TooltipCustom title='Compare' arrow>
        <div>
          <ButtonIcon>
            <CompareIcon />
          </ButtonIcon>
        </div>
      </TooltipCustom>
      {navOptions.map((el) => (
        <TooltipCustom key={el.label} title={el.label} arrow>
          <div>
            <ButtonIcon onClick={el.onClick} {...bindTrigger(popupClickState)}>
              {el.icon}
            </ButtonIcon>
          </div>
        </TooltipCustom>
      ))}
      <Navpop {...bindPopover(popupClickState)} anchor='right'>
        <div style={{ width: 200, height: 300 }}>{""}</div>
      </Navpop>
    </div>
  );
};

export default React.memo(NavOptions);

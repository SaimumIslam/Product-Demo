import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

import ButtonIcon from "../../../components/basic/buttons/ButtonIcon";

const useStyles = makeStyles((theme) => ({
  searchRoot: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(1),
    },
  },
  search: {
    borderRadius: 5,
    backgroundColor: theme.palette.grey[100],
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
    },
  },

  inputRoot: {
    color: "inherit",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: theme.spacing(1),

    transition: theme.transitions.create("width"),
    width: "20vw",
    "&:focus": {
      width: "30vw",
      paddingLeft: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
      width: "20ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const NavSearch = (props) => {
  const classes = useStyles();

  const { openSearch, setOpenSearch } = props;

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  return (
    <div className={classes.searchRoot}>
      <ClickAwayListener onClickAway={handleCloseSearch}>
        <div className={classes.search}>
          <InputBase
            onFocus={handleOpenSearch}
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            endAdornment={
              <InputAdornment position='end'>
                <ButtonIcon aria-label='search'>
                  <SearchIcon />
                </ButtonIcon>
              </InputAdornment>
            }
          />
        </div>
      </ClickAwayListener>
      <Hidden smUp>
        {openSearch ? (
          <ButtonIcon onClick={handleCloseSearch}>
            <CloseIcon />
          </ButtonIcon>
        ) : null}
      </Hidden>
    </div>
  );
};

export default React.memo(NavSearch);

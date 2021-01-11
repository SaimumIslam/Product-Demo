import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";

import LinkButton from "../../components/basic/buttons/LinkButton";

import Drawer from "./sub/Drawer";
import NavItems from "./sub/NavItems";
import NavOptions from "./sub/NavOptions";
import NavSearch from "./sub/NavSearch";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(2),
    },
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  breadCumbs: {},
}));

const Navbar = (props) => {
  const { isLinks } = props;
  const childRef = useRef(null);
  const classes = useStyles();
  const [openSearch, setOpenSearch] = React.useState(false);

  const toggleDrawer = () => {
    childRef.current.openDrawer();
  };

  return (
    <React.Fragment>
      <AppBar color='inherit' elevation={0}>
        <Toolbar variant='dense' style={{ minHeight: 0, marginTop: 10 }}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Hidden xsDown={openSearch}>
            <LinkButton
              className={classes.title}
              variant='h6'
              noWrap
            >
              App Title
            </LinkButton>
          </Hidden>

          <div className={classes.grow} />
          <NavSearch openSearch={openSearch} setOpenSearch={setOpenSearch} />

          <div className={classes.sectionDesktop}>
            <NavOptions />
          </div>
        </Toolbar>
        <Toolbar
          style={{ minHeight: 0, marginBottom: 2 }}
          className={classes.sectionDesktop}
        >
          <NavItems />
        </Toolbar>
        {isLinks ? (
          <Toolbar style={{ minHeight: 0, backgroundColor: "#fafafa" }}>
            <Breadcrumbs aria-label='breadcrumb' className={classes.breadCumbs}>
              <LinkButton variant='caption'>Material-UI</LinkButton>
              <LinkButton variant='caption'>Core</LinkButton>
              <Link color='textPrimary' variant='caption' underline='none'>
                Breadcrumb
              </Link>
            </Breadcrumbs>
          </Toolbar>
        ) : null}
      </AppBar>
      <Toolbar />
      <Drawer anchor='left' ref={childRef} />
    </React.Fragment>
  );
};

export default React.memo(Navbar);

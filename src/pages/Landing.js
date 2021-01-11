import React, { Fragment } from "react";
import { CssBaseline } from "@material-ui/core";
import Navbar from "../sections/navbar/Navbar";
import BackgroundCover from "../components/css/background/ResponsiveBackground";
import ItemGridList from "../sections/landing/ItemGridList";
import ProductGridList from "../sections/landing/ProductGridList";
import HoverButton from "../components/css/buttons/hover/Hover";

const Landing = () => {
  return (
    <Fragment>
      <Navbar isLinks={false} />
      <CssBaseline />
      <BackgroundCover />

      <CssBaseline />
      <ItemGridList />

      <CssBaseline />
      <ProductGridList />

      <CssBaseline />
      <HoverButton />
    </Fragment>
  );
};

export default React.memo(Landing);

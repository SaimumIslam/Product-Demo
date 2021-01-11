import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ImageButton from "../../components/composite/buttons/ImageButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
}));

const products = [
  {
    img: require("../../asset/back.jpg"),
    title: "Smartphones",
  },
  {
    img: require("../../asset/cover.jpg"),
    title: "Computers",
  },
  {
    img: require("../../asset/sample.jpg"),
    title: "Electronics",
  },
  {
    img: require("../../asset/cover.jpg"),
    title: "Accessories",
  },
  {
    img: require("../../asset/back.jpg"),
    title: "Automobiles",
  },
  {
    img: require("../../asset/sample.jpg"),
    title: "Lifestyles",
  },
];

const ProductGridList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify='center'>
        {products.map((el) => (
          <Grid item xs={6} sm={4} key={el.title}>
            <ImageButton image={el.img} title={el.title} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default React.memo(ProductGridList);

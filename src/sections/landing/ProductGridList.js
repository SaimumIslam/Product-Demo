import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ProductCard from "../../components/composite/cards/ProductCard";
import LinkButton from "../../components/basic/buttons/LinkButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
}));

const products = [
  {
    images: [
      require("../../asset/back.jpg"),
      require("../../asset/cover.jpg"),
      require("../../asset/sample.jpg"),
    ],
    title: "Smartphones",
    price: "200.00",
  },
  {
    images: [
      require("../../asset/sample.jpg"),
      require("../../asset/back.jpg"),
      require("../../asset/cover.jpg"),

    ],
    title: "Computers",
    price: "300.00",
  },
  {
    images: [
      require("../../asset/cover.jpg"),
      require("../../asset/back.jpg"),
      require("../../asset/sample.jpg"),
    ],
    title: "Electronics",
    price: "400.00",
  },
  {
    images: [
      require("../../asset/back.jpg"),
      require("../../asset/sample.jpg"),
      require("../../asset/cover.jpg"),
    ],
    title: "Accessories",
    price: "240.00",
  },
  {
    images: [
      require("../../asset/sample.jpg"),
      require("../../asset/cover.jpg"),
      require("../../asset/back.jpg"),
    ],
    title: "Automobiles",
    price: "450.00",
  },
  {
    images: [
      require("../../asset/cover.jpg"),
      require("../../asset/sample.jpg"),
      require("../../asset/back.jpg"),
    ],
    title: "Lifestyles",
    price: "100.00",
  },
  {
    images: [
      require("../../asset/back.jpg"),
      require("../../asset/sample.jpg"),
      require("../../asset/cover.jpg"),
    ],
    title: "NewCard",
    price: "245.00",
  },
  {
    images: [
      require("../../asset/cover.jpg"),
      require("../../asset/back.jpg"),
      require("../../asset/sample.jpg"),
    ],
    title: "OldCard",
    price: "453.00",
  },
];

const ProductGridList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinkButton>
        <h1>Mobiles </h1>
      </LinkButton>
      <Grid container spacing={2} justify='center'>
        {products.map((el) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={el.title}>
            <ProductCard product={el} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default React.memo(ProductGridList);

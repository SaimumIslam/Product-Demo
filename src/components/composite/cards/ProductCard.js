import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TooltipCustom from "../../basic/tooltips/TooltipCustom";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    borderRadius: ` 10%`
  },
  cardHeader: {
    padding: theme.spacing(1),
  },
  media: {
    height: "50vh",
  },
  smallImage: {
    height: theme.spacing(5),
    width: theme.spacing(5),
    margin: theme.spacing(0.5),
    border: "3px solid #fff",
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      borderColor: theme.palette.action.hover,
      transform: `scale(1.2)`,
      zIndex: theme.spacing(10),
    },
  },
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  cardActions: {
    padding: theme.spacing(0, 1),
  },
  button: {
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  subheader: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
  },
}));

const Price = React.memo((props) => {
  return (
    <React.Fragment>
      <AttachMoneyIcon />
      <Typography component='h1'>{props.children}</Typography>
    </React.Fragment>
  );
});

export default function ProductCard(props) {
  const { images, title, price } = props.product;
  const [image, setImage] = React.useState(images[0]);
  const classes = useStyles();

  const handleImage = (img) => {
    setImage(img);
  };

  return (
    <Card classes={{ root: classes.card }}>
      <CardMedia className={classes.media} image={image} />
      <CardHeader
        classes={{ root: classes.cardHeader, subheader: classes.subheader }}
        title={title}
        subheader={<Price>{price}</Price>}
        action={
          <TooltipCustom title='quick view' white placement='left' arrow>
            <IconButton color='secondary'>
              <VisibilityIcon />
            </IconButton>
          </TooltipCustom>
        }
      />
      <CardContent classes={{ root: classes.cardContent }}>
        {images.map((img) => (
          <CardMedia
            onClick={() => handleImage(img)}
            key={img}
            classes={{ root: classes.smallImage }}
            image={img}
          />
        ))}
      </CardContent>
      <CardActions disableSpacing classes={{ root: classes.cardActions }}>
        <IconButton color='secondary'>
          <FavoriteIcon />
        </IconButton>
        <IconButton color='secondary'>
          <ShareIcon />
        </IconButton>
        <Button
          variant='outlined'
          color='secondary'
          size='small'
          className={classes.button}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

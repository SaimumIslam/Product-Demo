import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  image: {
    position: "relative",
    height: 200,
    width: "100%",
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageTitle": {
        border: "4px solid",
        // borderColor: theme.palette.action.hover,
        // color: theme.palette.text.primary,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: theme.spacing(1, 2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
}));

const ImageButton = (props) => {
  const { image, title } = props;
  const classes = useStyles();

  return (
    <ButtonBase
      focusRipple
      key={title}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Typography
          component='span'
          variant='subtitle1'
          color='inherit'
          className={classes.imageTitle}
        >
          {title}
        </Typography>
      </span>
    </ButtonBase>
  );
};

export default React.memo(ImageButton);

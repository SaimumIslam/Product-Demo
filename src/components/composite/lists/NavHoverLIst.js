import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SubHederList from "../../basic/lists/SubHederList";

const useStyles = makeStyles((theme) => ({
  side: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

const NavHoverList = (props) => {
  const classes = useStyles();
  const { productsLists, ...rest } = props;

  return (
    <div className={classes.side} {...rest}>
      {productsLists.map((el, index) => (
        <div key={index}>
          {el.name ? (
            <SubHederList listItems={el.listItems} subHeader={el.name} />
          ) : (
            <SubHederList listItems={el.listItems} subHeader='&nbsp;' />
          )}
        </div>
      ))}
    </div>
  );
};
export default React.memo(NavHoverList);

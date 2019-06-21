import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={props.onPlus1}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        +1
      </Button>
      <Button
        onClick={props.onMinus1}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        -1
      </Button>
      <Button
        onClick={props.onPlusInput}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        +Input
      </Button>
      <Button
        onClick={props.onMinusInput}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        -Input
      </Button>
    </div>
  );
}

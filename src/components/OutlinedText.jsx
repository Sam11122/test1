import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));
function TextFields(props) {
  const classes = useStyles();

  //const handleChange = name => event => {
  //setValues({ ...values, [name]: event.target.value });
  //};

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label={"Enter an integer:"}
          className={classes.textField}
          onChange={props.onChange}
          margin="normal"
          autoFocus={true}
          variant="outlined"
        />
      </form>
    </div>
  );
}

export default TextFields;

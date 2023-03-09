import React from "react";
import { Typography, Button, Container } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "red",
    fontSize: 100,
  },
  title: {
    fontSize: 600,
  },
});

function Create() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        component={`h2`}
        gutterBottom
        color={`textSecondary`}
      >
        Create a new Note
      </Typography>
      <Button
        className={classes.btn}
        onClick={() => console.log("you clicked me")}
        type="submit"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}

export default Create;

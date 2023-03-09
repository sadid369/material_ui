import React from "react";
import { Typography, Button, Container } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";
// import { styled } from "@mui/system";
const useStyles = makeStyles({
  btn: {
    backgroundColor: "violet",
    fontSize: 6,
    "&:hover": {
      backgroundColor: "red",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
});

function Create() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        variant="h6"
        component={`h2`}
        gutterBottom
        color={`textSecondary`}
        className={classes.title}
      >
        Create a new Note
      </Typography>
      <Button
        // className={classes.btn}
        color="secondary"
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

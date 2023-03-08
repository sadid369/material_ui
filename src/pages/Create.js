import React from "react";
import { Typography, Button, Container } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component={`h2`}
        gutterBottom
        color={`textSecondary`}
      >
        Create a new Note
      </Typography>
      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}

export default Create;

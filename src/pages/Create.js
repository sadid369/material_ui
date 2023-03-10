import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Box,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { makeStyles } from "@mui/styles";
// import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

function Create() {
  const classes = useStyles();
  const history = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8005/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => {
        history("/");
      });
    }
  };
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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label={`Note Title`}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          margin={`normal`}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label={`Details`}
          multiline
          rows={4}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          margin={`normal`}
          error={detailsError}
          className={classes.field}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <FormControl className={classes.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                value={`money`}
                control={<Radio />}
                label="Money"
              />
              <FormControlLabel
                value={`todos`}
                control={<Radio />}
                label="Todos"
              />
              <FormControlLabel
                value={`remainders`}
                control={<Radio />}
                label="Reminders"
              />
              <FormControlLabel
                value={`work`}
                control={<Radio />}
                label="Work"
              />
            </RadioGroup>
          </FormControl>
          <Button
            // className={classes.btn}
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            display="block"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default Create;

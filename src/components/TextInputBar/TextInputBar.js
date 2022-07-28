import { useState } from "react";
import {useDispatch} from "react-redux";
import { addReverseText } from "../../redux/reverseTextSlice";
import { Box, TextField, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export default function TextInputBar() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setError("")
    setInput(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (input.length < 1) {
      setError("Write some text before send please");
    } else {
      dispatch(addReverseText(input));
      setInput("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "pink",
      }}
      color="transparent"
    >
      <Box
        component="form"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={1}
      >
        <TextField
          type="text"
          color="info"
          id="enter-text"
          label="Enter text to reverse"
          variant="outlined"
          sx={{ width: "80%", marginRight: "1rem" }}
          value={input}
          onChange={handleChange}
          onKeyDown={handleEnter}
          error={error !== ""}
          helperText={error}
        ></TextField>
        <Button color="info" variant="contained" onClick={handleSubmit}>
          Send
        </Button>
      </Box>
    </AppBar>
  );
}

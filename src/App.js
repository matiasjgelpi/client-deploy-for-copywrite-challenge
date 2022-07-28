import "./App.css";
import { Box } from "@mui/system";
import Results from "./components/Results/Results";
import TextInputBar from "./components/TextInputBar/TextInputBar";

function App() {
  return (
    <Box>
      <TextInputBar />
      <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Results />
      </Box>
    </Box>
  );
}

export default App;

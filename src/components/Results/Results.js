import { Box } from "@mui/system";
import { Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Results() {
  const results = useSelector((state) => state.reversedTexts.listOfReverseText);

  return (
    <>
     {results.length < 1 ? 
     <Typography variant="h3" component="p" margin="2rem">Todavía no ingresaste ningún texto</Typography> :
      <Box
        margin={2}
        height="85vh"
        width="90vw"
        borderRadius="5px"
        sx={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          border: "0.5px outset grey",
          boxShadow: "10px 10px 10px grey",
        }}
      >
        <Box>
            <Typography variant="h3" component="p" margin="1rem">Results:</Typography>
        </Box>
          {results.map((result, index) => {
            return (
              <Card
                key={index}
                sx={{
                  border: "1px solid grey",
                  margin: "4px",
                  textAlign: "center",
                 
                }}
              >
                <CardContent 
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                >
                  <Typography variant="body1" component="span">
                    Texto revertido: <Typography variant="h6" component="span">{result.text}</Typography>
                  </Typography>
                  <Typography variant="h5" component="span">
                    {result.palindrome ? "Si" : "No"} es Palindromo
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </Box>
}
    </>
  );
}

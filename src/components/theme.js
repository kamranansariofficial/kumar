import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0DA1DA",
      contrastText: "#fff",
    },
    secondary: {
      main: "#5b6266",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

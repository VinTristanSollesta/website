import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004E90",
    },
    secondary: {
      main: "#007CBA",
    },
    warning: {
      main: "#F7C301",
    },
    error: {
      main: "#DA251C",
    },
    background: {
      default: "#FFFFFF",
      paper: "#000000",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;

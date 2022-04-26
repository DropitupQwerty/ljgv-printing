import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5D3FD3",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Open Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
});

export default theme;

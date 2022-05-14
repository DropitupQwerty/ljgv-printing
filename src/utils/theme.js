import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5D3FD3",
    },
    secondary: {
      main: "#333",
    },
    dashboard: {
      bg1: "#947EC3",
      bg2: "#B689C0",
      bg3: "#EC994B",
    },
    text: {
      t1: "#333",
      t2: "#fff",
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

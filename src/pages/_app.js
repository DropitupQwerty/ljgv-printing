import theme from "../utils/theme";
import "../styles/globals.css";

import { ThemeProvider, CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

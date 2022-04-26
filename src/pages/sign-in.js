import {
  Box,
  Paper,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);
  const messageInitialState = {
    text: "",
    severity: "success",
  };
  const [message, setMessage] = useState(messageInitialState);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (prop) => (e) => {
    setState((prevItem) => ({
      ...prevItem,
      [prop]: e.target.value,
    }));
  };

  const signIn = () => {
    const admin = "j@email.com";
    const password = "jacob123";

    if (state.email === admin && state.password === password) {
      setMessage({
        text: "Login Succesfully",
        severity: "success",
      });
      setOpen(true);
    } else if (state.email.length === 0 || state.password.length === 0) {
      setMessage({
        text: "Input something in password or email BAKAA!!!",
        severity: "warning",
      });
      setOpen(true);
    } else {
      setMessage({
        text: "Error Desu . Bakaa!!!",
        severity: "error",
      });
      setOpen(true);
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "24px",
          display: " flex ",
          flexDirection: "Column",
          marginTop: "1rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "1rem", fontWeight: "700", textAlign: "center" }}
        >
          User Login
        </Typography>
        <TextField
          label="Email Address"
          name="email"
          type="email"
          onChange={handleChange("email")}
        ></TextField>
        <TextField
          label="Password"
          name="password"
          type="password"
          sx={{ marginTop: "1rem" }}
          onChange={handleChange("password")}
        ></TextField>

        <Button variant="contained" sx={{ marginTop: "1rem" }} onClick={signIn}>
          Sign In
        </Button>
        <Typography
          sx={{
            color: "dodgerblue",
            marginTop: "1rem",
            textAlign: "right",
            fontSize: ".8rem",
          }}
        >
          <Link href="/register">Create Account?</Link>
        </Typography>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity={message.severity} onClose={handleClose}>
          {message.text}
        </Alert>
      </Snackbar>
    </Box>
  );
}

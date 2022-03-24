import { Box, Paper, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function Register() {
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
      <Typography variant="h4" sx={{ color: "#333", fontWeight: "700" }}>
        Register User
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: "24px",
          display: " flex ",
          flexDirection: "Column",
          marginTop: "1rem",
        }}
      >
        <TextField label="Email Address" name="email" type="email"></TextField>
        <TextField
          label="Password"
          name="password"
          type="password"
          sx={{ marginTop: "1rem" }}
        ></TextField>
        <TextField
          label="Confirm Password"
          name="ConfimPassword"
          type="password"
          sx={{ marginTop: "1rem" }}
        ></TextField>
        <Button variant="contained" sx={{ marginTop: "1rem" }}>
          Register Account
        </Button>
        <Box sx={{ display: "flex" }}>
          <Typography>Already have Account?</Typography>

          <Typography sx={{ color: "dodgerblue" }}>
            <Link href="/SignIn">Sign In</Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

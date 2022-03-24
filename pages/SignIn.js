import { Box, Paper, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
export default function SignIn() {
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
        User Login
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

        <Button variant="contained" sx={{ marginTop: "1rem" }}>
          Register
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
    </Box>
  );
}

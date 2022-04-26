import { Box, Paper, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const style = {
  linkStyle: {
    fontSize: ".8rem",
  },
};
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
          sx={{ fontWeight: "700", marginBottom: "1rem", textAlign: "center" }}
        >
          Register User
        </Typography>
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
        <Box sx={{ marginTop: "1rem" }}>
          <Typography sx={{ textAlign: "right", fontSize: ".8rem" }}>
            Already have Account?
            <Typography
              sx={{
                color: "dodgerblue",
                marginLeft: ".2rem",
                fontSize: " .8rem",
              }}
            >
              <Link href="/sign-in"> Sign In</Link>
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

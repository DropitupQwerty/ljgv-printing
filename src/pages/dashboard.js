import { Box, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import AdminLayout from "../components/AdminLayout";
import theme from "../utils/theme";

export default function Dashboard() {
  const style = {
    paper1: {
      color: (theme) => theme.palette.text.t2,
      padding: "24px",
      backgroundColor: (theme) => theme.palette.dashboard.bg1,
    },

    paper2: {
      color: (theme) => theme.palette.text.t2,
      padding: "24px",
      backgroundColor: (theme) => theme.palette.dashboard.bg2,
    },
    paper3: {
      color: (theme) => theme.palette.text.t2,
      padding: "24px",
      backgroundColor: (theme) => theme.palette.dashboard.bg3,
    },
    BoldText: {
      fontWeight: "700",
    },
  };

  return (
    <Box sx={{ padding: "0 24px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm>
          <Paper sx={style.paper1}>
            <Typography variant="h6"> Users</Typography>
            <Typography variant="h4" sx={style.BoldText}>
              {" "}
              299
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm>
          <Paper sx={style.paper2}>
            <Typography variant="h6"> Appointments</Typography>
            <Typography variant="h4" sx={style.BoldText}>
              {" "}
              12
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm>
          <Paper sx={style.paper3}>
            <Typography variant="h6"> Orders</Typography>
            <Typography variant="h4" sx={style.BoldText}>
              {" "}
              10
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

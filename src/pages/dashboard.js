import { Box, Grid, Typography, Paper } from "@mui/material";
import AdminLayout from "../components/AdminLayout";
import Image from "next/image";

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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/assets/svg/dashboard.svg"
          alt="dashboard"
          width={30}
          height={30}
        />
        <Typography variant="h5" sx={{ marginLeft: "12px" }}>
          Dashboard
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: "12px" }}>
        <Grid item xs={12} sm={4}>
          <Paper sx={style.paper1}>
            <Typography variant="h7"> Users</Typography>
            <Typography variant="h5" sx={style.BoldText}>
              {" "}
              299
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={style.paper2}>
            <Typography variant="h7"> Apointments</Typography>
            <Typography variant="h5" sx={style.BoldText}>
              15
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={style.paper3}>
            <Typography variant="h7"> Orders</Typography>
            <Typography variant="h5" sx={style.BoldText}>
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

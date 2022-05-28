import { Box, Typography } from '@mui/material';
import AdminLayout from "../../components/AdminLayout";

export default function Settings() {
  return (
    <Box>
      <Typography>Settings</Typography>
    </Box>
  );
}
Settings.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

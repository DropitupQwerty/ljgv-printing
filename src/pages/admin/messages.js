import { Box, Typography } from '@mui/material';
import React from 'react';
import AdminLayout from "../../components/AdminLayout";

export default function Messages() {
  return (
    <Box>
      <Typography>Messages page </Typography>
    </Box>
  );
}
Messages.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

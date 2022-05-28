import { Box } from '@mui/material';
import React from 'react';

export default function UserLayout({ children }) {
  return (
    <Box>
      <div>UserLayout</div>
      <Box>{children}</Box>
    </Box>
  );
}

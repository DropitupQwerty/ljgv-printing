import { AppBar, Box } from '@mui/material';
import React from 'react';
import Image from 'next/image';

export default function LoginRegisterAB({ children }) {
  return (
    <Box>
      <AppBar>
        <Image
          src="../../assets/svg/logo.svg"
          alt="LOGO"
          width="200px"
          height="100px"
        ></Image>
      </AppBar>

      <Box sx={{ marginTop: '100px' }}>{children}</Box>
    </Box>
  );
}

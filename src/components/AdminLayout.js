import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  Avatar,
  Tooltip,
  Button,
} from '@mui/material';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';

export default function AdminLayout({ children }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const setDrawerOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const drawerGotoPage = (url) => {
    setOpen(false);
    router.push(url);
  };

  const drawerWidth = 200;
  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  return (
    <Box>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AppBar open={open} elevation={1} sx={{ color: '#fff' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={setDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ marginLeft: '1rem' }}>
            LJGV Printing Shop
          </Typography>
        </Toolbar>
      </AppBar>
      {/*  */}
      {/*  */}
      <Drawer anchor="left" open={open} variant="persistent">
        <Box
          sx={{
            minWidth: '200px',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            color: '#F66B0E',
          }}
        >
          <DrawerHeader sx={{ background: '#F66B0E' }}>
            <Button
              aria-label="back-btn"
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                margin: '0',
              }}
            >
              <Image
                src="../assets/svg/angleLeft.svg"
                alt="angleLeft"
                height={20}
                width={20}
                onClick={handleClose}
              />
            </Button>
          </DrawerHeader>

          <List sx={{ flexGrow: '1' }}>
            <ListItem
              button
              onClick={() => drawerGotoPage('/admin/')}
              selected={router.pathname.includes('/admin/index.js')}
            >
              <ListItemIcon>
                <Image
                  src="../assets/svg/dashboard.svg"
                  alt="dashboard"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem
              button
              onClick={() => drawerGotoPage('/admin/users')}
              selected={router.pathname.includes('/admin/users')}
            >
              <ListItemIcon>
                <Image
                  src="../assets/svg/users.svg"
                  alt="users"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem
              button
              onClick={() => drawerGotoPage('/admin/messages')}
              selected={router.pathname.includes('/admin/messages')}
            >
              <ListItemIcon>
                <Image
                  src="../assets/svg/chat.svg"
                  alt="chats"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
            <ListItem
              button
              onClick={() => drawerGotoPage('/admin/appointment')}
              selected={router.pathname.includes('/admin/appointment')}
            >
              <ListItemIcon>
                <Image
                  src="../assets/svg/appointment.svg"
                  alt="appointments"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Appointments" />
            </ListItem>
            <ListItem
              button
              onClick={() => drawerGotoPage('/admin/settings')}
              selected={router.pathname.includes('/admin/settings')}
            >
              <ListItemIcon>
                <Image
                  src="../assets/svg/settings.svg"
                  alt="Settings"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
          <ListItem button>
            <ListItemIcon>
              <Image
                src="../assets/svg/signout.svg"
                alt="SignOut"
                width="20"
                height={20}
              />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </Box>
      </Drawer>

      <Box sx={{ marginTop: '90px' }}>
        <Main open={open}>
          <Box sx={{ marginLeft: '200px' }}>{children}</Box>
        </Main>
      </Box>
    </Box>
  );
}

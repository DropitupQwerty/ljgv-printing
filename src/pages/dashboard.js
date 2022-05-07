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
} from "@mui/material";
import Image from "next/image";
import Head from "next/head";

import { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  const setDrawerOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AppBar>
        <Toolbar>
          <IconButton onClick={setDrawerOpen}>
            <Image
              src="/assets/svg/bars.svg"
              alt="bars"
              width={30}
              height={30}
            />
          </IconButton>
          <Typography sx={{ marginLeft: "1rem" }}>
            LJGV MERCHANDISE ONLINE SHOP
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Box
          sx={{
            minWidth: "200px",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <Box sx={{ padding: "16px", display: "flex" }}>
            <Avatar />
            <Box sx={{ marginLeft: "8px" }}>
              <Tooltip title="JacobAllenValderama@gmail.com">
                <Typography color="secondary" noWrap sx={{ maxWidth: "150px" }}>
                  JacobAllenVaderama@gmail.com
                </Typography>
              </Tooltip>

              <Typography color="primary">Admin</Typography>
            </Box>
          </Box>
          <List sx={{ flexGrow: "1" }}>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/assets/svg/users.svg"
                  alt="users"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/assets/svg/chat.svg"
                  alt="chats"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/assets/svg/appointment.svg"
                  alt="appointments"
                  width="20"
                  height={20}
                />
              </ListItemIcon>
              <ListItemText primary="Appointments" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Image
                  src="/assets/svg/settings.svg"
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
                src="/assets/svg/signout.svg"
                alt="SignOut"
                width="20"
                height={20}
              />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </Box>
      </Drawer>
    </Box>
  );
}

import { Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import UserLayout from '../components/UserLayout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';

export default function Index() {
  const router = useRouter();
  const drawerGotoPage = (url) => {
    router.push(url);
  };

  return (
    <Box>
      <Box sx={{ width: '100vw', background: '#333' }}></Box>
      <Button onClick={() => drawerGotoPage('/admin')}> Click me</Button>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

Index.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

import { Button, Link } from '@mui/material';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  const drawerGotoPage = (url) => {
    router.push(url);
  };

  return <Button onClick={() => drawerGotoPage('/admin')}> Click me</Button>;
}

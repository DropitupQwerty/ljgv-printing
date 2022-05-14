import { Button, Link } from "@mui/material";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const drawerGotoPage = (url) => {
    router.push(url);
  };

  return (
    <Button onClick={() => drawerGotoPage("/dashboard")}> Click me</Button>
  );
}
{
  /* <Typography>
        this application helps LJGV merchandise for promoting their shops and
        every items that they sellings this shop also promoting{" "}
      </Typography> */
}

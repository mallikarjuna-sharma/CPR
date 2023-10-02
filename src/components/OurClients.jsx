import { Grid, Typography } from "@mui/material";

import clients from "../assests/clients.png";
import Image from "next/image";

export default function OurClient({ isMobile }) {
  return (
    <>
      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        width={"100%"}
        marginTop={"5%"}
      >
        <Typography variant="h3" color={"black"}>
          Our Clients
        </Typography>
        <Typography
          variant="h5"
          color={"black"}
          width={isMobile ? "100%" : "50%"}
          textAlign={"center"}
        >
          Client testimonials act as powerful social proof, convert prospective
          clients into buyers, and help ‘on the fence’ customers gain confidence
          about your product or service while increasing your brand’s
          credibility.
        </Typography>
      </Grid>
      <Grid item overflow={"scroll"}>
        <Image src={clients}></Image>
      </Grid>
    </>
  );
}

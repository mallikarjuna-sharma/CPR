import { Grid, Typography, Button } from "@mui/material";
import image1 from "../assests/image1.jpg";

import experience from "../assests/experience.png";
import Image from "next/image";

import StyledButton from "./StyledButton";

function About() {
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-evenly"}
      lg={12}
      style={{
        marginTop: "1%",
      }}
    >
      <Grid item lg={3}>
        <Image
          style={{
            maxWidth: "100%",
          }}
          src={experience}
          alt="hero-image"
        ></Image>
      </Grid>

      <Grid item lg={1}></Grid>
      <Grid item lg={4}>
        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
        >
          <Grid
            container
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant={"h3"} color={"black"}>
              About
            </Typography>
            <Typography variant={"h4"} color={"#00A0E1"}>
              CPR
            </Typography>
          </Grid>

          <Typography variant={"h6"} color={"black"}>
            Construction Professional Resources Pte. Ltd. (CPR has been a
            provider of quality scaffolding services since 2010. We first
            started off by offering contractors scaffold erectors, before moving
            on to providing tubular systems to clients who demanded safety. With
            adequate knowledge and experience in the Singapore's construction
            industry, we are moved to serve our clients with the best
            competitive construction services. Our construction services include
            Scaffolding services, Heavy Engineering Components Fabrication,
            Steel Structures and Steel construction turnkey projects.
          </Typography>
          <StyledButton name={"Read More"}></StyledButton>
        </Grid>
      </Grid>
      <Grid item lg={1}></Grid>
      <Grid item lg={3}>
        <Image
          src={image1}
          alt="hero-image"
          style={{
            maxWidth: "100%",
            maxHeight: "70vh",
          }}
        ></Image>
      </Grid>
    </Grid>
  );
}

export default About;

import { Button, Grid, Typography } from "@mui/material";
import style from "./styles.module.css";
import service1 from "../assests/service1.jpg";
import service2 from "../assests/service2.jpg";
import service3 from "../assests/service3.jpg";
import service4 from "../assests/service4.jpg";

import Grow from "@mui/material/Grow";

import "./Project.css";

import StyledButton from "./StyledButton";

import React, { useState, useEffect } from "react";

function ProjectsWork({ isMobile }) {

  const [isTrans, setIsTrans] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTrans(true);
    }, 10);
  }, []);

  const cardWidth = isMobile ? "100%" : "30vw";

  const ProjectCardDetails = () => {
    return (
      <Grid container height={"100%"} alignContent={"flex-end"}>
        <div
          style={{
            width: "65%",
            background: "white",
            color: "black",
            padding: "3%",
            borderTopRightRadius: "30px",
            borderBottomLeftRadius: "30px",
          }}
        >
          <h2>
            Tanjong Pagar Mixed Dept <br />
          </h2>
          <h4 style={{ color: "#b3a6a678" }}>
            Address: Newstreet 213 <br />
          </h4>
          <h4 style={{ color: "#b3a6a678" }}>Project Value: $2,910,00</h4>
          <div style={{ position: "relative" }}>
            <div className="round">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Grid>
    );
  };

  return (
    <>
      <Grid
        container
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        marginLeft={1}
        marginRight={1}
        id="project_card"
      >
        <Grid item lg={12}>
          <Typography variant="h3" color={"black"}>
            Projects
          </Typography>
        </Grid>

        <Grid item lg={12}>
          <Typography variant="h3" color={"black"}>
            Current Work
          </Typography>
        </Grid>

        <Grow
          in={isTrans}
          style={{ transformOrigin: "0 0 0" }}
          {...(isTrans ? { timeout: 1000 } : {})}
        >
          <Grid
            container
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid item width={cardWidth} className={style.project_card1}>
              <ProjectCardDetails />
            </Grid>
            <Grid item width={cardWidth} className={style.project_card2}>
              <ProjectCardDetails />
            </Grid>
          </Grid>
        </Grow>

        <Grid
          container
          flexDirection={!isMobile ? "row" : "column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item width={cardWidth} className={style.project_card3}>
            <ProjectCardDetails />
          </Grid>
          <Grid item width={cardWidth} className={style.project_card4}>
            <ProjectCardDetails />
          </Grid>
        </Grid>

        {/* <br /> */}

        <StyledButton name={"View Our Work"}></StyledButton>
      </Grid>
    </>
  );
}

export default ProjectsWork;

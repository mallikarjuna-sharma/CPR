import { Button, Grid, Typography } from "@mui/material";
import style from "./styles.module.css";
import service1 from "../assests/service1.jpg";
import service2 from "../assests/service2.jpg";
import service3 from "../assests/service3.jpg";
import service4 from "../assests/service4.jpg";

import "./Project.css";

import StyledButton from "./StyledButton";

function ProjectsWork({ styles }) {
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
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

        <Grid
          container
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item className={style.project_card1}>
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
          </Grid>
          <Grid item className={style.project_card2}></Grid>
        </Grid>

        <Grid
          container
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item className={style.project_card3}></Grid>
          <Grid item className={style.project_card4}></Grid>
        </Grid>
        <StyledButton name={"View Our Work"}></StyledButton>
      </Grid>
    </>
  );
}

export default ProjectsWork;

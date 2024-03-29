/* eslint-disable jsx-a11y/alt-text */
import { Grid, Typography } from "@mui/material";

import logo from "../assests/logo.png";
import Image from "next/image";

import styles from "./styles.module.css";

import "./infobox.css";

export default function InfoBox({ isMobile }) {
  const boxHt = isMobile ? "20vw" : "10vw";
  return (
    <Grid
      container
      flexDirection={isMobile ? "column" : "row"}
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
      style={{ marginTop: "5%", display: "flex", alignItems: "center" }}
    >
      {isMobile ? (
        <Grid item className={styles.sample_image_mobile}></Grid>
      ) : (
        <Grid item className={styles.sample_image}></Grid>
      )}

      <Grid item height={boxHt} className={styles.title_1}>
        <Typography variant="h3" className="infobox-text">
          35+ Projects
        </Typography>
      </Grid>

      <Grid
        item
        height={boxHt}
        className={styles.title_1}
        style={{ backgroundColor: "#03A1E2" }}
      >
        <Typography className="infobox-text">100+ EMPLOYEES</Typography>
      </Grid>

      <Grid item height={boxHt} className={styles.title_1}>
        <Typography className="infobox-text">20+ Awards</Typography>
      </Grid>

      <Grid
        item
        height={boxHt}
        className={styles.title_1}
        style={{ backgroundColor: "#03A1E2" }}
      >
        <Typography className="infobox-text">35+ Clients</Typography>
      </Grid>
    </Grid>
  );
}

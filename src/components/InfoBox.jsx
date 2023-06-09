/* eslint-disable jsx-a11y/alt-text */
import { Grid, Typography } from "@mui/material";

import logo from "../assests/logo.png";
import Image from "next/image";

import styles from "./styles.module.css";

import "./infobox.css";

export default function InfoBox() {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
      style={{ marginTop: "5%","display":"flex","alignItems":"center" }}
    >
      <Grid item className={styles.sample_image}></Grid>

      <Grid item className={styles.title_1}>
        <Typography className="infobox-text" >35+ Projects</Typography>
      </Grid>

      <Grid
        item
        className={styles.title_1}
        style={{ backgroundColor: "#03A1E2" }}
      >
        <Typography className="infobox-text" >100+ EMPLOYEES</Typography>
      </Grid>

      <Grid item className={styles.title_1}>
        <Typography className="infobox-text" >20+ Awards</Typography>
      </Grid>

      <Grid
        item
        className={styles.title_1}
        style={{ backgroundColor: "#03A1E2" }}
      >
        <Typography className="infobox-text" >35+ Clients</Typography>
      </Grid>
    </Grid>
  );
}

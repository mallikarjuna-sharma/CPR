import { Grid, Box } from "@mui/material";

import Image from "next/image";

import s1 from "../assests/s1.jpg";
import s2 from "../assests/s2.jpg";
import s3 from "../assests/s3.jpg";
import s4 from "../assests/s4.jpg";
import s5 from "../assests/s5.jpg";
import s6 from "../assests/s6.jpg";
import s7 from "../assests/s7.jpg";
import s8 from "../assests/s8.jpg";
import s9 from "../assests/s9.jpg";
import { useState } from "react";

const projectTiles = [
  "All Projects",
  "Architecture",
  "Building",
  "Management",
  "Solar",
];

const projectTilesImages = [
  { header1: "Southbeach Mixed Devpt", header2: "header2", source: s1 },
  { header1: "Southbeach Mixed Devpt", header2: "header2", source: s2 },
  { header1: "Southbeach Mixed Devpt", header2: "header2", source: s3 },

  { header1: "Southbeach Mixed Devpt", header2: "header2", source: s4 },
  { header1: "Southbeach Mixed Devpt", header2: "header2", source: s5 },
  { header1: "Southbeach Mixed Devpt", header2: "header2", source: s6 },

  { header1: "Southbeach Mixed Devpt", header2: "header2", source: s7 },
  { header1: "Southbeach Mixed Devpt", header2: "header2", source: s8 },
  { header1: "Southbeach Mixed Devpt", header2: "header2", source: s9 },
];

export default function OurProductsPage() {
  const [selectedProjectTile, setselectedProjectTile] = useState(0);

  return (
    <Grid container flexDirection={"column"} spacing={12}>
      <Grid item lg={12}>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"100%"}
          height="100%"
        >
          <Grid item lg={3}></Grid>
          {projectTiles.map((ele, index) => {
            return (
              <Grid item>
                <div
                  style={
                    index === selectedProjectTile
                      ? { background: "#01a0e1" }
                      : { background: "grey" }
                  }
                  className="title_button"
                  onClick={() => {
                    setselectedProjectTile(index);
                  }}
                >
                  {ele}
                </div>
              </Grid>
            );
          })}
          <Grid item lg={3}></Grid>
        </Grid>
      </Grid>

      <Grid item lg={12}>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          width={"100%"}
          height="100%"
          alignContent={"center"}
        >
          {projectTilesImages.map((ele) => {
            return (
              <Grid item lg={4}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <Image
                    src={ele.source}
                    alt="project images"
                    style={{
                      width: "80%",
                      height: 250,
                    }}
                  />
                  <Grid item>
                    <h2 style={{ textAlign: "center" }}> {ele.header1}</h2>
                  </Grid>
                  <Grid item>
                    <button className="view-project-button">
                      {" "}
                      View Project
                    </button>
                  </Grid>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

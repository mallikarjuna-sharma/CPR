import { Grid, Box, Button, Typography, Tooltip } from "@mui/material";

import { useEffect, useState } from "react";

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

const projectTiles = [
  "All",
  "Solar",
  "Architecture",
  "Building",
  "Management",
];

const projectDetails = [
  { ProjectName: "SNUS SDE-2", Category: "Solar", source: s1 },
  { ProjectName: "NUS SDE-4", Category: "Solar", source: s2 },
  { ProjectName: "NCID", Category: "Solar", source: s3 },

  { ProjectName: "Southbeach Mixed Devpt", Category: "Building", source: s4 },
  { ProjectName: "Tanjong Pagar Mixed Devpt", Category: "Building", source: s5 },
  { ProjectName: "MediaCorp Project", Category: "Building", source: s6 },

  { ProjectName: "Cantilever & Tower Scaffolds", Category: "Architecture", source: s7 },
  { ProjectName: "Nuform system", Category: "Architecture", source: s8 },
  { ProjectName: "Southbeach Management", Category: "Management", source: s9 },
];

export default function OurProductsPage() {
  const [selectedProjectTile, setselectedProjectTile] = useState('All');
  const [projectData, setselectedprojectData] = useState(projectDetails);

  useEffect(() => {
    let data = selectedProjectTile == 'All' ? projectDetails : projectDetails.filter(el => el.Category === selectedProjectTile);
    setselectedprojectData(data)
  }, [selectedProjectTile])
  return (
    <Grid container flexDirection={"column"} spacing={12}>
      <Grid item lg={12} className={'PPFirstSec'}>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height="100%"
          spacing={{ xs: 0, sm: 2, md: 2, lg: 2  }} 
        >
          {projectTiles.map((ele, index) => {
            return (
              <Grid item>
                <Button variant="text" style={
                  ele === selectedProjectTile
                    ? { backgroundColor: 'rgba(25, 118, 210, 0.09)' }
                    : {}
                } size="large" onClick={() => {
                  setselectedProjectTile(ele);
                }}><Typography style={
                  ele === selectedProjectTile
                    ? { color: "#01A0E1" }
                    : { color: "#a59d9d" }
                } variant="h6" display="block" fontWeight={600} className='categoryBtn' >
                    {ele}
                  </Typography></Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid item lg={12} display={'flex'} justifyContent={"center"} style={{ paddingTop: '20px' }}>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"80%"}
          height="100%"
          alignContent={"center"}
          spacing={5}
          columns={{ xs: 4, sm: 12, md: 12, lg: 12 }}
        >
          {projectData.map((ele, index) => {
            return (
              <Grid item xs={4} sm={6} md={4} lg={4} key={index}>
                <Tooltip title="Click for more details" fontWeight={600} followCursor>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={"column"}
                    className='projectBox'
                  >
                    <Image
                      src={ele.source}
                      alt="project images"
                      style={{
                        width: "100%",
                        height: 300,
                      }}
                    />
                    <div className='projectBoxContent'>
                      <Typography gutterBottom variant="h5" component="div" marginLeft='10px' fontWeight={600}>
                        {ele.ProjectName}
                      </Typography>
                      <Typography gutterBottom variant="button" component="div" marginLeft='10px'>
                        {ele.Category}{'/Client: Mun Siong'}
                      </Typography>
                      <Typography gutterBottom variant="button" component="div" display={'none'} marginLeft='10px'>
                        {'Click for more details'}
                      </Typography>
                    </div>
                  </Box>
                </Tooltip>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

import { Typography, Grid } from "@mui/material";
import Image from "next/image";
import service1 from "../assests/service1.jpg";
import service2 from "../assests/service2.jpg";
import service3 from "../assests/service3.jpg";
import service4 from "../assests/service4.jpg";

import "./Service.css";

function ServiceWeDo({ styles }) {
  const getServicelabel = (index) => {
    if (index === 1) {
      return "Commercial";
    } else if (index === 2) {
      return "Civil";
    } else if (index === 3) {
      return "Industrial";
    } else if (index === 4) {
      return "Solar";
    }
  };

  return (
    <>
      <Grid container flexDirection={"column"} margin={"2%"}>
        <Typography variant="h3" color={"black"}>
          Services
        </Typography>
        <Typography style={{ fontWeight: 600 }} variant="h4" color={"black"}>
          What We do
        </Typography>
        <Grid item style={{ margin: "0% 5% 0% 1%" }}>
          <Grid container spacing={2} lg={12}>
            {[service1, service2, service3, service4].map((image, index) => {
              return (
                <Grid item lg={3} key={index}>
                  <div className="container">
                    <div className="card">
                      <div className="image">
                        <Image
                          className={styles.service_card_img}
                          alt={"service Image" + index}
                          src={image}
                        />
                      </div>
                      <div className="content">
                        <h3> {getServicelabel(index + 1)} </h3>
                        <p>
                          DIn publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Typography textAlign={"center"} variant="h5" color={"black"}>
                    {getServicelabel(index + 1)}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ServiceWeDo;

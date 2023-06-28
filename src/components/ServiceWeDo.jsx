import { Typography, Grid } from "@mui/material";
import Image from "next/image";
import service1 from "../assests/service1.jpg";
import service2 from "../assests/service2.jpg";
import service3 from "../assests/service3.jpg";
import service4 from "../assests/service4.jpg";

import "./Service.css";

function ServiceWeDo({ styles, col, count }) {
  const getServicelabel = (index) => {
    if (index === 1) {
      return "Commercial";
    } else if (index === 2) {
      return "Civil";
    } else if (index === 3) {
      return "Industrial";
    } else if (index === 4) {
      return "Solar";
    }else if (index === 5) {
      return "Construction";
    } else if (index === 6) {
      return "Sourcing";
    }
  };

  return (
    <>
      <Grid container flexDirection={"column"} margin={"2%"}>
        <div className="secHeader">
          <Typography variant="h3" color={"black"}>
            Services
          </Typography>
          <Typography style={{ fontWeight: 600 }} variant="h4" color={"black"}>
            What We do
          </Typography>
        </div>
        <Grid item style={{ margin: "0% 5% 0% 1%" }}>
          <Grid container spacing={4} lg={12}>
            {[service1, service2, service3, service4, service3, service4].slice(0,count).map((image, index) => {
              return (
                <Grid item lg={col} key={index}>
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
                          placeholder text commonly to demonstrate the
                          visual form of a document or relying on meaningful content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cardName">
                  <Typography textAlign={"center"} variant="h5" color={"black"}>
                    {getServicelabel(index + 1)}
                  </Typography>
                  </div>
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

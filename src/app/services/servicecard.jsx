import "./servicepage.css";
import { Grid } from "@mui/material";

import Image from "next/image";

export default function ServiceCard({ element, index ,handleServiceElementClick}) {
  return (
 
      <div className="container">
        <div className="box">
          <span />
          <div className="content">
            <Grid item>
              <Image
                style={{
                  width: "100%",
                  height: 250,
                }}
                src={element.src}
                alt={element.alt}
              ></Image>
            </Grid>
            <Grid item>
              <h3 className="service_card_header">{element.header1} </h3>
            </Grid>

            <Grid item>
              <div className="divider" />
            </Grid>
            <Grid item>
              <h4 className="service_card_sub_header">{element.header2} </h4>
            </Grid>
          </div>
        </div>
      </div>
  );
}

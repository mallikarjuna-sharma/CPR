"use client";
import styles from "../page.module.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import Title from "@/components/title";

import service1 from "../../assests/service1.jpg";
import service2 from "../../assests/service2.jpg";
import service3 from "../../assests/service3.jpg";
import service4 from "../../assests/service4.jpg";

import Image from "next/image";

import { Grid} from "@mui/material";

import "./servicepage.css";

const ServicePage = [
  {
    src: service1,
    alt: "service image",
    header1: "Scaffolding Services",
    header2:
      "Scaffolding is an essential component of any domestic building project...",
  },
  {
    src: service2,
    alt: "service image",
    header1: "Steel Construction Services",
    header2:
      "We offer end to end solution from engineering design to commissioning...",
  },
  {
    src: service3,
    alt: "service image",
    header1: "Corrosion Resistance coating works",
    header2: "Surface preparation and Painting services...",
  },

  {
    src: service4,
    alt: "service image",
    header1: "Building Repair & Maintenance Works    ",
    header2: "We carryout Maintenance works on any conserved buildings...",
  },
  {
    src: service1,
    alt: "service image",
    header1: "Material Sourcing and Supply Chain Management",
    header2:
      "Scaffolding is an essential component of any domestic building project...",
  },

  {
    src: service1,
    alt: "service image",
    header1: "Project Management Consultancy",
    header2:
      "We have hands on experience in PMC works. We strive to put our expertise to minimise...",
  },
];

export default function page() {
  return (
    <main className="servicePage">
      <NavBar styles={styles}></NavBar>
      <Title></Title>

      <Grid
        container
        lg={12}
        flexWrap="wrap"
        width="100%"
        height="100%"
        flexDirection="row"
        justifyContent="space-around"
      >
        {ServicePage.map((element) => {
          return (
            <Grid
              lg={4}
              container
              height={"100%"}
              width={"100%"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item>
                <Image
                  style={{
                    width: 410,
                    height: 350,
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
            </Grid>
          );
        })}
      </Grid>

      <Footer></Footer>
    </main>
  );
}

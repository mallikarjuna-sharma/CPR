"use client";
import { useEffect, useState } from "react";
import styles from "../page.module.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import ContactModal from "@/components/ContactModal";
import Title from "@/components/title";
import ServiceMobileCarousal from "@/components/ServiceMobileCarousal";

import service1 from "../../assests/service1.jpg";
import service2 from "../../assests/service2.jpg";
import service3 from "../../assests/service3.jpg";
import service4 from "../../assests/service4.jpg";

import { Grid } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./servicepage.css";

import ServiceCard from "./servicecard";

import Grow from "@mui/material/Grow";

import Image from "next/image";

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

const isLoaded = false;

export default function page() {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [startAnimate, setstartAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 500 ? true : false);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isLoaded) {
      setstartAnimate(true);
    }

    return () => {
      setstartAnimate(false);
    };
  }, []);

  const handleServiceElementClick = (index) => {
    setselectedIndex(index + 1);
  };

  const Imageset = () => (
    <>
      <Grid item lg={6}>
        <Image
          style={{
            width: "100%",
            height: 250,
          }}
          src={ServicePage[selectedIndex - 1].src}
          alt={ServicePage[selectedIndex - 1].alt}
        ></Image>
      </Grid>
    </>
  );

  const ServiceHeaders = ({ element, index }) => (
    <Grow
      in={selectedIndex}
      style={{ transformOrigin: "0 0 0" }}
      {...(selectedIndex ? { timeout: 1000 } : {})}
    >
      <Grid
        item
        style={
          index + 1 === selectedIndex
            ? { background: "#01a0e1" }
            : { background: "grey" }
        }
        className="service_side_bar"
        onClick={() => {
          handleServiceElementClick(index);
        }}
      >
        <h4> {element.header1} </h4>
        <ArrowForwardIosIcon />
      </Grid>
    </Grow>
  );

  const item = [Imageset, Imageset];

  const MobileSection = () => {
    return <ServiceMobileCarousal items={item} />;
  };

  const MobileServiceHeader = () => {
    return (
      <Grid
        container
        maxWidth={"100%"}
        flexDirection={"column"}
        width={"100%"}
        height={100}
        overflow={"scroll"}
        style={{ overflow: "scroll" }}
      >
        {ServicePage.map((element, index) =>
          ServiceHeaders({ element, index })
        )}
      </Grid>
    );
  };

  return (
    <main className="servicePage">
      <NavBar styles={styles} setIsOpen={setIsOpen}></NavBar>
      <Title title={"Our Services"}></Title>

      {!selectedIndex && startAnimate && (
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          flexWrap="wrap"
          width="90%"
          margin={"auto"}
          height="100%"
          flexDirection="row"
          justifyContent="center"
        >
          {ServicePage.map((element, index) => {
            return (
              <Grow
                in={startAnimate}
                style={{ transformOrigin: "0 0 0" }}
                {...(startAnimate ? { timeout: 1000 } : {})}
              >
                <Grid
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  container
                  height={"100%"}
                  width={"100%"}
                  flexDirection="column"
                  justifyContent={"center"}
                  alignItems={"center"}
                  onClick={() => {
                    handleServiceElementClick(index);
                  }}
                  className="CardGrid"
                >
                  <ServiceCard
                    element={element}
                    index={index}
                    handleServiceElementClick={handleServiceElementClick}
                  />
                </Grid>
              </Grow>
            );
          })}
        </Grid>
      )}

      {!!selectedIndex && (
        <Grid container width={"100%"} height="100%">
          {isMobile ? (
            <MobileServiceHeader />
          ) : (
            <Grid item lg={3} sm={12} height="100%">
              <Grid
                container
                width={"100%"}
                height="100%"
                flexDirection={"column"}
                justifyContent={"space-between"}
              >
                {ServicePage.map((element, index) =>
                  ServiceHeaders({ element, index })
                )}
              </Grid>
            </Grid>
          )}

          <Grid item lg={9} sm={12}>
            {isMobile ? (
              <MobileSection />
            ) : (
              <Grid item>
                <Grid
                  container
                  width={"100%"}
                  height="100%"
                  lg={12}
                  flexDirection={"row"}
                  justifyContent={"space-around"}
                  spacing={2}
                >
                  {item.map((ele) => ele())}
                </Grid>
              </Grid>
            )}
            <Grid item >
              <Grid
                container
                width={"100%"}
                height="100%"
                flexDirection={"column"}
                justifyContent={"flex-end"}
                padding={2}
              >
                <h3 style={{ textAlign: "center" }}>SERVICE OVERVIEW</h3>
                <h4 style={{ textAlign: "center" }}>
                  Scaffolding is an essential component of any domestic building
                  project. It is required for roofing, home extensions, loft
                  conversions, and many other structural home improvements. We
                  provide professional advice, planning, and design for the
                  scaffolding required for any domestic home
                  development.Renovate has proven results for setting
                  exceptional standards in cost control, planning, scheduling
                  and project safety.
                </h4>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}

      <Footer setIsOpen={setIsOpen}></Footer>
      <ContactModal open={isOpen} handleClose={handleClose}></ContactModal>
    </main>
  );
}

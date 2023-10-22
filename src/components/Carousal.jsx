import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function Carousal(styles) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 500 ? true : false);
  }, []);

  var items = [
    {
      name: "Solar Services",
      description: "Solar PV System Integrator and O&M Services",
    },
    {
      name: "Scaffolding Services",
      description: "Approved Scaffold Contractor by Ministry of Manpower",
    },
    {
      name: "Professional Resources",
      description: "Corporate Member of Access Scaffold Industry Association",
    },
    {
      name: "Certifications",
      description: "ISO 9001:2015 by EQAIMS Certification Pte Ltd",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      indicatorContainerProps={{
        style: {
          display: "none",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} styles={styles} isMobile={isMobile} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        height: props.isMobile? 'auto' : '25vh',
        width: props.isMobile? 'auto' : "35vw",
        backgroundColor: "#ffffffbf",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
      
    >
      <h1>{props.item.name}</h1>
      <h3>{props.item.description}</h3>
    </Paper>
  );
}

export default Carousal;

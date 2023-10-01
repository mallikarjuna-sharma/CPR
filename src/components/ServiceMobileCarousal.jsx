import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function ServiceMobileCarousal({ items }) {
  return (
    <Carousel autoPlay={false} indicatorContainerProps={{}}>
      {items.map((Item, i) => (
        <Item />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        width: "35vw",
        height: "25vh",
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

export default ServiceMobileCarousal;

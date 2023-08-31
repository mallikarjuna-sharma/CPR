import { Grid, Typography, Button } from "@mui/material";

function Title(props) {
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
    //   justifyContent={"center"}
      alignContent={'center'}
      lg={12}
      style={{"marginBottom":"5%","backgroundColor":"#EFEFEF","height":"90px", "padding":"5px"}}
    >
      <Grid item sx={12}>
      <Typography variant="h4" color={"#000000"}>
            {props.title}
          </Typography>
      </Grid>
    </Grid>
  );
}

export default Title;

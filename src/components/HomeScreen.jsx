import { Grid, Typography } from "@mui/material";
import Carousal from "./Carousal";
import StyledButton from "./StyledButton";

export function HomeScreen({ styles }) {
  return (
    <Grid container width={"100%"}>
      <Grid item lg={12} sm={12}>
        <Grid
          className={styles.home_screen_bg}
          container
          alignContent={"flex-end"}
          justifyContent={"center"}
          width={"100%"}
          flexDirection={"row"}
          flex={true}
        >
          <Grid item className={styles.home_screen_text}>
            <Grid
              container
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid item>
                <Typography
                  style={{ fontWeight: 600 }}
                  variant="h4"
                  color={"black"}
                >
                  CONSTRUCTION PROFESSIONAL
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  style={{ fontWeight: 600 }}
                  variant="h4"
                  color={"black"}
                >
                  RESOURCES PTE LTD
                </Typography>
              </Grid>
              <Grid item>
                <StyledButton name={"View Our Work"}></StyledButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            lg={4}
            sm={4}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Carousal></Carousal>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

//#00A0E1

import { Grid, Typography, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";
import './title.css'

function Title(props) {
  const router= useRouter();
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      alignContent={'center'}
      lg={12}
      style={{ "marginBottom": "5%", "backgroundColor": "#EFEFEF", "height": "90px", "padding": "5px" }}
    >
      <Grid item sx={12} display={"flex"} width='100%' justifyContent={'space-between'}>
        <Typography variant="h4" color={"#000000"} className='PageTitle'>
          {props.title}
        </Typography>
        {props.enableBack && <Button startIcon={<ArrowBackIcon />} 
        className='backBtn' 
        style={{ "marginRight": "20px", "fontSize": "16px", "color": "#000" }}
        onClick={()=> router.back()}>
          Back
        </Button>}
      </Grid>
    </Grid>
  );
}

export default Title;

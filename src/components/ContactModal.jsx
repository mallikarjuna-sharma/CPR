import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import Textarea from "@mui/joy/Textarea";

import CloseIcon from "@mui/icons-material/Close";
import logo from "../assests/logo.png";
import Image from "next/image";

import BasicFormControl from "./FormControl";

import SendIcon from "@mui/icons-material/Send";

import { postInquiry } from "./api";

const modal_style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ContactModal({ open = false, handleClose }) {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [width, setWidth] = React.useState(0);

	React.useEffect(() => {
	    setWidth(window.innerWidth);
	});

  const handleNameChange = (event) => {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  };
  const handlePhoneChange = (event) => {
    setFormData({
      ...formData,
      phone: event.target.value,
    });
  };
  const handleEmailChange = (event) => {
    setFormData({
      ...formData,
      email: event.target.value,
    });
  };
  const handleMessageChange = (event) => {
    setFormData({
      ...formData,
      message: event.target.value,
    });
  };

  const handleSubmit = () => {
    postInquiry({
      name: formData.name || "my name is mallik",
      email: formData.email || "rmalliksharma96@gmail.com",
      message: formData.message || "new message from dear",
      phoneno: formData.phone || "82201077700",
    });
    console.log(formData);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modal_style} style={{"border":"0","borderRadius":"25px", "width": width<500? 360:500,}}>
        <Grid container spacing={4} justifyContent={"space-between"}>
          <Grid item>
            <Image
              src={logo}
              alt="hero-image"
              style={{
                width: 55,
                height: 55,
              }}
            ></Image>
          </Grid>
          <Grid item>
            <Typography
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: "24px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
              color="black"
            >
              Contact Us{" "}
            </Typography>
          </Grid>
          <Grid item>
            <CloseIcon
              onClick={handleClose}
              className="close-icon"
              style={{ fontSize: 32, color: "black" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent={"space-between"} flexDirection={'column'}>
          <Grid item lg={12}>
            <BasicFormControl
              label="Name"
              onChange={handleNameChange}
            ></BasicFormControl>
          </Grid>
          <Grid item lg={12}>
            <BasicFormControl
              label="Phone"
              onChange={handlePhoneChange}
            ></BasicFormControl>
          </Grid>
          <Grid item lg={12}>
            <BasicFormControl
              label="Email"
              onChange={handleEmailChange}
            ></BasicFormControl>
          </Grid>
          <Grid item lg={12}>
            <h3
              style={{
                fontFamily: '"IBM Plex Sans", sans-serif',
                fontSize: "1rem",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              {"Message"}
            </h3>
            <Textarea minRows={4} onChange={handleMessageChange} />
          </Grid>
        </Grid>

        <Grid container spacing={2} width={"100%"} style={{"position":"relative","marginTop":"10px"}}>
          <Grid item lg={12} style={{"display":"flex","justifyContent":"center","width":"100%"}}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<SendIcon />}
              onClick={handleSubmit}
              className="SubmitBtn"
              style={{"borderRadius":"100px","background":"#01A0E1","boxShadow":"0px 0px 30px 0px rgba(3, 161, 226, 0.8)","width":"auto","flexShrink":"0","border":"0","color":"#FFFF","fontSize":"16px","fontWeight":"600","bottom":"-55px","padding":"10px 20px","position":"absolute"}}
            >
              SEND MESSAGE
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

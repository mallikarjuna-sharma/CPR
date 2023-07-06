import { Typography, Grid } from "@mui/material";
import "./footer.css";
import cprlogo from "../assests/cprlogo.png";
import PhoneIcon from "../assests/PhoneIcon.png";
import locationIcon from "../assests/locationIcon.png";
import emailIcon from "../assests/emailIcon.png";
import Image from "next/image";

function footer({ setIsOpen }) {
  const handleContactPopUp = () => {
    setIsOpen(true);
  };

  return (
    <Grid container flexDirection={"column"}>
      <div className="footerMain">
        <div style={{position:"relative"}}>
          <button className="footer-btn" onClick={handleContactPopUp}>
            CONTACT US NOW
          </button>
          <div className="firstSec"></div>
          <div className="secondSec">
            <div>
              <Image src={cprlogo} width={50} height={50} alt="CPRlogo"></Image>
              <Typography variant="h4" color={"black"} className="headerCont">
                Construction Professional Resources PTE LTD
              </Typography>
            </div>

            <Typography variant="body1" color={"black"} className="subCont">
              Having successfully delivered more than 50 construction contracts
              for fewer than 30 clients we're proud that Cassidy Construction is
              often the first choice construction partner.
            </Typography>
          </div>
          <div className="thirdSec">
            <div>
              <Image
                src={locationIcon}
                width={30}
                height={30}
                alt="locationIcon"
              ></Image>
              <Typography
                variant="body1"
                color={"black"}
                className="addressCont"
              >
                8 Burn Road, #05-10 Trivex Singapore - 369977
              </Typography>
            </div>
            <div className="phSec">
              <Image
                src={PhoneIcon}
                width={30}
                height={30}
                alt="PhoneIcon"
              ></Image>
              <div>
                <Typography variant="body1" color={"black"} className="phCont">
                  Tel: +65 6293 5547
                </Typography>
                <Typography variant="body1" color={"black"} className="phCont">
                  Fax: +65 6291 3050
                </Typography>
              </div>
            </div>
            <div>
              <Image
                src={emailIcon}
                width={30}
                height={30}
                alt="emailIcon"
              ></Image>
              <Typography variant="body1" color={"black"} className="emailCont">
                E-mail: sales@cprsingapore.biz
              </Typography>
            </div>
          </div>
        </div>
        <div className="copyRigthTag">
          <Typography
            variant="body1"
            color={"black"}
            className="copyRigthTagCont"
          >
            © Copyright 2018. "CPR" by Excelanto. All rights reserved.
          </Typography>
        </div>
      </div>
    </Grid>
  );
}

export default footer;

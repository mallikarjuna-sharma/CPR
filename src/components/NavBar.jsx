"use client";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import logo from "../assests/logo.png";
import Image from "next/image";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import PhoneEnabledSharpIcon from "@mui/icons-material/PhoneEnabledSharp";
import ConstructionIcon from "@mui/icons-material/Construction";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
const drawerWidth = 240;
const navItems = ["HOME", "SERVICES", "PROJECTS", "CONTACT US"];

function NavBar(props) {
  const { window, styles, setIsOpen } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDrawerToggle = (event) => {
    setAnchorEl(event.currentTarget);
    setMobileOpen((prevState) => !prevState);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Image src={logo}></Image>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: "center" }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavBarItemClick = (event, item) => {
    if (item === "CONTACT US") {
      event.preventDefault();
      setIsOpen(true);
    }
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="transparent"
        component="nav"
        style={{ boxShadow: "none" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, padding: { xs: "5px 0" } }}>
            <Image className="headerLogo" src={logo}></Image>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                className={"nav_bar_text"}
                key={item}
                sx={{ color: "#a59e9d" }}
              >
                <Link
                  onClick={(event) => handleNavBarItemClick(event, item)}
                  href={`/${item == "HOME" ? "" : item.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "unset" }}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              position: "absolute",
              right: 0,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        {navItems.map((item) => (
          <MenuItem>
            <Link
              onClick={(event) => handleNavBarItemClick(event, item)}
              href={`/${item == "HOME" ? "" : item.toLowerCase()}`}
              style={{
                textDecoration: "none",
                color: "unset",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: 500,
                alignItems: "center",
                display: "flex",
              }}
            >
              {item}
              {item == "HOME" && (
                <HomeIcon style={{ width: "15px", marginLeft: "5px" }} />
              )}
              {item == "SERVICES" && (
                <ConstructionIcon
                  style={{ width: "15px", marginLeft: "5px" }}
                />
              )}
              {item == "PROJECTS" && (
                <EngineeringRoundedIcon
                  style={{ width: "15px", marginLeft: "5px" }}
                />
              )}
              {item == "CONTACT US" && (
                <PhoneEnabledSharpIcon
                  style={{ width: "15px", marginLeft: "5px" }}
                />
              )}
            </Link>
          </MenuItem>
        ))}
      </Menu>
      {/* <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box> */}
    </Box>
  );
}

export default NavBar;

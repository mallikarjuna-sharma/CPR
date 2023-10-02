"use client";
import styles from "./page.module.css";
import NavBar from "../components/NavBar";

import "./page.module.css";
import { HomeScreen } from "@/components/HomeScreen";
import About from "@/components/About";
import ServiceWeDo from "@/components/ServiceWeDo";
import ProjectsWork from "@/components/ProjectsWork";
import InfoBox from "@/components/InfoBox";
import OurClient from "@/components/OurClients";
import Footer from "@/components/footer";
import ContactModal from "@/components/ContactModal";
import { useState, useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 500 ? true : false);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <NavBar styles={styles} setIsOpen={setIsOpen}></NavBar>
      <HomeScreen styles={styles}></HomeScreen>
      <About></About>
      <ServiceWeDo styles={styles} col={3} count={4}></ServiceWeDo>

      <ProjectsWork isMobile={isMobile} styles={styles}></ProjectsWork>
      <InfoBox isMobile={isMobile} styles={styles}></InfoBox>
      <OurClient isMobile={isMobile}></OurClient>

      <Footer setIsOpen={setIsOpen}></Footer>
      <ContactModal open={isOpen} handleClose={handleClose}></ContactModal>
    </main>
  );
}

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

export default function Home() {
  return (
    <main>
      <NavBar styles={styles}></NavBar>
      <HomeScreen styles={styles}></HomeScreen>
      <About></About>
      <ServiceWeDo styles={styles}> </ServiceWeDo>
      <ProjectsWork styles={styles}> </ProjectsWork>
      <InfoBox styles={styles}></InfoBox>
      <OurClient></OurClient>
      <Footer></Footer>
    </main>
  );
}

"use client";
import styles from "../page.module.css";
import NavBar from "@/components/NavBar";
import "../page.module.css";
import ServiceWeDo from "@/components/ServiceWeDo";
import Footer from "@/components/footer";
import Title from "@/components/title";

export default function page() {
  return (
    <main className="servicePage">
      <NavBar styles={styles}></NavBar>
      <Title></Title>
      <ServiceWeDo styles={styles} col={4} count={6}> </ServiceWeDo>
      <Footer></Footer>
    </main>
  );
}

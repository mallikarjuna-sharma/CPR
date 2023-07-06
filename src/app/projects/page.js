"use client";
import styles from "../page.module.css";
import Title from "@/components/title";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import OurProductsPage from "@/components/OurProductsPage";

import "./projectpage.css"

export default function page() {
  return (
    <main>
      <NavBar styles={styles}></NavBar>
      <Title></Title>
      <OurProductsPage />
      <Footer></Footer>
    </main>
  );
}

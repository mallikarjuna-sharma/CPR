"use client";
import styles from "../page.module.css";
import Title from "@/components/title";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import ContactModal from "@/components/ContactModal";
import OurProductsPage from "@/components/OurProductsPage";
import { useState } from "react";
import "./projectpage.css"

export default function page() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <main>
      <NavBar styles={styles} setIsOpen={setIsOpen}></NavBar>
      <Title title={"Our Projects"}></Title>
      <OurProductsPage />
      <Footer setIsOpen={setIsOpen}></Footer>
      <ContactModal open={isOpen} handleClose={handleClose}></ContactModal>
    </main>
  );
}

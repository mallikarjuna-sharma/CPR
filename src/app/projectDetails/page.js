"use client";
import styles from "../page.module.css";
import Title from "@/components/title";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import ContactModal from "@/components/ContactModal";
import ProductpageDetails from "@/components/ProductPageDetails";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import "./projectDetails.css"

export default function page() {

  const [isOpen, setIsOpen] = useState(false);
  const [projectName, setprojectName] = useState(null);
  const paramsString = useSearchParams().toString().replaceAll('+',' ').replaceAll('=','');
  const pathName = usePathname();
  const handleClose = () => {
    setIsOpen(false);
  };
  const router = useRouter()
  useEffect(() => {
    setprojectName(paramsString);
    router.replace(pathName)
  }, [])

  return (
    <main>
      <NavBar styles={styles} setIsOpen={setIsOpen}></NavBar>
      <Title title={projectName} enableBack={true}></Title>
      {projectName && <ProductpageDetails projectName={projectName} />}
      <Footer setIsOpen={setIsOpen}></Footer>
      <ContactModal open={isOpen} handleClose={handleClose}></ContactModal>
    </main>
  );
}

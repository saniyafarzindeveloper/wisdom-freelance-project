import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/About/AboutHero";
import Values from "../components/About/Values";
import Founder from "../components/About/Founder";
import Team from "../components/About/Team";
import WhatsappCTA from "../components/WhatsappCTA";
import CTA from '../components/CTA'

export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Values />
      <Founder />
      <Team />
      <WhatsappCTA />
      <CTA />
      <Footer />
    </>
  );
}

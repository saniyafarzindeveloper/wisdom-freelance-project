import React from "react";
import Hero from "../components/Coaching/Primary/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Info from "../components/Coaching/Primary/Info";
import Features from "../components/Coaching/Primary/Features";
import Stats from "../components/Coaching/Primary/Stats";
import CTA from '../components/CTA'
export default function PrimaryCoaching() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}

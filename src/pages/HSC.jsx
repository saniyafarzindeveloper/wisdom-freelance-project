import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Coaching/HSC/Hero'
import Stats from '../components/Coaching/HSC/Stats'
import Features from '../components/Coaching/SSC/Features'
import Tabs from '../components/Coaching/HSC/Tabs'

export default function HSC() {
  return (
    <>
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <Tabs />
        <Footer />
    </>
  )
}

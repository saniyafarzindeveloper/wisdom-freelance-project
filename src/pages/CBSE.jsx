import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Coaching/CBSE/Hero";
import Stats from "../components/Coaching/CBSE/Stats";
import Features from '../components/Coaching/SSC/Features'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function CBSE() {
  const testimonialsData = [
    {
      title: "Amazing",
      content: "Quality Education with qualified and experienced teachers.",
      author: "Taha Pathan",
    },
    {
      title: "Quality Teaching",
      content:
        "They especially focus on quality of teaching. They have expert teachers & instructors.",
      author: "Sarfaraz Kawchali",
    },
    {
      title: "Best Institution",
      content:
        "One of the best institutions I have ever seen. They are the only result providers in Khed. Value for money. They also provide placements.",
      author: "Azhar Gharte",
    },
    {
      title: "Talented Staff",
      content: "Superb education with well experienced & talented staff.",
      author: "Wahid Kawchali",
    },
    {
      title: "Best Coaching",
      content: "One of the best coaching center in khed",
      author: "Wasim Tambe",
    },
    {
      title: "Only institution that provides courses",
      content:
        "Best institution with well qualified staff, best education, best results. The only institution that provides professional courses like Aviation, Logistics, SCM etc",
      author: "Rahil Khatib",
    },
    {
      title: "Destination to Success",
      content:
        "Wisdom Education is the airport where students takeoff to their destination of success",
      author: "Mubin",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Testimonials
        heading="Don't just take our word for it"
        testimonials={testimonialsData}
      />
      <CTA />
      <Footer />
    </>
  );
}

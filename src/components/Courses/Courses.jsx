// components/Courses.jsx
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import CourseContent from './CourseContent';
import FAQ from './FAQ'
import Stat from './Stat';
import CTA from '../CTA'

const Courses = ({ data }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseContent 
        title={data.title} 
        image={data.image} 
        description={data.description} 
      />
      <FAQ />
      <Stat />
      <CTA />
      <Footer />
    </>
  );
};

export default Courses;

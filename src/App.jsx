import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import About from './pages/About';
import EducationalCounselling from './pages/EducationalCounselling';
import LandingPage from './pages/LandingPage'
import ContactUs from './pages/ContactUs';
import Courses from './components/Courses/Courses';
import PrimaryCoaching from './pages/PrimaryCoaching'
import SSC from './pages/SSC';
import CBSE from './pages/CBSE';
import HSC from './pages/HSC';
import BachelorsMasters from './pages/BachelorsMasters';
import CET from './pages/CET';

export default function App() {
  const courseData = {
    course1: {
      title: "Get ahead of the Competition with our Logistics Certification Course",
      image: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
    },
    course2: {
      title: "Join our Supply Change Management Course to Excel!",
      image: "https://plus.unsplash.com/premium_photo-1682129768936-c5b7c3033cdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VwcGx5JTIwY2hhaW4lMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
    },
    course3: {
      title: "Become Confident by Joining our English Speaking Course",
      image: "https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
    },
  };
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/about" element={<About />} />
    <Route path='/educational-counselling' element={<EducationalCounselling />} />
    <Route path='/contact-us' element={<ContactUs />} />
    <Route path='/logistics' element={<Courses data={courseData.course1} />}/>
    <Route path='/scm' element={<Courses data={courseData.course2} />}/>
    <Route path='/english-speaking' element={<Courses data={courseData.course3} />}/>
    <Route path='/primary' element={<PrimaryCoaching />} />
    <Route path='/ssc' element={<SSC />} />
    <Route path='/cbse' element={<CBSE />} />
    <Route path='/hsc' element={<HSC />} />
    <Route path='/bachelors-masters' element={<BachelorsMasters />} />
    <Route path='/cet' element={<CET />} />
    </Routes>

    </BrowserRouter>
   
  )
}
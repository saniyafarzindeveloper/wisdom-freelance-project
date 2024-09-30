import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Coaching/Bachelors/Hero'
import Courses from '../components/Coaching/Bachelors/Courses'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
export default function BachelorsMasters() {
  const courses = [
    {
      heading: "BCom",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
    {
      heading: "BEd",
      text: "Different description text for another course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore.",
    },
    {
      heading: "BMS",
      text: "Different description text for another course. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore.",
    },
    
  ];

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
    <div className="container mx-auto p-4 mb-10 mt-5">
      <h2 className="text-4xl font-medium text-center text-[#1F42B0] mt-2 mb-4">Bachelor Coaching at Wisdom</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <Courses key={index} heading={course.heading} text={course.text} />
        ))}
      </div>
    </div>
    <Testimonials
        heading="Don't just take our word for it"
        testimonials={testimonialsData}
      />
        <CTA />
    <Footer />
   </>
  )
}

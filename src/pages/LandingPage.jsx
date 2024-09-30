import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Numbers from "../components/Numbers";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsappCTA from "../components/WhatsappCTA";
import WisdomSchool from "../components/WisdomSchool";
import Courses from "../components/Courses";
import Gallery from "../components/Gallery";

export default function LandingPage() {
  
  const featureData = [
    {
      imageSrc: "path/to/support-image.png",
      title: "Doubt Solving",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
      bgColor: "linear-gradient(135deg, #F9A93F, #F15837)",
      textColor: "white",
    },
    {
      imageSrc: "path/to/quality-image.png",
      title: "Personal Assistance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
      bgColor: "linear-gradient(135deg, #01BBFF, #1870BC)",
      textColor: "white",
    },
    {
      imageSrc: "path/to/result-image.png",
      title: "Weekly Tests",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",

      bgColor: "linear-gradient(135deg, #E8984E, #937375)",
      textColor: "white",
    },
    {
      imageSrc: "path/to/result-image.png",
      title: "Supportive Staff",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",

      bgColor: "linear-gradient(135deg, #00EEA5, #01AEFE)",
      textColor: "white",
    },
    {
      imageSrc: "path/to/result-image.png",
      title: "Friendly Environment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",

      bgColor: "linear-gradient(135deg, #FEEA04, #FBBD33)",
      textColor: "white",
    },
    {
      imageSrc: "path/to/result-image.png",
      title: "No Language Barrier",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
      bgColor: "linear-gradient(135deg, #1E41B0, #1870BC)",
      textColor: "white",
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
      <Numbers />
      <Courses />
      <Features features={featureData} />

      <WisdomSchool />
      <Gallery />
      <Testimonials
        heading="Don't just take our word for it"
        testimonials={testimonialsData}
      />
      <CTA />
      <WhatsappCTA />
      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Coaching/SSC/Hero";
import Features from "../components/Coaching/SSC/Features";
import Stats from "../components/Coaching/SSC/Stats";
import Results from "../components/Coaching/SSC/Results";
import CTA from "../components/CTA";


import Amina from "../assets/SSC Students/aminaSSc.png";
import Mariya from "../assets/SSC Students/mariyaSSc.png";
import Sidra from "../assets/SSC Students/sidraSSC.png";
import Ziniya from "../assets/SSC Students/ziniyaSSC.png";
import Sadaf from "../assets/SSC Students/sadafSSC.png";
import Arbina from "../assets/SSC Students/arbinaSSC.png";
import Zoya from "../assets/SSC Students/zoyaSSC.png";
import Ibrahim from "../assets/SSC Students/ibrahimSSC.png";
import Sara from "../assets/SSC Students/saraSSC.png";
import Kabir from "../assets/SSC Students/kabirSSC.png";
import Fahad from "../assets/SSC Students/fahadSSC.png";
import Iqra from "../assets/SSC Students/iqraSSC.png";
import Swaliha from "../assets/SSC Students/swalihaSSC.png";
import Samiya from "../assets/SSC Students/samiyaSSC.png";
import Hasan from "../assets/SSC Students/hasanSSC.png";
import Umar from "../assets/SSC Students/umarSSC.png";

export default function SSC() {
  const students = [
    {
      image: Amina,
      name: "Amina M",
      percentage: "91.00%",
    },
    {
      image: Mariya,
      name: "Mariya M",
      percentage: "90.8%",
    },
    {
      image: Sidra,
      name: "Sidra P",
      percentage: "88.00%",
    },
    {
      image: Ziniya,
      name: "Ziniya R",
      percentage: "84.00%",
    },
    {
      image: Sadaf,
      name: "Sadaf T",
      percentage: "82.60%",
    },
    {
      image: Arbina,
      name: "Arbina K",
      percentage: "80.60%",
    },
    {
      image: Zoya,
      name: "Zoya S",
      percentage: "80.60%",
    },
    {
      image: Sara,
      name: "Sara P",
      percentage: "79.80%",
    },
    {
      image: Kabir,
      name: "Sara P",
      percentage: "79.60%",
    },
    {
      image: Ibrahim,
      name: "Ibrahim K",
      percentage: "79.20%",
    },
    {
      image: Fahad,
      name: "Fahad A",
      percentage: "79.00%",
    },
    {
      image: Iqra,
      name: "Iqra T",
      percentage: "75.60%",
    },
    {
      image: Swaliha,
      name: "Swaliha P",
      percentage: "69.40%",
    },
    {
      image: Samiya,
      name: "Samiya P",
      percentage: "67.40%",
    },
    {
      image: Hasan,
      name: "Hasan T",
      percentage: "62.60%",
    },
    {
      image: Umar,
      name: "Umar D",
      percentage: "60.00",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />

      <Stats />
      <Features />
      <div className="p-8 rounded-lg shadow">
        <p className="text-4xl font-semibold text-center text-[#1F42B0]">
          SSC Pass Outs - 2024 Batch
        </p>
        <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-200">
          Almost 40% Growth compared to previous years
        </p>
        <div className="flex flex-wrap justify-center">
          {students.map((student, index) => (
            <Results
              key={index}
              image={student.image}
              name={student.name}
              percentage={student.percentage}
            />
          ))}
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}

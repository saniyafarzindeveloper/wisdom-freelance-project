import React, { useState } from "react";
import Results from '../SSC/Results'

import Mahek from '../../../assets/HSC Students/Sci/mahekHSC.png'
import Afsin from '../../../assets/HSC Students/Sci/afsinHSC.png'
import Rahila from '../../../assets/HSC Students/Sci/rahilaHSC.png'
import Uzma from '../../../assets/HSC Students/Sci/uzmaHSC.png'
import Zoya from '../../../assets/HSC Students/Sci/zoyaHSC.png'
import Nihal from '../../../assets/HSC Students/Sci/nihalHSC.png'
import Salin from '../../../assets/HSC Students/Sci/salinHSC.png'
import Meghan from '../../../assets/HSC Students/Sci/meghanHSC.png'
import Shahid from '../../../assets/HSC Students/Sci/shahidHSC.png'
import Sarina from '../../../assets/HSC Students/Sci/sarinaHSC.png'
import Salina from '../../../assets/HSC Students/Sci/salinaHSC.png'
import Arya from '../../../assets/HSC Students/Sci/aryaHSC.png'

import Masira from '../../../assets/HSC Students/Comm/masiraHSC.png'
import Zara from '../../../assets/HSC Students/Comm/zaraHSC.png'
import Mayank from '../../../assets/HSC Students/Comm/mayankHSC.png'
import Saad from '../../../assets/HSC Students/Comm/saadHSC.png'
import Mufit from '../../../assets/HSC Students/Comm/mufitHSC.png'
import Sayeem from '../../../assets/HSC Students/Comm/sayeemHSC.png'
import Falak from '../../../assets/HSC Students/Comm/falakHSC.png'

const Tab = () => {
  const [open, setOpen] = useState("science");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  const scienceData = [
    {
      image: Mahek,
      name: "Mahek B",
      percentage: 82.67,
    },
    {
      image: Afsin,
      name: "Afsin T",
      percentage: 82.50,
    },
    {
      image: Rahila,
      name: "Rahila K",
      percentage: 81.33,
    },
    {
      image: Uzma,
      name: "Uzma K",
      percentage: 80.50,
    },
    {
      image: Zoya,
      name: "Zoya K",
      percentage: 75.00,
    },
    {
      image: Nihal,
      name: "Nihal C",
      percentage: 71.33,
    },
    {
      image: Salin,
      name: "Salin K",
      percentage: 70.00,
    },
    {
      image: Meghan,
      name: "Meghan J",
      percentage: 68.50,
    },
    {
      image: Shahid,
      name: "Shahid N",
      percentage: 68.33,
    },
    {
      image: Sarina,
      name: "Sarina S",
      percentage: 66.33,
    },
    {
      image: Salina,
      name: "Salina S",
      percentage: 65.67,
    },
    {
      image: Arya,
      name: "Arya G",
      percentage: 63.33,
    },
  ];

  const commerceData = [
    {
      image: Masira,
      name: "Masira S",
      percentage: 94.50,
    },
    {
      image: Zara,
      name: "Zara T",
      percentage: 78.00,
    },
    {
      image: Mayank,
      name: "Mayank C",
      percentage: 74.53,
    },
    {
      image: Saad,
      name: "Saad A",
      percentage: 69.00,
    },
    {
      image: Mufit,
      name: "Mufit K",
      percentage: 67.00,
    },
    {
      image: Sayeem,
      name: "Sayeem K",
      percentage: 78.00,
    },
    {
      image: Falak,
      name: "Falak M",
      percentage: 66.17,
    },
  ];

  const resultsData = open === "science" ? scienceData : commerceData;

  // return (
  //   <>
  //     <section className="lg:py-[20px]">
  //       <div>
  //       <p className="text-4xl font-semibold text-center text-[#1F42B0]">
  //         HSC Pass Outs - 2024 Batch
  //       </p>
  //         <div className="-mx-4 flex flex-wrap justify-center">
  //           <div className="w-full px-4">
  //             <div className="mb-14 w-full">
  //               <div className="flex flex-col flex-wrap rounded-lg px-4 py-3 dark:border-dark-3 sm:flex-row justify-center">
  //                 <a
  //                   onClick={() => handleTabOpen("science")}
  //                   className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${
  //                     open === "science" ? "bg-primary text-red" : "text-black"
  //                   }`}
  //                 >
  //                   Science
  //                 </a>
  //                 <a
  //                   onClick={() => handleTabOpen("commerce")}
  //                   className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${
  //                     open === "commerce" ? "bg-primary text-red" : "text-black"
  //                   }`}
  //                 >
  //                   Commerce
  //                 </a>
  //               </div>
  //               <div className="flex flex-wrap justify-center">
  //                 {resultsData.map((data, index) => (
  //                   <Results
  //                     key={index}
  //                     image={data.image}
  //                     name={data.name}
  //                     percentage={data.percentage}
  //                   />
  //                 ))}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );

  return (
    <>
      <section className="lg:py-[20px]">
        <div>
          <p className="text-4xl font-semibold text-center text-[#1F42B0]">
            HSC Pass Outs - 2024 Batch
          </p>
          <p className="mb-1 mt-3  text-xl font-normal text-center text-gray-500 dark:text-gray-200">
          Almost 24% Growth compared to previous years
        </p>
          <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mb-14 w-full">
              <div className="flex flex-col flex-wrap rounded-lg px-4 py-3 dark:border-dark-3 sm:flex-row justify-center">
                <a
                  onClick={() => handleTabOpen("science")}
                  className={` cursor-pointer rounded-md px-4 py-3 text-xl font-medium  lg:px-6 ${
                    open === "science"
                      ? "bg-[#EEF6FF] text-[#1F42B0]"
                      : "text-black"
                  }`}
                >
                  Science
                </a>
                <a
                  onClick={() => handleTabOpen("commerce")}
                  className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium text-xl lg:px-6 ${
                    open === "commerce"
                    ? "bg-[#EEF6FF] text-[#1F42B0]"
                      : "text-black"
                  }`}
                >
                  Commerce
                </a>
              </div>
                <div className="flex flex-wrap justify-center">
                  {resultsData.map((data, index) => (
                    <Results
                      key={index}
                      image={data.image}
                      name={data.name}
                      percentage={data.percentage}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
};

export default Tab;



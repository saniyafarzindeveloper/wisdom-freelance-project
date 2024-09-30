import React from 'react';
import Edu from '../../assets/education.png'


function ValueItem({ imgSrc, bgColor, text }) {
  return (
    <div className="flex items-center">
      <div className={`mr-3 rounded-full ${bgColor} p-6`}>
        <img src={imgSrc} alt={text} className="h-16 w-16 object-contain" />
      </div>
      <p className="mb-2 text-base font-semibold text-gray-900">{text}</p>
    </div>
  );
}

export default function Values() {
  const valuesData = [
    {
      imgSrc: Edu,
      bgColor: 'bg-[#F47B3B]',
      text: 'Honesty'
    },
    {
      imgSrc: Edu,
      bgColor: 'bg-[#FCD026]',
      text: 'Dedication'
    },
    {
      imgSrc: Edu,
      bgColor: 'bg-[#00CCD4]',
      text: 'Consistency'
    },
    {
      imgSrc: Edu,
      bgColor: 'bg-teal-100',
      text: 'Passionate'
    },
   
  ];

  return (
    <section>
      <div className="mx-auto max-w-xl px-4 py-10 text-gray-600 lg:max-w-screen-lg">
        <h2 className="mb-8 text-3xl font-bold text-[#1C4ED8] lg:mb-20 lg:text-center lg:text-5xl">Our Core Values</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="self-center pr-5 lg:w-1/2">
            <p className="mb-4 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos amet laborum iste distinctio modi soluta fuga officia odio laudantium?</p>
            <p className="mb-4 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et maiores ex numquam repellat? Iure, illum illo nisi explicabo deleniti amet sapiente repudiandae blanditiis ullam esse nostrum neque eveniet impedit nesciunt, sint inventore reprehenderit cumque! Vero dolor facere cumque ad.</p>
          
          </div>

          <div className="mt-8 grid flex-wrap gap-y-8 sm:grid-cols-2 lg:mt-0 lg:ml-4 lg:w-1/2 lg:gap-y-10">
            {valuesData.map((value, index) => (
              <ValueItem
                key={index}
                imgSrc={value.imgSrc}
                bgColor={value.bgColor}
                text={value.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



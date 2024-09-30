import React from 'react';

const Feature = ({ imageSrc, title, description, bgColor, textColor }) => (
  <div
    className="shadow-lg m-2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl"
    style={{ background: bgColor }}
  >
    {/* <img src={imageSrc} alt={title} className="mx-auto block align-middle w-12 h-12" /> */}
    <h3 className="text-2xl font-bold text-center" style={{ color: textColor }}>
      {title}
    </h3>
    <p className="mt-5 text-center text-lg" style={{ color: textColor }}>
      {description}
    </p>
  </div>
);

export default function Features({ features }) {
  return (
    <section className="bg-white py-7 sm:py-10 lg:py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#214BC2] sm:text-4xl xl:text-5xl mt-10">
            What makes Wisdom Best
          </h2>
        </div>

        <div className="mt-2 sm:mt-8 md:mt-12 xl:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
              textColor={feature.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

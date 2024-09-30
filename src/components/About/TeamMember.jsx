import React from 'react';

const TeamMember = ({ image, name, position, description, expertise, dev_name }) => {
  const displayName = dev_name ? `Dev ${dev_name}` : `Prof ${name}`;

  return (
    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-20 sm:mb-15 xl:max-w-sm lg:w-2/5">
      <div className="rounded-md overflow-hidden shadow-md bg-white">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img src={image} alt={name} className="rounded-full object-cover h-full w-full shadow-md" />
          </div>
        </div>
        <div className="px-6 mt-16">
          <div className="font-bold text-3xl text-center pb-1 text-[#1F3A8A]">{displayName}</div>
          <p className="text-gray-800 text-sm text-center font-medium">({position})</p>
          {description && (
            <p className="pb-6 text-center text-[#001B79] text-lg pt-3 font-semibold">Teaches: {description}</p>
          )}
          {expertise && position !== "prof" && (
            <p className="pb-6 text-center text-[#001B79] text-lg pt-3 font-semibold">Expertise: {expertise}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

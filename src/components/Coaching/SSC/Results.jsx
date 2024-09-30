import React from "react";

function Results({ image, name, percentage }) {
  return (
    <div className="p-4">
      <div className="mb-4 text-center opacity-90">
        <img
          alt="profile"
          src={image}
          className="mx-auto object-cover rounded-full h-50 w-40"
        />
      </div>
      <div className="text-center">
        <p className="text-2xl text-gray-800 dark:text-white">{name}</p>
        <p className="text-xl font-light text-[#1F42B0]">
          {percentage}%
        </p>
      </div>
    </div>
  );
}

export default Results;

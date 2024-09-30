import React from 'react';
import Course from '../assets/graduation.png'

export default function CourseCard({ heading, subtext, image }) {
  return (
    <div className="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div className="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <img src={Course} alt="Course Icon" className="h-16 w-16" />
      </div>
      <p className="mb-3 font-medium uppercase text-white">{heading}</p>
      <p className="text-blue-200">{subtext}</p>
    </div>
  );
}

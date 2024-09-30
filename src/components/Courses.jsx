import React from 'react';
import Course from '../assets/graduation.png'
import CourseCard from './CourseCard';

const courseData = [
  {
    heading: 'Primary',
    subtext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.',
    image: Course,
  },
  {
    heading: 'Secondary SSC Board',
    subtext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.',
    image: '/path/to/image2.png',
  },
  {
    heading: 'AISSE(10th CBSE Board)',
    subtext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.',
    image: '/path/to/image3.png',
  },
  {
    heading: 'HSC - Science/Commerce',
    subtext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.',
    image: '/path/to/image4.png',
  },
  {
    heading: 'JEE/CET',
    subtext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.',
    image: '/path/to/image5.png',
  },
  {
    heading: 'Graduation/Masters',
    subtext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.',
    image: '/path/to/image5.png',
  },
  {
    heading: 'Courses/Certification',
    subtext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.',
    image: '/path/to/image5.png',
  },
];

export default function Courses() {
  return (
    <section className="bg-blue-900">
    <h1 className='text-white text-center text-5xl font-semibold pt-10'>Coaching at Wisdom</h1>
      <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
        <div>
          <h2 className="text-3xl font-medium text-white">
            Unmatched <br />
            Services.<br />
            Unmatched <br />
            Excellence.
          </h2>
        </div>

        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            heading={course.heading}
            subtext={course.subtext}
            image={course.image}
          />
        ))}
      </div>
    </section>
  );
}

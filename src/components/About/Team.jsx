// Team.js
import React from 'react';
import TeamMember from '../About/TeamMember';
import Teacher from '../../assets/teacher.png'
import MaleTeacher from '../../assets/maleTeacher.png'
import Developer from '../../assets/developer.png'

const teamMembers = [
  {
    image: MaleTeacher,
    name: 'Raza Khatib',
    position: 'M.Com, B.Ed ',
    description: "(H.S.C)Accounts/OCM/Eco, B.Com/M.Com, Theory/Cost",
  },
  {
    image: Teacher,
    name: 'Ayesha Murudkar ',
    position: 'M.Sc ',
    description: 'Maths, Biology'
  },
  {
    image: Teacher,
    name: 'Pathan Farzeen',
    position: 'M.Com',
    description: 'Maths and other subjects ',
  },
  {
    image: Teacher,
    name: 'Khadija Parkar ',
    position: 'M.Sc Inorganic Chemistry',
    description: 'Chemistry ',
  },
  {
    image: Teacher,
    name: 'Dania Tambe ',
    position: 'M.Com',
    description: 'Accounts ',
  },
  {
    image: Teacher,
    name: 'Tanzim Chougule ',
    position: 'M.Sc, B.Ed',
    description: "Physics",
  },
  {
    image: Teacher,
    name: 'Nikhat Kadiri ',
    position: 'M.Com',
    description: "Financial Accounting",
  },
  {
    image: Teacher,
    name: 'Aisha Maniyar ',
    position: 'BSC, B.Ed',
    description: "Science & Maths",
  },
  {
    image: Developer,
    dev_name: 'Saniya Farzin',
    position: 'Technical Lead',
    expertise: 'Tech, Website creation & maintainance'
  },
];
export default function Team() {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16 px-4 md:px-8 lg:px-16">
        <div>
          <h1 className="xl:text-5xl text-3xl text-center text-[#1C4ED8] font-extrabold pb-6 mx-auto">
            Wisdom's Star Faculty
          </h1>
        </div>
      </div>
      <div className="w-full bg-[#f3f4f7] px-4 sm:px-6 lg:px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around gap-6">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                image={member.image}
                name={member.name}
                position={member.position}
                description={member.description}
                expertise={member.expertise}
                dev_name={member.dev_name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import WisdomSchoolImg from '../assets/wisdomschool.jpeg'

export default function WisdomSchool() {
  return (
<article class="mx-2 my-5 max-w-screen-lg rounded-md border border-gray-100 text-gray-700 shadow-2xl md:mx-auto">
  <div class="flex flex-col md:flex-row">
    <div class="p-5 md:w-4/6 md:p-8">
      <span class="rounded-md bg-orange-400 px-2 py-1 text-xs uppercase text-white">NEW</span>
      <p class="mt-2 text-xl font-black md:mt-6 md:text-4xl">Wisdom English Pre-Primary School</p>
      <p class="mt-2 text-xl font-black md:mt-6 md:text-2xl text-[#1C4ED8]">Founder - Mr.Raza Khatib</p>
      <p class="mt-3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate vero soluta voluptatum error non.</p>

      <button class="mt-4 mr-2 flex items-center justify-center rounded-md bg-sky-400 px-8 py-2 text-center text-white duration-150 md:mb-4 hover:translate-y-1 hover:bg-sky-500">Enquire</button>
    </div>
    <div class="mx-auto hidden items-center px-5 md:flex md:p-8">
      <img class="rounded-md shadow-lg" src={WisdomSchoolImg} alt="Shop image" />
    </div>
  </div>
</article>

  )
}

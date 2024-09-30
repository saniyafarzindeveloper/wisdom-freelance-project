import React from 'react'

export default function Stat() {
  return (
    <section class="relative overflow-hidden  py-12 sm:py-16 lg:py-20">
    <div class="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
      <div class="absolute h-60 w-60 rounded-2xl border-4 border-blue-600"></div>
      <div class="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-blue-600"></div>
      <div class="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-blue-600"></div>
    </div>
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="sm:text-center">
        <h2 class="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
          We are <br class="sm:hidden" />
          growing rapidly
        </h2>
       
      </div>
  
      <div class="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
        <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
          <p class="relative text-5xl font-black text-blue-600">70+</p>
          <p class="relative mt-5 text-gray-600">Students Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque vel</p>
        </div>
  
        <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
          <p class="relative text-5xl font-black text-blue-600">70+</p>
          <p class="relative mt-5 text-gray-600">Certificates Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque vel</p>
        </div>
  
        <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
          <p class="relative m-0 text-5xl font-black text-blue-600">50+</p>
          <p class="relative mt-5 text-gray-600">Placements Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque vel</p>
        </div>
      </div>
    </div>
  </section>
  
  )
}

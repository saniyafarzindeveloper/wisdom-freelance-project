import React from 'react'

export default function Hero() {
  return (
    <div class="relative h-screen overflow-hidden bg-indigo-900">
    <img
      src="https://images.pexels.com/photos/771317/pexels-photo-771317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      class="absolute object-cover w-full h-full"
    />
    <div class="absolute inset-0 bg-black opacity-25"></div>

    <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
      <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
        <h1 class="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
          Excell in Your Boards 
          <br />
         Join Us Now!
        </h1>
      </div>
    </div>
  </div>
  )
}

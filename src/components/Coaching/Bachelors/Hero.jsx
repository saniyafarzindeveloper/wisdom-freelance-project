import React from 'react'

export default function Hero() {
  return (
    <div class="relative h-screen overflow-hidden bg-indigo-900">
    <img
      src="https://images.unsplash.com/photo-1658235081483-8f06aa0882cf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJhY2hlbG9yc3xlbnwwfHwwfHx8MA%3D%3D"
      class="absolute object-cover w-full h-full"
    />
    <div class="absolute inset-0 bg-black opacity-25"></div>

    <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
      <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
        <h1 class="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
         Take the next step in your Career
          <br />
         Join Us Now!
        </h1>
      </div>
    </div>
  </div>
  )
}

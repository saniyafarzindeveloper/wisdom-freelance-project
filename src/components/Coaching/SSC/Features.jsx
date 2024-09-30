import React from 'react'

export default function Features() {
  return (
    <div class="mx-auto my-10 grid max-w-screen-xl grid-cols-1 px-2 text-blue-800 sm:px-20 lg:grid-cols-3">
  <div class="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
    <h1 class="mb-6 text-4xl font-semibold">Why You should Choose Wisdom</h1> 
    <p class="text-blue-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.</p>
  </div>
  <div class="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-blue-50 p-5 sm:p-10 md:grid-cols-2 lg:mt-0">
    <div class="relative flex gap-5">
      <div class="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-blue-200 sm:static sm:bg-transparent md:text-5xl">01</div>
      <div class=""> 
        <h3 class="text-xl font-semibold">All Subjects Covered</h3>
        <p class="text-blue-900 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
      </div> 
    </div>
    <div class="relative flex gap-5">
      <div class="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-blue-200 sm:static sm:bg-transparent md:text-5xl">02</div>
      <div class="">
        <h3 class="text-xl font-semibold">Standard Board Pattern</h3>
        <p class="text-blue-900 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
      </div>
    </div>
    <div class="relative flex gap-5">
      <div class="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-blue-200 sm:static sm:bg-transparent md:text-5xl">03</div>
      <div class="">
        <h3 class="text-xl font-semibold">Doubt Solving Sessions</h3>
        <p class="text-blue-900 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
      </div>
    </div>
    <div class="relative flex gap-5">
      <div class="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-blue-200 sm:static sm:bg-transparent md:text-5xl">04</div>
      <div class="">
        <h3 class="text-xl font-semibold">Rigorous Paper Solving & Tests</h3>
        <p class="text-blue-900 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
      </div>
    </div>
  </div>
</div>

  )
}

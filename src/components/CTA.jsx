import React from 'react';

export default function CTA() {
  return (
    // <section 
    //   className="mx-auto w-screen h-full bg-cover bg-no-repeat py-16" 
    //   style={{ backgroundImage: 'url("https://images.pexels.com/photos/4723037/pexels-photo-4723037.jpeg?auto=compress&cs=tinysrgb&w=800")' }}
    // >
    
    //   <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
        
    //     <div className="my-4 py-16 text-center lg:my-0">
    //       <div className="">
    //         <h2 className="font-sans text-6xl font-extrabold text-white ">Join Us to have Brighter Future & Best Results</h2>
    //         <a 
    //           href="#" 
    //           className="mt-10 inline-flex h-12 items-center rounded-full border-4 border-white bg-blue-700 px-6 py-3 font-sans text-xl font-medium text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:shadow-lg"
    //         >
    //           Schedule a Demo
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div class=" bg-yellow-300">
  

  <div class="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
    <div class="flex flex-col items-center justify-between lg:flex-row">
      <div class="">
        <div class="lg:max-w-xl lg:pr-5">
          
          <h2 class="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug">
          Wisdom help's you to
            <span class="my-1 inline-block border-b-8 border-white bg-orange-400 px-4 font-bold text-white">stand out</span>
          </h2>
          <p class="text-base text-gray-900">Join Us towards our Mission of EXCELLENCE</p>
        </div>
        <div class="mt-3 flex flex-col items-center md:flex-row">
          <a href="/contact-us" class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800">Contact Us</a>
          {/* <a href="/" aria-label="" class="group inline-flex items-center font-semibold text-white"
            >Watch how it works
            <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a> */}
        </div>
      </div>
      <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
        </svg>
        <div class="abg-orange-400 w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute -left-10 -top-20 h-28 w-28 rounded-xl text-orange-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-red-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
          </svg>
          <div class="flex w-96 flex-wrap">
            <div class="h-48 w-1/2 rounded-full rounded-br-none bg-red-400"></div>
            <div class="rounded-[6rem] h-48 w-1/2 rounded-tl-none rounded-br-none bg-violet-400"></div>
            <div class="h-48 w-1/2 rounded-full rounded-b-none rounded-br-none bg-[#ce3434]"></div>
            <div class="h-48 w-1/2 rounded-full rounded-t-none rounded-br-none bg-indigo-600"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

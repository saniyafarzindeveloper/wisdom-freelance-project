import React from "react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section class="max-w-screen-xl px-4 py-12 mx-auto bg-[#FDE046] sm:py-16 sm:px-6 lg:px-8 lg:py-20 mb-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
          Feel confident in choosing what is best for You
        </h2>
      
      </div>
      <div class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div>
          <p class="text-5xl font-extrabold leading-none text-white">100+</p>
          <p class="mt-2 text-base font-medium leading-6 text-white">
            Students
          </p>
        </div>
        <div class="mt-10 sm:mt-0">
          <p class="text-5xl font-extrabold leading-none text-white">100+</p>
          <p class="mt-2 text-base font-medium leading-6 text-white">
            Aptitude Tests
          </p>
        </div>
        <div class="mt-10 sm:mt-0">
          <p class="text-5xl font-extrabold leading-none text-white">
            80+
          </p>
          <p class="mt-2 text-base font-medium leading-6 text-white">
           Hours
          </p>
        </div>
      </div>
      <div class="flex p-4 mx-auto mt-4 w-52">
      <Link to='/contact-us'> 
      <button
          type="button"
          class="w-full rounded-lg px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in shadow-md bg-[#2e54d3]"
        >
          Contact Us
        </button>
      </Link>
       
      </div>
    </section>
  );
}

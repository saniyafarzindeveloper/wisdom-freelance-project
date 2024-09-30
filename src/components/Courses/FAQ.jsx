import React, { useState } from "react";

export default function FAQ() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <div>
      <div>
        <img
          src="https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="blue pattern background"
          class="absolute w-full h-64 md:h-96 object-center object-fit z-0"
        />
        <div class="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-13">
          <div class="md:py-36 py-20">
            <h1
              role="heading"
              class="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white"
            >
              Frequently asked questions
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
            <div class="bg-white shadow rounded p-8">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-base font-semibold leading-none text-gray-800">
                  Is this course Certified?
                  </h2>
                </div>
                <button
                  onClick={() => setBox1(!box1)}
                  class="focus:outline-none  cursor-pointer"
                >
                  {box1 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {box1 && (
                <ul class="">
                  <li>
                    <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                     Every course that Wisdom offers is Certified
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div class="bg-white shadow rounded p-8 mt-8">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-base font-semibold leading-none text-gray-800">
                    What is the duration of the course?
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox2(!box2);
                  }}
                  data-menu
                  class="focus:outline-none    cursor-pointer"
                >
                  {box2 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box2 && (
                <ul>
                  <li>
                    <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                    The duration of the course 3 months. After the course is completed, Certification and Placements are provided.
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div class="bg-white shadow rounded p-8 mt-8">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-base font-semibold leading-none text-gray-800">
                    Is this course Online or Offline?
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setBox3(!box3);
                  }}
                  data-menu
                  class="focus:outline-none    cursor-pointer"
                >
                  {box3 ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      role="button"
                      aria-label="open dropdown"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {box3 && (
                <ul>
                  <li>
                    <p class="text-base leading-normal text-gray-600 mt-4 lg:w-96">
                     Every course at Wisdom is Offline which enables a competitive & healthy environment.
                    </p>
                  </li>
                </ul>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

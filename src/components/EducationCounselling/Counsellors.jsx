import React from "react";
import Raza from "../../assets/raza.png";
import Rauf from "../../assets/rauf.png";

export default function Counsellors() {
  return (
    <section class="bg-white">
      <div class="h-[32rem] bg-gray-100">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">
            Meet Our Excellent Counsellors
          </h1>

          <div class="flex justify-center mx-auto mt-6">
            <span class="inline-block w-40 h-1 bg-[#1F42B0] rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-[#1F42B0] rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-[#1F42B0] rounded-full"></span>
          </div>

          <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>
        </div>
      </div>

      <div class="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
        <div class="flex flex-col items-center justify-center gap-8 mt-8 xl:mt-16 md:flex-row">
          <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src={Raza}
              alt="Raza Khatib"
            />

            <h1 class="mt-4 text-2xl font-semibold text-[#1F42B0] capitalize dark:text-white">
              Raza Khatib
            </h1>

            <p class="mt-2 text-gray-500 capitalize">
              MCom, B.Ed
            </p>
          </div>

          <div class="flex flex-col items-center p-4 border sm:p-6 rounded-xl">
            <img
              class="object-cover w-full rounded-xl aspect-square"
              src={Rauf}
              alt="Rauf Khatib"
            />

            <h1 class="mt-4 text-2xl font-semibold text-[#1F42B0] capitalize">
              Rauf Khatib
            </h1>

            <p class="mt-2 text-gray-500 capitalize">
              M.Ed, B.Ed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

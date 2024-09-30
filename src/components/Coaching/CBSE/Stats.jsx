import React from "react";

export default function Stats() {
  return (
    <section class="py-10 leading-6 text-blue-900 sm:py-16 lg:py-24">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-3xl font-bold leading-9 sm:text-4xl sm:leading-tight">
            Impressive Results in last 5 Years
          </h2>
        </div>

        <div class="mt-8 grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:mt-16">
          <div class="relative overflow-hidden rounded-xl shadow-xl border-t-4 border-blue-200 bg-white">
            <div class="py-10 px-6">
              <div class="flex items-center">
                <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                  <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                  5+
                </h3>
                <span class="ml-3 text-base font-medium capitalize">
                 Years of Excellence
                </span>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-xl shadow-xl border-t-4 border-blue-200 bg-white">
            <div class="py-10 px-6">
              <div class="flex items-center">
                <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                  <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                  120+
                </h3>
                <span class="ml-3 text-base font-medium capitalize">
                  Students
                </span>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-xl shadow-xl border-t-4 border-blue-200 bg-white">
            <div class="py-10 px-6">
              <div class="flex items-center">
                <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                  <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                  5+
                </h3>
                <span class="ml-3 text-base font-medium capitalize">
               Glorious Batches
                </span>
              </div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-xl shadow-xl border-t-4 border-blue-200 bg-white">
            <div class="py-10 px-6">
              <div class="flex items-center">
                <h3 class="relative ml-2 inline-block text-4xl font-bold leading-none">
                  <span class="absolute -top-4 h-2 w-full bg-blue-200"></span>
                  70+
                </h3>
                <span class="ml-3 text-base font-medium capitalize">
                  Toppers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

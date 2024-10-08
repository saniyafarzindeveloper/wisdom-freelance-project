import React from 'react'
import Aptitude from '../../assets/aptitude.jpg'


export default function Features() {
  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:items-center">
            <div class="w-full space-y-12 lg:w-1/2 ">
                <div>
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-4xl ">explore our <br /> services</h1>

                    <div class="mt-2">
                        <span class="inline-block w-40 h-1 bg-[#1F42B0] blue-500 rounded-full"></span>
                        <span class="inline-block w-3 h-1 ml-1 bg-[#1F42B0] rounded-full"></span>
                        <span class="inline-block w-1 h-1 ml-1 bg-[#1F42B0] rounded-full"></span>
                    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    <img src="https://cdn-icons-png.flaticon.com/128/1989/1989875.png" />
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Educational Counselling</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <img src='https://cdn-icons-png.flaticon.com/128/15187/15187942.png' />
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Career Counselling</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <img src='https://cdn-icons-png.flaticon.com/128/12079/12079377.png'/>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Aptitude Test</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>
            </div>

            <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={Aptitude} alt="Aptitude Test" />
            </div>
        </div>

        <hr class="my-12" />

        
    </div>
</section>
  )
}

import React from "react";
import Logo from '../assets/logo.png';

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bottom-32 -z-10 bg-gradient-to-br from-blue-800 to-blue-300"></div>

      {/* <header className="sticky top-0 z-50 text-white shadow bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="relative flex max-w-screen-xl flex-col overflow-hidden sm:mx-auto sm:flex-row sm:items-center">
          <img src={Logo} className="mx-auto h-12 sm:h-16" alt="Wisdom Education Logo"/>
          <a href="#" className="cursor-pointer whitespace-nowrap font-black sm:ml-4 text-2xl">WISDOM EDUCATION</a>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label className="absolute top-5 right-7 cursor-pointer sm:hidden" htmlFor="navbar-open">
            <span className="sr-only">Toggle Navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <nav aria-label="Header Navigation" className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 sm:ml-24 sm:max-h-full sm:flex-row sm:items-start">
            <ul className="flex flex-col items-center space-y-2 sm:ml-auto sm:flex-row sm:space-y-0">
              <li className="sm:mr-12"><a href="/about">About Us</a></li>
              <li className="sm:mr-12"><a href="#">Courses & Certification</a></li>
              <li className="sm:mr-12"><a href="#">Boards</a></li>
              <li className="sm:mr-12">
                <button className="rounded-full border-2 border-white px-6 py-1 text-white transition-colors hover:bg-white hover:text-indigo-600">Login</button>
              </li>
            </ul>
          </nav>
        </div>
      </header> */}

      <div className="mx-auto flex max-w-screen-md flex-col">
        <h1 className="mt-10 text-center text-3xl font-bold text-white sm:mt-20 sm:text-5xl">We Aim for Excellence</h1>
        <p className="mt-6 text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut hic, deserunt recusandae dolorem minus quaerat suscipit excepturi doloribus nam labore? Voluptatem modi maxime iste.</p>
        <div className="abg-white relative mx-auto mt-8 w-full max-w-sm space-y-2 overflow-hidden sm:space-y-0 sm:rounded-full">
          {/* <input className="w-full rounded-full py-2 px-5 text-center outline-none sm:text-left" type="text" placeholder="Enter your email to start free trial" />
          <button className="right-0 w-full rounded-full bg-rose-500 px-8 py-2 text-white sm:absolute sm:w-auto">Free Trial</button> */}

          <div className="flex justify-center mt-3">
          <button className="bg-white text-blue-900 px-6 py-2 rounded-full">Know More</button>
        </div>
        </div> 
      </div>
      <img className="mx-auto mt-16 w-full max-w-screen-lg rounded-xl shadow-lg shadow-indigo-100" src="https://images.pexels.com/photos/7616700/pexels-photo-7616700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
    </div>
  );
}

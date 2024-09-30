import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Coaching",
    subItems: [
      {
        name: "Primary",
        href: "/primary",
      },
      {
        name: "Secondary SSC Board",
        href: "/ssc",
      },
      {
        name: "10th CBSE Board",
        href: "/cbse",
      },
      {
        name: "HSC Sci/Com",
        href: "/hsc",
      },
      {
        name: "IMU CET/CET",
        href: "/cet",
      },
      {
        name: "Bachelors",
        href: "/bachelors-masters",
      },

    ],
  },
  {
    name: "Courses",
    subItems: [
      {
        name: "Logistics",
        href: "/logistics",
      },
      {
        name: "SCM",
        href: "/scm",
      },
      {
        name: "English Speaking",
        href: "/english-speaking",
      },
    ],
  },
  {
    name: "Educational Counselling",
    href: "/educational-counselling"
  }
];

export default function Navbar() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(index === openDropdown ? null : index);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex max-w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 ">
          <span className=" bg-white px-2 py-1 flex items-center gap-3">
            <Link to="/">
              <img src={Logo} alt="Logo" width="70" height="70" />
             
            </Link>
            <p className="font-bold text-2xl">WISDOM EDUCATION</p>
          </span>
        </div>
        <div className="hidden lg:flex items-start">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={item.name}>
                {item.subItems ? (
                  <div className="relative group">
                    <Link
                      to="#"
                      className="inline-flex items-center text-md font-normal text-gray-800 hover:text-gray-900"
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.name}
                      <span>
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </span>
                    </Link>
                    {openDropdown === index && (
                      <ul
                        style={{ zIndex: 1001 }}
                        className="absolute left-0 mt-2 space-y-2 bg-white border border-gray-200 py-2 rounded-lg"
                      >
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              to={subItem.href}
                              className="block px-4 py-2 text-md font-normal hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-md font-normal text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block space-x-2">
        <Link to='/contact-us'>
          <button
         
            type="button"
            className="w-full rounded-md border bg-[#1F42B0] border-[#1F42B0]  hover:bg-[#1F398A] hover:text-white text-white px-3 py-2 text-sm font-light  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
         Contact Us
          </button>
</Link>
          {/* <button
            type="button"
            className="rounded-md border px-3 py-2 text-sm font-normal bg-[#3066be] border-[#6d9dc5]  hover:bg-[#68a6d9] hover:text-white text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Log In
          </button> */}
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="h-6 w-6 p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <div className="flex flex-col space-y-1">
                <span className="h-1 w-4 bg-gray-800"></span>
                <span className="h-1 w-4 bg-gray-800"></span>
                <span className="h-1 w-4 bg-gray-800"></span>
              </div>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <span>
                        <Link to="/">
                          <img src={Logo} alt="Logo" width="100" height="100" />
                        </Link>
                        
                      </span>
                    </span>
                    {/* <span className="font-normal text-[#318c74]">HiPER</span> */}
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item, index) =>
                      item.subItems ? (
                        <div key={item.name}>
                          <Link
                            to="#"
                            className="inline-flex items-center text-sm font-light text-gray-800 hover:text-gray-900"
                            onClick={() => toggleDropdown(index)}
                          >
                            {item.name}
                            <span>
                              <ChevronDown className="ml-2 h-4 w-4" />
                            </span>
                          </Link>
                          {openDropdown === index && (
                            <ul className="mt-2 space-y-2">
                              {item.subItems.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.href}
                                    className="block px-4 py-2 text-sm font-light hover:bg-gray-100"
                                    onClick={toggleMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm font-light hover:bg-gray-100"
                          onClick={toggleMenu}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </nav>
                </div>

                <div className="mt-2 space-y-2">
                <Link to='/contact-us'>
          <button
         
            type="button"
            className="w-full rounded-md border bg-[#1F42B0] border-[#1F42B0]  hover:bg-[#1F398A] hover:text-white text-white px-3 py-2 text-sm font-light  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
         Contact Us
          </button>
</Link>
                  {/* <button
                    type="button"
                    className="w-full rounded-md border bg-[#3066be] border-[#6d9dc5]  hover:bg-[#68a6d9] hover:text-white text-white px-3 py-2 text-sm font-light  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Log In
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

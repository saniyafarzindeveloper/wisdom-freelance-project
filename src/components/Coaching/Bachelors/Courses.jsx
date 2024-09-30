import React from "react";

export default function Courses({ heading, text }) {
  return (
    <>
      
      <article className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-xl transition hover:shadow-2xl sm:p-6">
        <div className="flex">
          <span className="inline-block rounded bg-blue-600 p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span>

          <h3 className="ml-3 mt-2 text-2xl font-medium text-gray-900 ">
            {heading}
          </h3>
        </div>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {text}
        </p>
      </article>
    </>
  );
}

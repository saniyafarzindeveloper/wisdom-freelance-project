import React from "react";
import Raza from "../../assets/raza.png";
import Raza2 from "../../assets/raza2.jpeg";

export default function Founder() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Meet the Man himself - Raza Khatib
              </h2>

              <p className="hidden text-white/90 sm:mt-4 sm:block">
                Prof.Raza is a dedicated educator with a Master's degree in
                Commerce from Mumbai University and a Bachelor's degree in
                Education. Since beginning of his career at the age of 22, he
                has accumulated over six years of experience in the education
                field.<br />His journey has been enriched by achieving significant
                milestones, including completing certification courses in
                counseling and import-export management. With a diverse
                professional background spanning various fields both in India
                and abroad, Prof.Raza brings a wealth of knowledge and a global
                perspective to their coaching practice at Wisdom Education.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="https://www.instagram.com/raza_khatib07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  FOLLOW
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="raza-founder"
              src={Raza}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt="raza-founder"
              src={Raza2}
              className="h-40 w-full object-fill sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

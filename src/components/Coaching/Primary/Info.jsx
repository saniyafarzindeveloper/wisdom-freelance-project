import React from 'react'

export default function Info() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-7">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://images.pexels.com/photos/6936177/pexels-photo-6936177.jpeg?auto=compress&cs=tinysrgb&w=800"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-5xl font-semibold sm:text-4xl">Strenghten Your Foundation <br /> with Us</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <a
          href="/contact-us"
          className="mt-8 inline-block rounded bg-[#1F42B0] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#183696]"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

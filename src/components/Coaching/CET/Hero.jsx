export default function Hero() {
  return (
    <div class="relative h-screen overflow-hidden bg-indigo-900">
      <img
        src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW50ZXJhbmNlJTIwdGVzdHxlbnwwfHwwfHx8MA%3D%3D"
        class="absolute object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-25"></div>

      <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div class="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
          <h1 class="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
            Crack Enterance Tests with Us
            <br />
            Join Us Now!
          </h1>
        </div>
      </div>
    </div>
  );
}

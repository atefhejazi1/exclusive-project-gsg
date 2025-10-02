import React from "react";
import Slide1Img1 from "../../assets/Slide1Img1.png";

const Index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      {/* Section Header */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center">
          <div className="w-5 h-10 bg-red-700 rounded-sm"></div>
          <h3 className="ml-3 text-red-700 text-lg font-semibold">Featured</h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
            New Arrival
          </h3>
        </div>
      </div>

      {/* --- Main Content Grid --- */}
      {/* 1. On 'lg' screens, the grid columns will naturally be the same height.
        2. We define an explicit height for the left column on 'lg' and up.
        3. We make the right column's children (the top big card and the bottom small cards container) 
           split the available vertical space using `h-1/2` (or similar for complex layouts).
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Left Section (Large Card) - Defines the required height on LG screens */}
        {/* Use lg:h-[700px] to set the target height for the entire section on large screens */}
        <div className="relative bg-black w-full h-80 md:h-[450px] lg:h-[700px] overflow-hidden rounded-lg">
          <img
            src={Slide1Img1}
            alt="Left Section"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white p-4 max-w-sm">
            <h2 className="text-xl sm:text-3xl font-bold mb-2">Title Left</h2>
            <p className="text-sm sm:text-base">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="mb-4 text-sm sm:text-base hidden sm:block">
              Description goes here for the left section.
            </p>
            <button className="underline text-white transition hover:text-red-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section (Big Card + Two Small Cards) - Must match the Left Section's height on LG */}
        {/* Added lg:h-[700px] to explicitly match the left side's height */}
        {/* Added lg:flex-col to enforce vertical stacking on large screens */}
        <div className="flex flex-col gap-6 md:gap-8 lg:h-[700px]">
          {/* Top-Right Card (Big Card) */}
          {/* Added lg:flex-grow to ensure it takes up flexible space */}
          <div className="flex flex-col sm:flex-row bg-black rounded-lg overflow-hidden h-64 md:h-72 lg:h-1/2">
            {/* Text Section */}
            <div className="text-white p-4 flex flex-col justify-center flex-1 order-2 sm:order-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Big Title</h2>
              <p className="text-sm sm:text-base">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="mb-4 text-sm sm:text-base hidden md:block">
                Big description text goes here.
              </p>
              <button className="underline text-white transition hover:text-red-300">
                Shop Now
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full sm:w-1/2 h-32 sm:h-full relative order-1 sm:order-2">
              <img
                src={Slide1Img1}
                alt="Right Big"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom-Right Cards (Two Small Cards) */}
          {/* Added lg:h-1/2 to ensure this section takes up the remaining half of the available height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:h-1/2">
            {/* Small Card 1 */}
            <div className="relative bg-black rounded-lg overflow-hidden h-64 md:h-72 lg:h-full">
              <img
                src={Slide1Img1}
                alt="Small 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white p-3 max-w-xs">
                <h3 className="font-bold text-lg mb-1">Small 1</h3>
                <p className="text-sm mb-2 hidden sm:block">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="underline text-white transition hover:text-red-300">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="relative bg-black rounded-lg overflow-hidden h-64 md:h-72 lg:h-full">
              <img
                src={Slide1Img1}
                alt="Small 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white p-3 max-w-xs">
                <h3 className="font-bold text-lg mb-1">Small 2</h3>
                <p className="text-sm mb-2 hidden sm:block">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="underline text-white transition hover:text-red-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
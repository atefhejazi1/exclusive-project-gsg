import React from "react";
import Slide1Img1 from "../../assets/Slide1Img1.png";

const Index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* القسم الأيسر */}
        <div className="relative bg-black w-full h-80 sm:h-96  lg:h-10/12">
          <img
            src={Slide1Img1}
            alt="Left Section"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-70 p-4 rounded-lg max-w-xs sm:max-w-sm">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Title Left</h2>
            <p className="text-sm sm:text-base">
              Black and White version of the PS5 coming out on sale.
            </p>
            <p className="mb-4 text-sm sm:text-base">
              Description goes here for the left section.
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* القسم الأيمن */}
        <div className="flex flex-col  gap-4">
          {/* الديف الكبير */}
          <div className="flex flex-col lg:flex-row bg-black items-center gap-4 px-4 py-4 rounded-lg">
            {/* Text Section */}
            <div className="text-white bg-black bg-opacity-70 p-4 rounded-lg flex-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Big Title</h2>
              <p className="text-sm sm:text-base">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="mb-4 text-sm sm:text-base">Big description text goes here.</p>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Shop Now
              </button>
            </div>

            {/* Image Section */}
            <img
              src={Slide1Img1}
              alt="Right Big"
              className="w-full lg:w-1/2 h-48 sm:h-64 lg:h-full object-cover rounded-lg"
            />
          </div>

          {/* الديفين الصغار */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Small Card 1 */}
            <div className="relative bg-black rounded-lg overflow-hidden h-64 sm:h-48">
              <img
                src={Slide1Img1}
                alt="Small 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-70 p-3 rounded-lg max-w-xs sm:max-w-sm">
                <h3 className="font-bold text-lg mb-1">Small 1</h3>
                <p className="text-sm mb-2">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="relative bg-black rounded-lg overflow-hidden h-64 sm:h-48">
              <img
                src={Slide1Img1}
                alt="Small 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-70 p-3 rounded-lg max-w-xs sm:max-w-sm">
                <h3 className="font-bold text-lg mb-1">Small 2</h3>
                <p className="text-sm mb-2">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
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

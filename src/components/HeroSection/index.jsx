import React, { useState } from "react";
import { categories } from "./CategoriesList";
import { slides } from "./Slides";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openIndex, setOpenIndex] = useState(null); // للتحكم في فتح/إغلاق الـ sub categories

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex items-center justify-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col md:flex-row h-full gap-6">
        <div className="md:w-2/5 lg:w-1/5 w-full flex flex-col md:justify-center pt-5 gap-4 border-r border-black/30">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col">
              <button
                onClick={() => toggleCategory(index)}
                className="flex cursor-pointer items-center justify-between text-lg font-medium text-black transition py-1 pr-4 rounded-md md:text-left text-center"
              >
                <span>{cat.name}</span>

                {cat.children && cat.children.length > 0 && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-200 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  >
                    <path
                      d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z"
                      fill="black"
                    />
                  </svg>
                )}
              </button>

              {openIndex === index &&
                cat.children &&
                cat.children.length > 0 && (
                  <div className="ml-4 flex flex-col gap-2">
                    {cat.children.map((sub, subIndex) => (
                      <button
                        key={subIndex}
                        className="text-base text-gray-700 hover:text-red-500 transition"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="lg:w-4/5  mt-5 relative bg-black text-white w-full flex flex-col md:flex-row md:items-center md:gap-4">
          <div className="md:w-1/2 w-full p-4 flex flex-col justify-center">
            <h2 className="text-2xl  font-bold mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-white">{slides[currentSlide].description}</p>

            <div className="flex mt-3 items-center cursor-pointer">
              <a href="" className="border-b-2 text-white mr-5  text-lg">
                Shop Now
              </a>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="#FAFAFA"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="md:w-1/2 w-full relative flex items-center justify-center">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-[250px] md:h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-red-500" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

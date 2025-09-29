import React, { useState } from "react";
import Slide1Img from "../../assets/hero_endframe__cvklg0xk3w6e_large 2.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Slide1Img,
      title: "عنوان المرأة",
      description: "هذا النص مرتبط بالمرأة ويظهر بجانب الصورة.",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+2",
      title: "عنوان الرجال",
      description: "هذا النص مرتبط بالرجال ويظهر بجانب الصورة.",
    },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+3",
      title: "عنوان الإلكترونيات",
      description: "هذا النص مرتبط بالإلكترونيات ويظهر بجانب الصورة.",
    },
  ];

  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full flex items-center justify-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col md:flex-row h-full gap-6">
        {/* القائمة الجانبية */}
        <div className="md:w-1/3 w-full flex flex-col md:justify-center pt-5 gap-4 border-r border-black/30">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="text-lg font-medium text-black transition py-1 pr-4 rounded-md md:text-left text-center"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* النص + الصورة */}
        <div className="md:w-2/3  mt-5 bg-black text-white w-full flex flex-col md:flex-row md:items-center md:gap-4">
          {/* النص */}
          <div className="md:w-1/2 w-full p-4 flex flex-col justify-center">
            <h2 className="text-2xl  font-bold mb-2">
              {slides[currentSlide].title}
            </h2>
            <p className="text-white">{slides[currentSlide].description}</p>
          </div>

          {/* الصورة */}
          <div className="md:w-1/2 w-full relative flex items-center justify-center">
            <img
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-[250px] md:h-[400px] object-cover rounded-lg"
            />

            <div className="absolute bottom-4 flex gap-2">
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
      </div>
    </section>
  );
};

export default Index;

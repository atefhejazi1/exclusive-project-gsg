import React, { useState } from "react";
import Slide1Img1 from "../../assets/Slide1Img1.png";
import Slide1Img2 from "../../assets/Slide1Img2.png";
import Slide1Img3 from "../../assets/Slide1Img3.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: Slide1Img1,
      title: "Women's Special Offer",
      description:
        "Grab this exclusive voucher for women's products and enjoy amazing discounts!",
    },
    {
      image: Slide1Img2,
      title: "Men's Exclusive Deal",
      description:
        "This voucher gives you special savings on men's fashion and accessories.",
    },
    {
      image: Slide1Img3,
      title: "Electronics Discount Voucher",
      description:
        "Use this voucher to get great deals on electronics and gadgets.",
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
        <div className=" md:w-2/5 lg:w-1/5 w-full flex flex-col md:justify-center pt-5 gap-4 border-r border-black/30">
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
        <div className="lg:w-4/5  mt-5 relative bg-black text-white w-full flex flex-col md:flex-row md:items-center md:gap-4">
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

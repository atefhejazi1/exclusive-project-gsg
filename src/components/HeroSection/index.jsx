import React, { useEffect, useState } from "react";
import { categories } from "./CategoriesList";

const Index = () => {
  const [products, SetProducts] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const goToSlide = (index) => {
    if (products && index >= 0 && index < products.length) {
      setCurrentSlide(index);
    }
  };

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => SetProducts(data));
  }, []);

  const currentProduct = products ? products[currentSlide] : null;
  const totalSlides = products ? products.length : 0;

  if (!products) {
    return (
      <section className="w-full flex items-center justify-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <p className="text-xl font-semibold">Loading products...</p>
      </section>
    );
  }

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

        {currentProduct && (
          <div className="lg:w-4/5  mt-5 relative bg-black text-white w-full flex flex-col md:flex-row md:items-center md:gap-4">
            <div className="md:w-1/2 w-full p-4 flex flex-col justify-center">
              <h2 className="text-2xl  font-bold mb-2">
                {currentProduct.title}
              </h2>
              <p className="text-white">
                {currentProduct.description.substring(0, 150) + "..."}{" "}
              </p>

              <div className="flex mt-3 items-center cursor-pointer">
                <a
                  href={`/products/${currentProduct.id}`}
                  className="border-b-2 text-white mr-5  text-lg"
                >
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="md:w-1/2 w-full relative flex items-center justify-center">
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-full h-[250px] md:h-[400px] object-contain p-4 rounded-lg"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {products.slice(0 , 6).map((_, index) => (
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
        )}
      </div>
    </section>
  );
};

export default Index;

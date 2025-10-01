import React from "react";
import CategorySmartWatch from "../../assets/categories/Category-SmartWatch.svg";
import CategoryHeadphone from "../../assets/categories/Category-Headphone.svg";
import CategoryGamePat from "../../assets/categories/Category-Gamepad.svg";
import CategoryComputer from "../../assets/categories/Category-Computer.svg";
import CategoryCellPhone from "../../assets/categories/Category-CellPhone.svg";
import CategoryCamera from "../../assets/categories/Category-Camera.svg";

const categoryList = [
  {
    icon: CategorySmartWatch,
    title: "Phones",
  },
  {
    icon: CategoryHeadphone,
    title: "Computers",
  },
  {
    icon: CategoryGamePat,
    title: "SmartWatch",
  },
  {
    icon: CategoryComputer,
    title: "Camera",
  },
  {
    icon: CategoryCellPhone,
    title: "HeadPhones",
  },
  {
    icon: CategoryCamera,
    title: "Gaming",
  },
];

const Index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      {/* Section Header */}
      <div className="flex flex-col mb-8">
        <div className="flex items-center">
          <div className="w-5 h-10 bg-red-700 rounded-sm"></div>
          <h3 className="ml-3 text-red-700 text-lg font-semibold">
            Categories
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Browse By Category
          </h3>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 5L4 12L11 19M4 12H20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-gray-300 rounded-lg p-6 cursor-pointer 
                 transition hover:bg-red-500 group"
          >
            <img
              src={category.icon}
              alt={category.title}
              className="w-12 h-12 mb-3 transition group-hover:brightness-0 group-hover:invert"
            />
            <h2 className="text-sm md:text-base font-medium text-gray-700 transition group-hover:text-white">
              {category.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

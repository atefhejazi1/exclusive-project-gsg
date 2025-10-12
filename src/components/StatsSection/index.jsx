import React from "react";
import { listOfStats } from "./listOfStats";

const index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
      <div
        className="
          flex flex-col 
          sm:flex-row 
          sm:flex-wrap  
          gap-8 
          sm:gap-10 
          md:gap-12 
          justify-center 
          text-center
        "
      >
        {listOfStats.map((stat, index) => (
          <div
            key={index}
            className="
              border 
              p-6 
              rounded-xl 
              shadow-lg 
              w-full                 
              sm:w-[calc(50%-20px)]  
              lg:w-full                 
              lg:flex-1              
              flex-shrink-0 
              flex 
              flex-col 
              items-center
              bg-white
            "
            // ملاحظة: تم إزالة الـ 'style' الذي يحتوي على minWidth: '280px' لترك Tailwind يتولى الأمر
          >
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gray-300 mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black">
                {stat.icon}
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              {stat.value}
            </h2>

            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
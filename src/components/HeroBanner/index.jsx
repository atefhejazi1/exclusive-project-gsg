import React from "react";
import HeadPhone from "../../assets/headphone.png";

const Index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto  px-4 sm:px-6 lg:px-8 p-40 ">
      <div className="flex flex-col md:flex-row bg-black rounded-lg overflow-hidden   shadow-lg">
        <div className="md:w-1/2 p-6 flex flex-col justify-center gap-6">
          <span className="text-sm uppercase tracking-wide text-green-400 font-bold">
            Categories
          </span>
          <h2 className="text-3xl text-white  md:text-7xl font-medium">
            Enhance Your Music Experience
          </h2>

          {/* العد التنازلي */}
          <div className="flex gap-4 mt-4 flex-wrap">
            <div className="flex flex-col w-[66px] h-[66px]  md:w-[80px] md:h-[80px] items-center justify-center bg-white rounded-full ">
              <h3 className="text-md md:text-lg font-bold">23</h3>
              <h4 className="text-sm text-gray-400">Hours</h4>
            </div>
            <div className="flex flex-col w-[66px] h-[66px]  md:w-[80px] md:h-[80px] items-center justify-center bg-white rounded-full ">
              <h3 className="text-md md:text-lg font-bold">05</h3>
              <h4 className="text-sm text-gray-400">Days</h4>
            </div>
            <div className="flex flex-col w-[66px] h-[66px]  md:w-[80px] md:h-[80px] items-center justify-center bg-white rounded-full ">
              <h3 className="text-md md:text-lg font-bold">59</h3>
              <h4 className="text-sm text-gray-400">Minutes</h4>
            </div>
            <div className="flex flex-col w-[66px] h-[66px]  md:w-[80px] md:h-[80px] items-center justify-center bg-white rounded-full ">
              <h3 className="text-md md:text-lg font-bold">35</h3>
              <h4 className="text-sm text-gray-400">Seconds</h4>
            </div>
          </div>
        </div>

        {/* القسم الأيمن */}
        <div className="md:w-1/2 flex justify-center items-center p-6">
          <img
            src={HeadPhone}
            alt="HeadPhone"
            className="min-w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

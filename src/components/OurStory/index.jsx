import React from "react";
import AboutImage from "../../assets/about/Side Image.png";

const index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        <div className="md:w-1/2 order-2 md:order-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
          </p>

          <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer electronics to fashion and lifestyle.
          </p>
        </div>

        <div className="md:w-1/2 order-1 md:order-2 w-full">
          <img
            src={AboutImage}
            alt="About Exclusive"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default index;

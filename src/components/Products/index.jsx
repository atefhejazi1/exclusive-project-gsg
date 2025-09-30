import Slide1Img1 from "../../assets/Slide1Img1.png";

const products = [
  {
    image: Slide1Img1,
    title: "The north coat",
    originalPrice: 360,
    discountPrice: 260,
    rate: 5,
  },
  {
    image: Slide1Img1,
    title: "The north coat",
    originalPrice: 360,
    discountPrice: 260,
    rate: 4,
  },
  {
    image: Slide1Img1,
    title: "The north coat",
    originalPrice: 360,
    discountPrice: 260,
    rate: 3,
  },
  {
    image: Slide1Img1,
    title: "The north coat",
    originalPrice: 360,
    discountPrice: 260,
    rate: 5,
  },
];

const Index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 py-20">
      {/* Section Header */}
      <div className="flex flex-col mb-5">
        <div className="flex items-center">
          <div className="w-5 h-10 bg-red-700"></div>
          <h3 className="ml-5 text-red-700 text-lg font-semibold">
            This Month
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Best Selling Products
          </h3>

          <button className="bg-red-700 text-white py-3 px-8 cursor-pointer rounded-md hover:bg-red-800 transition">
            View All
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="flex justify-center items-center h-64 bg-[#f5f5f5] rounded-lg">
                <img
                  src={product.image}
                  alt="Product"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h2 className="text-lg font-semibold mt-4">{product.title}</h2>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-red-500 line-through">
                  ${product.originalPrice}
                </span>
                <span className="text-gray-500  line-through">
                  ${product.discountPrice}
                </span>
              </div>

              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1"
                  >
                    <path
                      d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                      fill={i < product.rate ? "#FFAD33" : "#d1d5db"}
                    />
                  </svg>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;

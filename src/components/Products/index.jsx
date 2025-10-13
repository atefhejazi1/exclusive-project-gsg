import { useEffect, useState } from "react";
// import { products } from "./ProductsData";
import Product from "./Product";
import { useProducts } from "../../context/ProductsContext";

const Index = () => {
  const { products, loading, error } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const filteredProducts = products;

  let itemsPerPage = 8;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + itemsPerPage, filteredProducts.length - itemsPerPage)
    );
  };

  const currentProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  // const
  // );

  return (
    <div className="">
      <div className="flex flex-col mb-5 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 pt-20 pb-5">
        <div className="flex items-center">
          <div className="w-5 h-10 bg-red-700"></div>
          <h3 className="ml-5 text-red-700 text-lg font-semibold">
            Our Products
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-1 gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Explore Our Products
          </h3>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="bg-gray-300 text-white p-2 rounded-full hover:bg-gray-400 transition"
              disabled={currentIndex === 0}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5L4 12L11 19M4 12H20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-300 text-white p-2 rounded-full hover:bg-gray-400 transition"
              disabled={currentIndex + itemsPerPage >= filteredProducts.length}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 gap-6">
        {/* {currentProducts.map((product) => (
          <Product product={product} key={product.index} />
        ))} */}

        {currentProducts.map((product) => (
          <Product product={product} key={product.index} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-20">
        <button className="bg-red-700 text-white py-4 px-20 cursor-pointer rounded-md hover:bg-red-800 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Index;

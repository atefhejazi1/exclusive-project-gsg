import { useState } from "react";
// import { products } from "./ProductsData";
import Product from "./Product";
import { useProducts } from "../../context/ProductsContext";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const filteredProducts = products;

  let itemsPerPage = 5;

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

  //  const [productsDataData, SetProductsDataData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((response) => response.json())
  //       .then((data) => SetProductsDataData(data));
  //   }, []);

  return (
    <div className="">
      <div className="flex flex-col mb-5 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 pt-20 pb-5">
        <div className="flex items-center">
          <div className="w-5 h-10 bg-red-700"></div>
          <h3 className="ml-5 text-red-700 text-lg font-semibold">Today’s</h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-1 gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Flash Sales
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

      <div className="md:overflow-x-hidden ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 2xl:ml-44">
        <div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 pl-4 sm:pl-6 lg:pl-8">
          {currentProducts.slice(0, 5).map((product, index) => (
            <div
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[22%]"
              key={index}
            >
              <Product product={product} />
            </div>
          ))}
        </div>
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

import { products } from "./ProductsData";
import Product from "./Product";

const BestSelling = () => {
  return (
    <div className="">
      <div className="flex flex-col mb-5 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 pt-20 pb-5">
        <div className="flex items-center">
          <div className="w-5 h-10 bg-red-700"></div>
          <h3 className="ml-5 text-red-700 text-lg font-semibold">
            This Month
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-1 gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
            Best Selling Products
          </h3>

          <div className="flex gap-2">
            <button className="bg-red-600 text-white py-4 px-10 cursor-pointer rounded hover:bg-red-800 transition">
              View All
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 gap-6">
        {products.slice(0, 4).map((product) => (
          <Product product={product} key={product.index} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;

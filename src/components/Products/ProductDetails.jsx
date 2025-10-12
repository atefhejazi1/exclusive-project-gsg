import React, { useEffect, useState } from "react";
import PromoBanner from "../../components/PromoBanner";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Copyright from "../../components/Copyright";
import { useParams } from "react-router";
import Product from "./Product";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, SetProduct] = useState(null);
  const [relatedProducts, SetRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => SetProduct(data));
  }, [id]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => SetRelatedProducts(data));
  }, []);

  if (!product) return <p className="text-center py-10">Loading...</p>;
  return (
    <>
      <PromoBanner />
      <Navbar />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="text-gray-500 text-sm mb-6">
          Account / Gaming / <span className="text-black">{product.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mt-24">
          <div className="flex lg:flex-col gap-4 justify-center items-center lg:items-start">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 bg-gray-200 flex items-center justify-center  cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex-1 flex justify-center">
            <div className="bg-gray-200  shadow-md p-6 flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-sm w-full object-contain"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold">{product.title}</h2>

            <div className="flex items-center space-x-3">
              <div className="flex">
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
                      fill={i < 4 ? "#FFAD33" : "#d1d5db"}
                    />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm">(150 Reviews)</span>
              <span className="text-green-600 text-sm font-medium">
                In Stock
              </span>
            </div>

            <h3 className="text-2xl font-semibold">${product.price}</h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-3">
              <h4 className="font-medium">Colors:</h4>
              <div className="flex gap-2">
                <span className="bg-blue-400 border rounded-full h-5 w-5"></span>
                <span className="bg-red-400 border rounded-full h-5 w-5"></span>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <h4 className="font-medium">Size:</h4>
              <div className="flex gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border px-3 py-1 rounded-md hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-4">
              <div className="flex border border-gray-500">
                <button className="px-3 py-1">-</button>
                <button className="px-10 py-1 border-l border-r">1</button>
                <button className="px-3 py-1 bg-red-600 text-white">+</button>
              </div>

              <button className="bg-red-600 text-white px-5 py-2 cursor-pointer rounded-md hover:bg-red-800">
                Buy Now
              </button>

              <button className="border rounded-md p-2 hover:bg-gray-100">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="border  border-gray-400 rounded-lg divide-y mt-6">
              <div className="flex items-center gap-4 p-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_261_4843)">
                    <path
                      d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4843">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h2 className="font-semibold text-sm">Free Delivery</h2>
                  <p className="text-gray-500 text-xs">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <div className="flex  items-center gap-4 p-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_261_4865)">
                    <path
                      d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4865">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h2 className="font-semibold text-sm">Return Delivery</h2>
                  <p className="text-gray-500 text-xs">
                    Free 30 days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="flex flex-col mb-5 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 pt-20 pb-5 ">
          <div className="flex items-center">
            <div className="w-5 h-10 bg-red-700"></div>
            <h3 className="ml-5 text-red-700 text-lg font-semibold">
              Related Item
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 gap-6">
          {relatedProducts.slice(0, 4).map((product) => (
            <Product product={product} key={product.index} />
          ))}
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default ProductDetails;

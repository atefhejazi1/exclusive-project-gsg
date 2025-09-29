import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-1 border-black/30">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
          </div>

          <div className="hidden lg:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-gray-900"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-900 font-medium hover:text-gray-900"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-3 pr-10 py-1 border border-gray-300 bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded w-48 sm:w-64"
              />

              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                <svg
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <button className="hidden sm:block">
              <svg fill="#000" width="25px" height="25px" viewBox="0 0 24 24">
                <path d="M20.5,4.609A5.811,5.811,0,0,0,16,2.5a5.75,5.75,0,0,0-4,1.455A5.75,5.75,0,0,0,8,2.5,5.811,5.811,0,0,0,3.5,4.609c-.953,1.156-1.95,3.249-1.289,6.66,1.055,5.447,8.966,9.917,9.3,10.1a1,1,0,0,0,.974,0c.336-.187,8.247-4.657,9.3-10.1C22.45,7.858,21.453,5.765,20.5,4.609Z" />
              </svg>
            </button>

            <button className="hidden sm:block">
              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Services
          </a>
          <a href="#" className="block text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Index;

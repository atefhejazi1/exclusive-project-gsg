import React, { useContext, useState } from "react";
import Logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router";
import AccountDropdown from "../AccountDropdown";
import { CartContext } from "../../context/CartContext";
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const { cartCount } = useContext(CartContext);

  return (
    <nav className="bg-white border-b-1 border-black/30">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-8">
            <Link
              to="/"
              className={`text-gray-900 font-medium hover:text-gray-900 border-b-2 ${
                location.pathname === "/"
                  ? "border-gray-900"
                  : "border-transparent"
              }`}
            >
              Home
            </Link>

            <Link
              to="/contact"
              className={`text-gray-900 font-medium hover:text-gray-900 border-b-2 ${
                location.pathname === "/contact"
                  ? "border-gray-900"
                  : "border-transparent"
              }`}
            >
              Contact
            </Link>

            <Link
              to="/about"
              className={`text-gray-900 font-medium hover:text-gray-900 border-b-2 ${
                location.pathname === "/about"
                  ? "border-gray-900"
                  : "border-transparent"
              }`}
            >
              About
            </Link>

            <Link
              to="/signup"
              className={`text-gray-900 font-medium hover:text-gray-900 border-b-2 ${
                location.pathname === "/signup"
                  ? "border-gray-900"
                  : "border-transparent"
              }`}
            >
              Sign Up
            </Link>
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
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <Link to={"/checkout"} className="relative hidden sm:block">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 5H7L10 22H26"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="hidden sm:block">
              <AccountDropdown />
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
          <Link to="/" className="block text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-gray-900"
          >
            Contact
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link
            to="/signup"
            className="block text-gray-700 hover:text-gray-900"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Index;

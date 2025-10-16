import React from "react";
import SignUpImage from "../../assets/signup/signup.png";
import SignUpGoogle from "../../assets/signup/Google SIgn up.png";
import { Link } from "react-router";

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-20">
      <div className="w-full md:w-1/2 bg-[#CCE5E9] flex items-center justify-center p-4 md:p-0 md:block hidden sm:block">
        <img
          src={SignUpImage}
          alt="Sign Up"
          className="object-cover w-full h-auto max-h-96 md:max-h-full"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-10 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          Create an account
        </h2>
        <p className="text-center md:text-left">Enter your details below</p>

        <form className="space-y-4 mt-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 px-1"
          />
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 px-1"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 px-1"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg mt-6 hover:bg-red-700 transition-colors font-medium"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center mt-6">
          <img
            src={SignUpGoogle}
            alt="Sign Up with Google"
            className="h-12 cursor-pointer"
          />
        </div>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className=" font-semibold hover:text-red-700 transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Index;

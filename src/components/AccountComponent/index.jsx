import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const index = () => {
  const { user } = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  console.log(user);

  useEffect(() => {
    if (user) {
      const parts = user.username ? user.username.split(" ") : ["", ""];
      setFirstName(parts[0]);
      setLastName(parts[1] || "");
      setEmail(user.email || "");
      setAddress(user.address || "");
    }
  }, [user]);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4 p-4 lg:p-0">
          <h2 className="text-xl font-bold mb-4 pb-2">Manage My Account</h2>
          <ul className="space-y-2 mb-6 ml-5">
            <li>
              <a
                href="#"
                className="text-lg text-gray-700 hover:text-red-500 font-semibold transition-colors duration-200 block"
              >
                My Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-200 block"
              >
                Address Book
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-200 block"
              >
                My Payment Options
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-4 pb-2">My Orders</h2>
          <ul className="space-y-2 mb-6 ml-5">
            <li>
              <a
                href="#"
                className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-200 block"
              >
                My Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg text-gray-700 hover:text-red-500 transition-colors duration-200 block"
              >
                My Cancellations
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-4 pb-2">My WishList</h2>
        </div>

        <div className="w-full lg:w-3/4 p-6 md:p-8 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3">
            Edit Your Profile
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="mb-2 font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-3 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 form-input"
                type="text"
                id="firstName"
                placeholder="First Name"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="mb-2 font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-3 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 form-input"
                type="text"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 form-input"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="mb-2 font-medium text-gray-700"
              >
                Address
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="p-3 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 form-input"
                type="text"
                id="address"
                placeholder="Address"
              />
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2">
            Password Changes
          </h3>
          <div className="flex flex-col space-y-4 mb-8">
            <input
              className="p-3 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 form-input"
              type="password"
              id="currentPassword"
              placeholder="Current Password"
            />
            <input
              className="p-3 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 form-input"
              type="password"
              id="newPassword"
              placeholder="New Password"
            />
            <input
              className="p-3 bg-gray-100 rounded-md focus:ring-red-500 focus:border-red-500 transition duration-150 form-input"
              type="password"
              id="confirmNewPassword"
              placeholder="Confirm New Password"
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

import React, { useState } from "react";
import { dropdownItems } from "./DropdownItems";

const Index = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="relative">
      <a href="#" onClick={toggleDropdown} className="inline-block">
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <ul
        className={`absolute mt-2 w-60 rounded-lg transition-all duration-300 z-[11] ${
          open ? "block" : "hidden"
        } bg-black/30 backdrop-blur-md shadow-lg border border-white/20`}
      >
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex items-center p-2 text-white hover:text-gray-100"
            >
              {item.icon}
              <span className="ml-2"> {item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;

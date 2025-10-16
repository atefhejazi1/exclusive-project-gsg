import React, { useState } from "react";

const dropdownItems = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
          stroke="#FAFAFA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
          stroke="#FAFAFA"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    label: "Manage My Account",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z"
          stroke="#FAFAFA"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6"
          stroke="#FAFAFA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "My Orders",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_4344_458)">
          <path
            d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
            stroke="#FAFAFA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="11.25" stroke="white" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_4344_458">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    label: "My Cancellations",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3789 4.54785C11.5677 3.93719 12.4323 3.93719 12.6211 4.54785L13.8184 8.4209C14.0968 9.32148 14.9295 9.93631 15.8721 9.93652H19.8281C20.4514 9.93652 20.7176 10.7284 20.2207 11.1045L16.8906 13.623C16.1689 14.1689 15.8665 15.1091 16.1338 15.9736L17.3867 20.0264C17.5734 20.6313 16.8728 21.1193 16.3701 20.7344L13.3076 18.3877C12.5361 17.7967 11.4639 17.7967 10.6924 18.3877L7.61328 20.7471C7.11126 21.1311 6.41157 20.6446 6.59668 20.04L7.83203 16.0049C8.09492 15.1463 7.79679 14.214 7.08398 13.668L3.73438 11.1025C3.24116 10.7247 3.50858 9.93652 4.12988 9.93652H8.12793C9.07053 9.93631 9.90322 9.32147 10.1816 8.4209L11.3789 4.54785Z"
          stroke="#FAFAFA"
          strokeWidth="1.5"
        />
      </svg>
    ),
    label: "My Reviews",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
          stroke="#FAFAFA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Logout",
  },
];

const Index = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
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

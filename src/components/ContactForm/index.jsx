import React from "react";

const index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="flex flex-col w-full lg:w-5/12 space-y-8 p-8 border border-gray-200 rounded-lg shadow-sm">
          <div className="space-y-4 pb-4 border-b border-gray-300">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-2 rounded-full flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.55423 5.24L6.17123 1.335C5.78123 0.885 5.06623 0.887 4.61323 1.341L1.83123 4.128C1.00323 4.957 0.766232 6.188 1.24523 7.175C4.10685 13.1 8.88528 17.8851 14.8062 20.755C15.7922 21.234 17.0222 20.997 17.8502 20.168L20.6582 17.355C21.1132 16.9 21.1142 16.181 20.6602 15.791L16.7402 12.426C16.3302 12.074 15.6932 12.12 15.2822 12.532L13.9182 13.898C13.8484 13.9712 13.7565 14.0194 13.6566 14.0353C13.5567 14.0512 13.4543 14.0339 13.3652 13.986C11.1357 12.7021 9.28622 10.8502 8.00523 8.619C7.95726 8.52975 7.93989 8.42723 7.95578 8.32716C7.97168 8.22708 8.01996 8.13499 8.09323 8.065L9.45323 6.704C9.86523 6.29 9.91023 5.65 9.55423 5.239V5.24Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Call To Us
              </h2>
            </div>

            <h3 className="text-sm text-gray-600 ml-10">
              We are available 24/7, 7 days a week.
            </h3>
            <h4 className="text-sm font-medium text-gray-700 ml-10">
              Phone: <span className="font-semibold">+8801611112222</span>
            </h4>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 p-2 rounded-full flex items-center justify-center">
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L11 8L21 1M1 15H21V1H1V15Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Write To US
              </h2>
            </div>

            <h3 className="text-sm text-gray-600 ml-10">
              Fill out our form and we will contact you within 24 hours.
            </h3>
            <h3 className="text-sm font-medium text-gray-700 ml-10">
              Emails:{" "}
              <span className="font-semibold">customer@exclusive.com</span>
            </h3>
            <h3 className="text-sm font-medium text-gray-700 ml-10">
              Emails:{" "}
              <span className="font-semibold">support@exclusive.com</span>
            </h3>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-7/12 space-y-6 p-8 border border-gray-200 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
              placeholder="Your Name *"
            />
            <input
              type="email"
              className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
              placeholder="Your Email *"
            />
            <input
              type="tel"
              className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
              placeholder="Your Phone *"
            />
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              rows="8"
              className="w-full bg-gray-100 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

import QrCode from "../../assets/footer/Qrcode.png";
import GooglePlay from "../../assets/footer/google-play-app-store.png";
import AppStore from "../../assets/footer/download-appstore.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Exclusive</h2>
          <h3 className="text-lg mb-2">Subscribe</h3>
          <p className="mb-4">Get 10% off your first order</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full sm:w-64 px-3 py-2 rounded-md border text-gray-300 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2  px-3 py-1 rounded-md"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.91199 11.9998H3.99999L2.02299 4.1348C2.01033 4.0891 2.00262 4.04216 1.99999 3.9948C1.97799 3.2738 2.77199 2.7738 3.45999 3.1038L22 11.9998L3.45999 20.8958C2.77999 21.2228 1.99599 20.7368 1.99999 20.0288C2.00201 19.9655 2.01313 19.9029 2.03299 19.8428L3.49999 14.9998"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Support</h2>
          <ul className="space-y-1 text-sm">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Account</h2>
          <ul className="space-y-1 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Quick Link</h2>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Download App</h2>
          <p className="mb-4 text-sm">Save $3 with App New User Only</p>

          <div className="flex items-center gap-4">
            <div>
              <img
                src={QrCode}
                alt="QR Code"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <img
                src={GooglePlay}
                alt="Google Play"
                className="w-32 object-contain"
              />
              <img
                src={AppStore}
                alt="App Store"
                className="w-32 object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 py-4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z"
                fill="white"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1708_1563)">
                <path
                  d="M14.1211 4.44336C14.9979 4.09254 15.9592 4.00852 16.8838 4.20117C17.8082 4.39388 18.6557 4.85462 19.3193 5.52637L19.3486 5.55664H19.3906C19.7296 5.55426 20.0806 5.59738 20.498 5.53809C20.882 5.48352 21.3278 5.34203 21.915 5.00977C21.6091 6.49447 21.4324 7.16729 20.7646 8.08301L20.7451 8.10938V8.14258C20.7451 11.9414 19.5781 14.7564 17.8262 16.7393C16.0729 18.7234 13.7275 19.8816 11.3623 20.3535C9.7452 20.6761 7.754 20.5731 5.99609 20.2109C5.11794 20.03 4.30096 19.7842 3.62012 19.4971C3.03699 19.2511 2.56006 18.9759 2.22949 18.6885C2.6606 18.6463 3.41195 18.553 4.24414 18.3594C5.24389 18.1267 6.37194 17.749 7.20312 17.1406L7.31934 17.0557L7.19922 16.9766C6.50766 16.5207 4.81165 15.4984 3.73145 13.5166C2.66701 11.5637 2.19288 8.66296 3.91406 4.42578C5.57929 6.34325 7.27273 7.66041 8.99512 8.36719C9.57627 8.60556 9.94226 8.72333 10.2314 8.79102C10.5195 8.85841 10.7322 8.8754 10.9922 8.91113L11.2871 8.95215L11.1074 8.77148C11.1323 7.84188 11.4255 6.93867 11.9541 6.17285C12.4906 5.3958 13.2444 4.79414 14.1211 4.44336ZM15.9053 5.90137C15.119 5.90124 14.3638 6.20994 13.8027 6.76074C13.3119 7.24267 13.0038 7.87627 12.9248 8.55371L12.9053 8.84668L12.877 10.4209C12.8756 10.4914 12.8592 10.5613 12.8291 10.625C12.799 10.6887 12.7556 10.7452 12.7021 10.791C12.6487 10.8368 12.5861 10.8716 12.5186 10.8916C12.4511 10.9115 12.3802 10.9166 12.3105 10.9072L10.749 10.6953C8.71753 10.4183 6.7663 9.48248 4.88965 7.91895L4.75781 7.80859L4.72754 7.97754C4.42573 9.64812 4.56793 11.0709 5.14746 12.3018C5.72674 13.532 6.73875 14.5607 8.15625 15.4521L9.90234 16.5498C9.97145 16.5932 10.0296 16.6529 10.0703 16.7236C10.111 16.7944 10.1339 16.8744 10.1367 16.9561C10.1395 17.0377 10.1217 17.1189 10.0859 17.1924C10.0501 17.2658 9.99667 17.3299 9.93066 17.3779L8.33887 18.541L8.11523 18.7041L8.3916 18.7207C9.34472 18.7801 10.2532 18.738 11.0098 18.5879C13.3887 18.1129 15.375 16.9789 16.7656 15.2207C18.1559 13.4627 18.9453 11.0883 18.9453 8.14258C18.9453 7.99705 18.8715 7.78499 18.7441 7.55762C18.6144 7.32598 18.4211 7.06491 18.167 6.82031C17.6584 6.33085 16.8999 5.90145 15.9053 5.90137Z"
                  fill="white"
                  stroke="black"
                  stroke-width="0.2"
                />
              </g>
              <defs>
                <clipPath id="clip0_1708_1563">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z"
                fill="white"
              />
            </svg>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

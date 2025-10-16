import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import AccountComponent from "../components/AccountComponent";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Account = () => {
  return (
    <>
      <PromoBanner />
      <Navbar />

      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="text-gray-500 text-sm mb-6">
          Home / <span className="text-black">My Account</span>
        </div>

        <div>
          Welcome , <span className="text-red-500">Md Rimel</span>
        </div>
      </div>

      <AccountComponent />
      <Footer />
      <Copyright />
    </>
  );
};

export default Account;

import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";



import Footer from "../components/Footer";
import Copyright from "../components/Copyright";


const Checkout = () => {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="text-gray-500 text-sm mb-6">
          Home / <span className="text-black">About</span>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default Checkout;

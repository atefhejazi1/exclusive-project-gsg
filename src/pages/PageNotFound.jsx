import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <div className=" flex flex-col  justify-center items-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h2 className="text-9xl font-bold mb-5">404 Not Found</h2>

        <p>Your visited page not found. You may go home page.</p>

        <div className="flex justify-center items-center mt-20">
          <Link
            to="/"
            className="bg-red-700 text-white py-4 px-20 cursor-pointer rounded-md hover:bg-red-800 transition"
          >
            Back to home page
          </Link>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default PageNotFound;

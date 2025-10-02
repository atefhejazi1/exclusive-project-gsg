import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Categories from "../components/Categories";
import NewArrival from "../components/NewArrival";
import HeroBanner from "../components/HeroBanner";
import FlashSales from "../components/Products/FlashSales";
import BestSelling from "../components/Products/BestSelling";

const Home = () => {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <HeroSection />
      {/* <Products slug="Today’s" heading="Flash Sales" isFlashSales={true} /> */}
      <FlashSales />

      <Categories />

      <BestSelling />
      <HeroBanner />

      <Products />

      <NewArrival />
      <Features />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;

import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      <PromoBanner />
      <Navbar />
      <HeroSection />
      <Products />
      <Features />
    </div>
  );
};

export default Home;

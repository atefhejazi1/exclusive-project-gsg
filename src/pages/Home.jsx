import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <PromoBanner />
      <Navbar />
      <HeroSection />
      <Products />
    </div>
  );
};

export default Home;

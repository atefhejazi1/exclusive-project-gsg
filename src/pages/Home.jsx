import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
const Home = () => {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <HeroSection />
      <Products
        slug="Today’s"
        heading="Flash Sales"
        isFlashSales={true}
      />

      <Products
        slug="This Month"
        heading="Best Selling Products"
        isBestSelling={true}
      />

      <Products
        slug="Our Products"
        heading="Explore Our Products"
        isBestSelling={false}
      />
      <Features />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;

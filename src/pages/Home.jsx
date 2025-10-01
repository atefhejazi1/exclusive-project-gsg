import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Products from "../components/Products";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Categories from "../components/Categories";
import NewArrival from "../components/NewArrival";

const Home = () => {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <HeroSection />
      <Products slug="Today’s" heading="Flash Sales" isFlashSales={true} />

      <Categories />

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

      <NewArrival />
      <Features />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;

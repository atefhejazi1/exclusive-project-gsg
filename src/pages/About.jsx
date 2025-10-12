import PromoBanner from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import OurStory from "../components/OurStory";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Team from "../components/Team";

const About = () => {
  return (
    <>
      <PromoBanner />
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="text-gray-500 text-sm mb-6">
          Account / <span className="text-black">About</span>
        </div>
      </div>

      <OurStory />
      <StatsSection />
      <Team />
      <Features />
      <Footer />
      <Copyright />
    </>
  );
};

export default About;

import '@/styles/globals.css';
import Navbar from "@/components/index/Navbar";
import Hero from "@/components/index/Hero";
import Carousel from "@/components/index/Carousel";
import Footer from "@/components/index/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel/>
      <Footer/>
    </>
  );
};

export default HomePage;

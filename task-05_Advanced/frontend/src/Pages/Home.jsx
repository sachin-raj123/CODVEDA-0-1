
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Hero from "../components/home/Hero/Hero";
import Products from "../components/home/Products/Products";
import TopProducts from "../components/home/TopProducts/TopProducts";
import Banner from "../components/home/Banner/Banner";
import Subscribe from "../components/home/Subscribe/Subscribe";
import Testimonials from "../components/home/Testimonials/Testimonials";
import womenProducts from "../data/WomenProducts1";
import ProductsData from "../data/ProductsData";
import slidesData from "../data/SlideData";



const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Hero slides={slidesData} handleOrderPopup={handleOrderPopup} />
      <Products
        title="Women Collection"
        subtitle="Top Selling Products for you"
        products={womenProducts}
      />
      <TopProducts 
      handleOrderPopup={handleOrderPopup}
      products={ProductsData} />
      <Banner />
      <Subscribe />
      <Products
        title="Women Collection"
        subtitle="Top Selling Products for you"
        products={womenProducts}
      />
      <Testimonials />
      
      
    </div>
  );
};

export default Home;

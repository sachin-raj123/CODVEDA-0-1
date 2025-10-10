import React from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import CategoryCarousel from '../components/shop/Category';
import ProductCards from '../components/shop/Products';
import Products from '../components/home/Products/Products';
import womenProducts from '../data/WomenProducts';
import TopProducts from '../components/home/TopProducts/TopProducts';
import ProductsData from '../data/ProductsData1';
import Hero from '../components/home/Hero/Hero';
import slidesData from '../data/SlidesData1';
import { useState } from 'react';

const Shop = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };


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
        <CategoryCarousel onCategorySelect={handleCategorySelect} />
        <ProductCards selectedCategory={selectedCategory} />
        <Products
        title="Women Collection"
        subtitle="Top Selling Products for you"
        products={womenProducts}
        viewType="carousel"
      />
       <TopProducts 
      handleOrderPopup={handleOrderPopup}
      products={ProductsData}
      viewType="carousel" />

    </div>
  )
}

export default Shop
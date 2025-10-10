import React, { useState, useRef } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const CategoryCarousel = ({ onCategorySelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const carouselRef = useRef(null);

  const categories = [
    { name: "Electronics", icon: "📱", color: "from-blue-500 to-blue-600" },
    { name: "Fashion", icon: "👕", color: "from-pink-500 to-pink-600" },
    { name: "Home", icon: "🏠", color: "from-green-500 to-green-600" },
    { name: "Beauty", icon: "💄", color: "from-purple-500 to-purple-600" },
    { name: "Sports", icon: "⚽", color: "from-orange-500 to-orange-600" },
    { name: "Books", icon: "📚", color: "from-indigo-500 to-indigo-600" },
    { name: "Toys", icon: "🧸", color: "from-red-500 to-red-600" },
    { name: "Grocery", icon: "🛒", color: "from-teal-500 to-teal-600" },
    { name: "Mobile", icon: "📱", color: "from-blue-500 to-cyan-500" },
    { name: "Laptop", icon: "💻", color: "from-gray-500 to-gray-600" },
    { name: "TV", icon: "📺", color: "from-purple-500 to-pink-500" },
    { name: "Appliances", icon: "🔌", color: "from-yellow-500 to-orange-500" },
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
      setCurrentIndex((prev) => Math.min(categories.length - 1, prev + 1));
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category.name);
    onCategorySelect(category.name);
  };

  return (
    <section className="bg-white py-8 px-2 sm:px-4 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-800">
      <div className="max-w-8xl mx-auto">
        <div className="flex ml-2 sm:ml-10 mb-6">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 transition disabled:opacity-50 absolute left-0 z-10"
            disabled={currentIndex === 0}
          >
            <IoChevronBackSharp />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex space-x-4 sm:space-x-6 overflow-x-auto scrollbar-hide scroll-smooth p-4 sm:p-6"
          >
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={`flex-shrink-0 w-20 sm:w-24 text-center group cursor-pointer transition-transform duration-200 hover:scale-105 ${
                  activeCategory === category.name ? "opacity-100" : "opacity-70"
                }`}
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg mb-2 ${
                    activeCategory === category.name ? "ring-4 ring-primary" : "ring-0"
                  }`}
                >
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium">{category.name}</p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 transition disabled:opacity-50 absolute right-0 z-10"
            disabled={currentIndex >= categories.length - 6}
          >
            <IoChevronForwardSharp />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;

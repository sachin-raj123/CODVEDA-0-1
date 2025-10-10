import React from "react";

const StorySection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left side (text) */}
          <div data-aos="fade-right" className="space-y-6">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded in 2015, Shopsy began as a small startup with a big vision: to make online shopping 
              accessible, enjoyable, and affordable for everyone.
            </p>
            <p className="text-lg leading-relaxed">
              What started as a modest platform with just a handful of products has grown into a global 
              marketplace serving millions of customers worldwide.
            </p>
            <p className="text-lg leading-relaxed">
              Our journey has been fueled by innovation and a deep understanding of our customers' needs. 
              We've continuously evolved our platform to become the comprehensive shopping destination we are today.
            </p>
          </div>

          {/* Right side (image + animated SVG blobs) */}
          <div data-aos="fade-left" data-aos-delay="400" className="flex justify-center relative group">
            <div className="relative w-full max-w-lg">

              {/* Main Image with hover effect */}
              <div className="h-96 rounded-2xl shadow-xl overflow-hidden relative z-10 transform transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <img
                  src="https://www.agegracefullyamerica.com/wp-content/uploads/2024/10/Online-Shopping.-2.png"
                  alt="Online Shopping"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Animated blobs */}
              <svg className="absolute -top-16 -left-16 w-36 h-36 transition-transform duration-500 group-hover:rotate-12 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#3b82f6" d="M42.4,-67.6C55.2,-57.1,63.6,-42.4,66.1,-27.7C68.5,-12.9,65,-6.5,60.6,4.2C56.2,15,50.9,30.1,42.9,40.2C34.9,50.4,24.3,55.7,12.3,61.5C0.3,67.3,-13.1,73.7,-23.6,69.8C-34.2,65.9,-41.8,51.7,-51.2,39.8C-60.6,27.8,-71.8,18.1,-73.1,6.3C-74.4,-5.5,-65.9,-19.3,-57.7,-31.1C-49.5,-42.9,-41.7,-52.8,-31.2,-62.1C-20.7,-71.4,-10.4,-80,1.8,-81.1C14,-82.1,28,-75.9,42.4,-67.6Z" transform="translate(100 100)" />
              </svg>

              <svg className="absolute -bottom-16 -right-16 w-40 h-40 transition-transform duration-500 group-hover:scale-110 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#f59e0b" d="M39.3,-65.4C51.6,-57,57.6,-42.2,60.1,-27.3C62.5,-12.4,61.4,-6.2,57.1,3.3C52.8,12.8,45.3,25.5,35.1,35.2C24.9,44.9,12.5,51.5,-0.2,52C-12.9,52.5,-25.8,46.9,-36.4,38.6C-47,30.3,-55.3,19.3,-58.1,6.2C-60.8,-6.9,-57.9,-21.2,-50.8,-33.1C-43.8,-45,-32.6,-54.6,-20.3,-63.1C-7.9,-71.5,5.5,-78.8,18.6,-77.2C31.7,-75.5,44.5,-64.3,39.3,-65.4Z" transform="translate(100 100)" />
              </svg>

              <svg className="absolute top-1/3 right-[-4rem] w-28 h-28 transition-transform duration-500 group-hover:scale-110 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#10b981" d="M36.6,-59.2C49.5,-51.6,60.2,-41.5,63.1,-29.6C66,-17.7,61.1,-3.9,56.2,9.7C51.3,23.3,46.3,36.9,37.8,44.9C29.3,53,17.4,55.5,5.6,50.2C-6.1,44.9,-12.2,31.9,-21.5,23.7C-30.9,15.4,-43.5,11,-52.2,3.1C-60.9,-4.8,-65.7,-16.6,-61.8,-27.5C-57.9,-38.4,-45.3,-48.3,-32.6,-56.6C-19.9,-64.9,-9.9,-71.6,2.8,-74.4C15.6,-77.1,31.2,-75.4,36.6,-59.2Z" transform="translate(100 100)" />
              </svg>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;

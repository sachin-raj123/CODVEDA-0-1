import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const TopProducts = ({ products = [], viewType = "grid", handleOrderPopup }) => {
  if (!products.length) return null;

  return (
    <div className="mt-14 mb-12" id="top-rated">
      <div className="container">
        {/* Header */}
        <div className="text-left mb-24">
          <p className="text-sm text-primary">Top Rated Products for you</p>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
          </p>
        </div>

        {/* Body */}
        {viewType === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {products.map((data) => (
              <div
                key={data.id}
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative px-4 sm:px-10">
            {/* Swiper Carousel (Auto Sliding & Responsive) */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },       // Mobile
                640: { slidesPerView: 2 },     // Small tablets
                768: { slidesPerView: 3 },     // Medium
                1024: { slidesPerView: 3 },    // Large
              }}
              className="py-20"
            >
              {products.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] mx-auto">
                    <div className="h-[100px]">
                      <img
                        src={data.img}
                        alt={data.title}
                        className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <div className="w-full flex items-center justify-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-500" />
                        ))}
                      </div>
                      <h1 className="text-xl font-bold">{data.title}</h1>
                      <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                        {data.description}
                      </p>
                      <button
                        className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                        onClick={handleOrderPopup}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopProducts;

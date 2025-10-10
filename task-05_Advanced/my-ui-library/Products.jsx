import React, { useRef } from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Products = ({ title, subtitle, products, viewType = "grid" }) => {
  const swiperRef = useRef(null);

  // Custom navigation functions
  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="mt-14 mb-12" id="best-selling">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {subtitle && <p className="text-sm text-primary">{subtitle}</p>}
          {title && <h1 className="text-3xl font-bold">{title}</h1>}
        </div>

        {/* Body */}
        {viewType === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {products.map((data) => (
              <div key={data.id} className="space-y-3">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  {data.color && <p className="text-sm text-gray-600">{data.color}</p>}
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative px-4 sm:px-10">
            {/* Custom Buttons */}
            <button
              onClick={handlePrev}
              className="absolute -left-2 sm:-left-5 top-1/2 transform -translate-y-1/2 z-20 bg-primary text-white p-2 rounded-full hover:bg-primary/80"
            >
              <IoChevronBackSharp size={22} />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-2 sm:right-0 top-1/2 transform -translate-y-1/2 z-20 bg-primary text-white p-2 rounded-full hover:bg-primary/80"
            >
              <MdOutlineNavigateNext size={22} />
            </button>

            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={15}
              loop={true}
              grabCursor={true}
              breakpoints={{
                0: { slidesPerView: 1 },       // Mobile: 1 per view
                640: { slidesPerView: 2 },     // Small tablet
                768: { slidesPerView: 3 },     // Medium
                1024: { slidesPerView: 4 },    // Large
                1280: { slidesPerView: 5 },    // Extra Large
              }}
            >
              {products.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="space-y-3 text-center">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
                    />
                    <div>
                      <h3 className="font-semibold">{data.title}</h3>
                      {data.color && <p className="text-sm text-gray-600">{data.color}</p>}
                      <div className="flex items-center justify-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span>{data.rating}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* View All Button */}
        <div className="flex justify-center">
          <Link to="/static/shop">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;

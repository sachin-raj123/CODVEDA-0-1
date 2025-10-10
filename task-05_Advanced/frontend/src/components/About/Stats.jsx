import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const stats = [
    { number: 100000, label: "Happy Customers", suffix: "M+" },
    { number: 50, label: "Countries Served" },
    { number: 100000, label: "Products Available", suffix: "K+" },
    { number: 24, label: "Customer Support", suffix: "/7" }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="w-full flex justify-center items-center px-6 sm:px-12 lg:px-32 mb-32"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-7xl text-center border-gray-300 dark:border-gray-600">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`py-8 ${
              // Add border except for last column in each row
              index % (window.innerWidth < 768 ? 1 : index % 2 === 0 ? "border-r" : "") ? "border-r border-gray-300 dark:border-gray-600" : ""
            }`}
          >
            <h3 className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix ? stat.suffix : ""}
                />
              ) : (
                "0"
              )}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

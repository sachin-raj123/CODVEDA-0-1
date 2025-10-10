import React from "react";

const CTASection = () => {
  return (
    <section
      className="flex justify-center items-center px-6 sm:px-12 lg:px-20 py-16 mb-16"
      data-aos="fade-up"
    >
      <div className="max-w-7xl w-full bg-gradient-to-r from-primary to-secondary text-white rounded-3xl p-12 text-center shadow-lg">
        <h2 className="text-4xl sm:text-4xl font-bold mb-6">Ready to Shop with Us?</h2>
        <p className="mb-8 text-xl sm:text-xl leading-relaxed">
          Join millions of satisfied customers who have made Shopsy their preferred shopping destination.
          Experience the difference today!
        </p>
        <button className="bg-white text-primary font-bold py-3 px-5 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Start Shopping Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;

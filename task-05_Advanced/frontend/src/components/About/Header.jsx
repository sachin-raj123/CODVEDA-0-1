import React from "react";

const AboutHeader = () => {
  return (
    <section className="text-center mb-20 pt-16 px-6 sm:px-12 lg:px-20">
      {/* Heading with hover group */}
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative inline-block group cursor-pointer"
        data-aos="fade-up"
      >
        About Shopsy
        {/* Animated underline */}
        <span
          className="absolute -bottom-2 left-1/3 w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 group-hover:w-full group-hover:left-0"
        ></span>
      </h1>

      {/* Paragraph */}
      <p
        className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Welcome to <span className="font-semibold">Shopsy</span>, your premier destination 
        for fashion and lifestyle products. We're committed to providing you with the 
        very best shopping experience — combining quality, variety, and affordability.
      </p>
    </section>
  );
};

export default AboutHeader;
import React from "react";

const MissionVision = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden py-24">
      <div className="w-full max-w-full px-6 sm:px-12 lg:px-20 flex flex-col justify-center">

        {/* Section Header */}
        <div className="text-center mb-28" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-5xl mx-auto leading-relaxed">
            Discover what drives us and how we aim to make a difference in the online shopping world.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-20 md:space-x-32 space-y-6 md:space-y-0">
          {/* Vertical Mission Title */}
          <div className="flex items-center justify-center relative">
            <h3
              className="text-6xl font-medium text-primary dark:text-primary/80 tracking-widest uppercase"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                letterSpacing: "8px",
              }}
              data-aos="fade-right"
            >
              Mission
            </h3>
            <span className="absolute left-28 top-1/2 w-1 h-40 bg-gradient-to-b from-primary to-secondary rounded-lg opacity-40 transform -translate-y-1/2 animate-pulse"></span>
          </div>

          {/* Mission Card */}
          <div
            className="flex-1 max-w-4xl bg-white dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-3xl p-16 shadow-xl hover:shadow-2xl transition-all duration-300"
            data-aos="fade-left"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              🎯 <span className="font-semibold">Our Mission:</span> To provide seamless online shopping experiences that delight our customers, offering quality products at the best prices with exceptional customer service. We aim to build trust and long-lasting relationships by continuously improving our platform and services.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-32 space-y-6 md:space-y-0">
          {/* Vision Card */}
          <div
            className="flex-1 max-w-4xl bg-white dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-3xl p-16 shadow-xl hover:shadow-2xl transition-all duration-300 order-2 md:order-1"
            data-aos="fade-right"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              🌟 <span className="font-semibold">Our Vision:</span> To become the world’s most customer-centric online shopping platform, empowering millions to enjoy a safe, reliable, and innovative shopping journey. We aspire to create a platform that continuously innovates and serves our customers better every day.
            </p>
          </div>

          {/* Vertical Vision Title */}
          <div className="flex items-center justify-center relative order-1 md:order-2">
            <h3
              className="text-6xl font-medium text-secondary dark:text-secondary/80 tracking-widest uppercase"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                letterSpacing: "8px",
              }}
              data-aos="fade-left"
            >
              Vision
            </h3>
            <span className="absolute right-28 top-1/2 w-1 h-40 bg-gradient-to-b from-secondary to-primary rounded-lg opacity-40 transform -translate-y-1/2 animate-pulse"></span>
          </div>
        </div>

      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-16 -left-16 w-36 h-36 bg-primary/20 rounded-full animate-spin opacity-30"></div>
      <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-secondary/20 rounded-full animate-pulse opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full animate-pulse opacity-10"></div>
    </section>
  );
};

export default MissionVision;

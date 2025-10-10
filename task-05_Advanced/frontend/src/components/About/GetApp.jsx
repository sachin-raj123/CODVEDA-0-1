import React from "react";

const GetApp = () => {
  return (
    <section
      className="bg-gray-800 py-12 relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start px-6 relative z-10">
        {/* Left side content */}
        <div className="flex-1 text-left text-white mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get the App
          </h2>
          <p className="text-sm sm:text-md mb-4">
            Download our app to enjoy seamless shopping on the go.  
            Explore exclusive deals and offers only on the app.
          </p>
          <p className="text-sm sm:text-md mb-6">
            Available on iOS and Android. Start shopping anytime, anywhere!
          </p>
          <button className="bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm sm:text-lg shadow-lg hover:shadow-xl">
            Download Now
          </button>
        </div>
      </div>

      {/* Image absolutely stuck to bottom, responsive */}
      <div className="absolute bottom-0 right-0 md:right-20 px-6 md:px-0">
        <img
          src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/app-now-pic-2.webp"
          alt="App Screenshot"
          className="rounded-3xl w-40 sm:w-48 md:w-auto max-h-56 object-cover mx-auto md:mx-0"
        />
      </div>
    </section>
  );
};

export default GetApp;

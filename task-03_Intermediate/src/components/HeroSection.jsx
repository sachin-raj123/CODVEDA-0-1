// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  const doctorImage = "https://t3.ftcdn.net/jpg/01/14/89/28/360_F_114892812_Va0KWhvmSUOoYNEoHCAOJ8uYXzBiD8vY.jpg";

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 md:pr-8 lg:pr-12 md:ml-60">
          

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Health, 
            <span className="text-blue-600 block">Our Priority</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Connect with experienced doctors and book your appointment easily. 
            Take care of your health with professional care from the comfort of your home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <span>Book Appointment</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Emergency Care</span>
            </button>
          </div>

          
        </div>

        {/* Right: Doctor Image with Decorative Elements */}
        <div className="w-full md:w-1/2 relative md:mr-40">
          {/* Main Image Container */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200 rounded-full opacity-30 animate-pulse"></div>
            
            <img
              src={doctorImage}
              alt="Professional Doctor"
              className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-4 z-20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">💬</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Live Chat</div>
                  <div className="text-sm text-gray-600">Available 24/7</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl p-4 z-20 animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xl">⭐</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">4.9 Rating</div>
                  <div className="text-sm text-gray-600">Patient Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full opacity-10 -z-10"></div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
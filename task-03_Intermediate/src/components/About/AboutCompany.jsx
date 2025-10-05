export default function AboutCompany() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 border-4 border-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-blue-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Who <span className="text-blue-600">We Are</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="text-left space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="text-blue-600 font-semibold">Founded in 2020</span>, our healthcare platform is dedicated to delivering exceptional medical services and personalized patient care. We believe in a holistic approach to wellness that combines cutting-edge technology with compassionate service.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Our team of experienced healthcare professionals is committed to providing comprehensive medical solutions that address both immediate health concerns and long-term wellness goals. We prioritize patient education and preventive care to empower individuals in their health journey.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: "⚕️", text: "Expert Medical Team" },
                { icon: "🔬", text: "Advanced Technology" },
                { icon: "❤️", text: "Patient-Centered Care" },
                { icon: "🌍", text: "Global Standards" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Learn More About Us
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Meet Our Team
              </button>
            </div>
          </div>

          {/* Right Content - Stats/Image */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "50+", label: "Expert Doctors" },
                { number: "25k+", label: "Patients Served" },
                { number: "15+", label: "Years Experience" },
                { number: "24/7", label: "Care Available" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-blue-500/20 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 p-4 bg-blue-500/20 rounded-xl backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-blue-100">Accredited by International Healthcare Standards</span>
              </div>
            </div>
          </div>
        </div>

        
        
      </div>
    </section>
  );
}
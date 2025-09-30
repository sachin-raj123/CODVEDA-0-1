export default function HeroSection() {
  return (
    <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://www.shutterstock.com/image-photo/healthcare-banner-portrait-doctors-consultation-260nw-2260731979.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="text-white space-y-3">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Personal Care for your{' '}
            <span className="text-blue-300 relative">
              Healthy Living
              <div className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/30 -z-10"></div>
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-md text-blue-100  max-w-xl">
            Discover a new era of healthcare excellence where cutting-edge technology meets 
            compassionate care. 
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Book Appointment
            </button>
          </div>
        </div>

        {/* Right Content - Smaller Doctor Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-72 h-72"> {/* Reduced from w-96 h-96 to w-72 h-72 */}
            {/* Main Image Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Professional Doctor"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-blue-900/20 rounded-full"></div>
            </div>

            {/* Floating Elements - Also made smaller */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500 rounded-xl rotate-12 shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-xl -rotate-12 shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
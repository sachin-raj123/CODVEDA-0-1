const Footer = () => {
  return (
    <footer className="bg-[#010101] text-white px-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-900 font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">MediCare</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Providing quality healthcare services with compassion and excellence. Your health and wellbeing are our top priorities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-lg">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-lg">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-lg">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Doctors</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Appointments</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Online Consultation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Emergency Care</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Medical Checkup</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Pharmacy</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Lab Tests</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Health Insurance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-xs">📍</span>
                </div>
                <p className="text-blue-200">
                  123 Healthcare Street<br />
                  Medical City, MC 12345
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs">📞</span>
                </div>
                <p className="text-blue-200">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs">✉️</span>
                </div>
                <p className="text-blue-200">info@medicare.com</p>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs">🕒</span>
                </div>
                <p className="text-blue-200">24/7 Emergency Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-blue-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-blue-200">Get the latest health tips and updates delivered to your inbox.</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#010101] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-300 text-sm mb-4 md:mb-0">
              © 2024 MediCare. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
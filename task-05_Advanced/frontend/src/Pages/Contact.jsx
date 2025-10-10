import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  FiMail,
  FiUser,
  FiMessageCircle,
  FiSend,
  FiPhone,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  return (
    <section className="relative duration-200 py-20 overflow-hidden
      bg-gradient-to-br from-white via-gray-50 to-gray-100
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left side info */}
          <div className="lg:w-3/5" data-aos="fade-right">
            <div className="text-gray-700 dark:text-gray-200">
              <h3 className="text-4xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-lg mb-10 opacity-90 leading-relaxed">
                Have questions about our products or need help with your order? Our friendly team is here to assist you.
              </p>

              {/* Contact Card */}
              <div className="p-6 bg-white shadow-md dark:bg-gray-800/40 rounded-2xl backdrop-blur-md transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/20 dark:bg-primary/30 rounded-2xl">
                    <FiMail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email Address</h4>
                    <p className="opacity-90 text-lg">support@shopsy.com</p>
                    <p className="opacity-90 text-lg">sales@shopsy.com</p>
                    <p className="opacity-70 mt-1 text-sm">We typically respond within 2 hours.</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
                <h4 className="font-bold text-2xl mb-6">Follow Us</h4>
                <div className="flex gap-5">
                  {[FaWhatsapp, FaInstagram, FaTwitter, FaFacebookF].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-full flex items-center justify-center 
                        bg-gray-200 text-gray-700 
                        dark:bg-white/10 dark:text-white
                        hover:bg-primary hover:text-white 
                        transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="lg:w-2/5" data-aos="fade-left">
            <div className="p-8 rounded-3xl shadow-xl 
              bg-white dark:bg-gray-800/70 
              border border-gray-200 dark:border-white/10 
              backdrop-blur-lg">
              
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Send us a Message
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                Fill out the form below and we’ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full rounded-xl p-3 pl-10 border border-gray-300 dark:border-gray-700 
                      bg-white dark:bg-gray-900 
                      focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full rounded-xl p-3 pl-10 border border-gray-300 dark:border-gray-700 
                      bg-white dark:bg-gray-900 
                      focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div className="relative">
                  <FiMessageCircle className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Your Message"
                    className="w-full rounded-xl p-3 pl-10 border border-gray-300 dark:border-gray-700 
                      bg-white dark:bg-gray-900 
                      focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-xl 
                    hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <FiSend />
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700/50 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 dark:bg-primary/40 rounded-xl flex items-center justify-center">
                  <FiPhone className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                    Emergency Support
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Need immediate help? Call:{" "}
                    <span className="font-semibold text-primary">
                      +91 98000 12345
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

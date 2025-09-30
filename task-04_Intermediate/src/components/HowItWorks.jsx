import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const steps = [
    {
      id: 1,
      title: "Find a Specialist",
      description:
        "Browse our network of certified healthcare professionals. Filter by specialty, location, and availability.",
      image: "👨‍⚕️",
    },
    {
      id: 2,
      title: "Book Appointment",
      description:
        "Schedule your visit easily using our online system. Choose in-person or virtual appointments.",
      image: "📅",
    },
    {
      id: 3,
      title: "Consult & Diagnose",
      description:
        "Discuss your symptoms and medical history with your healthcare provider for accurate diagnosis.",
      image: "💬",
    },
    {
      id: 4,
      title: "Receive Treatment",
      description:
        "Follow your prescribed treatment plan with ongoing support from our medical team.",
      image: "💊",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0, transformOrigin: "top" },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="bg-white py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-aos="fade-down"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            How Our Medical Service Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple steps to connect with healthcare professionals
          </p>
        </motion.div>

        {/* Steps Container with Line */}
        <div className="relative">
          {/* Animated Vertical Line - Starts below heading */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600 -translate-x-1/2"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }}
          ></motion.div>

          {/* Steps */}
          <motion.div
            className="space-y-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row items-center gap-8 relative ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                {/* Animated Step Number - Odd numbers on left, even on right */}
                <motion.div
                  className={`absolute ${
                    index % 2 === 0 
                      ? "left-1/2 -translate-x-12"  // Odd numbers (1,3) - left side
                      : "left-1/2 translate-x-12"   // Even numbers (2,4) - right side
                  } top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full text-sm font-bold shadow-lg z-10`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    delay: index * 0.2
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  {step.id}
                </motion.div>

                {/* Content Order: For odd steps (1,3) - Box then Icon, For even steps (2,4) - Icon then Box */}
                {index % 2 === 0 ? (
                  // Odd steps (1,3): Content on left side
                  <>
                    {/* Box */}
                    <motion.div
                      className="bg-white rounded-lg shadow-md border border-gray-100 p-5 w-full md:w-80 text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: "#3b82f6",
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
                      }}
                    >
                      <motion.h3 
                        className="text-lg font-bold text-gray-800 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 text-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        {step.description}
                      </motion.p>
                    </motion.div>

                    {/* Icon Circle */}
                    <motion.div
                      className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center shadow-lg border border-blue-100 text-3xl"
                      variants={circleVariants}
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#dbeafe",
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          delay: index * 0.1 + 0.4, 
                          type: "spring", 
                          stiffness: 200 
                        }}
                        viewport={{ once: true }}
                      >
                        {step.image}
                      </motion.span>
                    </motion.div>
                  </>
                ) : (
                  // Even steps (2,4): Content on right side
                  <>
                    {/* Icon Circle */}
                    <motion.div
                      className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center shadow-lg border border-blue-100 text-3xl"
                      variants={circleVariants}
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "#dbeafe",
                        rotate: 5
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          delay: index * 0.1 + 0.4, 
                          type: "spring", 
                          stiffness: 200 
                        }}
                        viewport={{ once: true }}
                      >
                        {step.image}
                      </motion.span>
                    </motion.div>

                    {/* Box */}
                    <motion.div
                      className="bg-white rounded-lg shadow-md border border-gray-100 p-5 w-full md:w-80 text-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: "#3b82f6",
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)"
                      }}
                    >
                      <motion.h3 
                        className="text-lg font-bold text-gray-800 mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 text-sm leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        {step.description}
                      </motion.p>
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            delay: 2, 
            type: "spring", 
            stiffness: 200 
          }}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Book Now</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
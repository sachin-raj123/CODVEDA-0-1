import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const QualityCare = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      id: 1,
      icon: "📅",
      title: "Online Booking",
      description:
        "Easily schedule appointments online with your preferred doctor or specialist."
    },
    {
      id: 2,
      icon: "👨‍⚕️",
      title: "Qualified Doctors",
      description:
        "Our doctors are certified professionals with years of experience in their fields."
    },
    {
      id: 3,
      icon: "🏥",
      title: "Modern Facilities",
      description:
        "State-of-the-art medical facilities and equipment to ensure the best care."
    },
    {
      id: 4,
      icon: "💊",
      title: "Medication Support",
      description:
        "Get guidance and support for prescribed medications and treatment plans."
    },
    {
      id: 5,
      icon: "💬",
      title: "24/7 Consultation",
      description:
        "Chat or call our medical team anytime for advice and consultation."
    },
    {
      id: 6,
      icon: "🌍",
      title: "Global Coverage",
      description:
        "Access healthcare services from multiple locations around the world."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const iconVariants = {
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
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }
  };

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading with Animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Quality Care For You<br />And Your Loved Ones
          </motion.h1>
        </motion.div>

        {/* Cards Grid with Animation */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:shadow-xl group cursor-pointer"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              {/* Animated Circle with Icon */}
              <motion.div
                className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300 border-2 border-blue-100"
                variants={iconVariants}
                whileHover="hover"
              >
                <motion.span 
                  className="text-3xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {card.icon}
                </motion.span>
              </motion.div>

              {/* Animated Title */}
              <motion.h3
                className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                variants={titleVariants}
              >
                {card.title}
              </motion.h3>

              {/* Animated Description */}
              <motion.p
                className="text-gray-600 text-sm mb-4 leading-relaxed"
                variants={descriptionVariants}
              >
                {card.description}
              </motion.p>

              {/* Animated Read More Button */}
              <motion.button
                className="text-gray-500 font-medium text-sm group-hover:text-blue-600 flex items-center gap-1 transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Read More 
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

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityCare;
// src/components/Skills/Skills.jsx
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  // Item animation for each card or skill
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const skillVariants = {
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
  {/* Animated Heading with rotation, scale, and color pulse */}
    <motion.h2
      className="text-3xl sm:text-4xl font-bold text-white"
      initial={{ rotateX: 90, rotateY: 90, scale: 0.5, opacity: 0 }}
      animate={{ rotateX: 0, rotateY: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 120 }}
      whileHover={{
        scale: 1.1,
        rotateZ: [0, 5, -5, 0],
        color: ["#ffffff", "#8245ec", "#a855f7", "#ffffff"],
        transition: { duration: 1 },
      }}
    >
    SKILLS
  </motion.h2>

  {/* Animated Underline */}
        <motion.div
          className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Subheading/Description */}
        <motion.p
          className="text-gray-400 mt-4 text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A collection of my technical skills and expertise honed through various projects and experiences
        </motion.p>
      </motion.div>


      {/* Skill Categories */}
      <motion.div
        className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(130,69,236,0.5)" }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                    variants={itemVariants}
                    whileHover={skillVariants.hover}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

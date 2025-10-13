import { achievements } from "../../constants";
import { motion } from "framer-motion";

const Achievements = () => {
 
  

  // Animation variants for paragraph
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  return (
    <section
      id="achievements"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
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
      ACHIEVEMENTS
    </motion.h2>

        <motion.div
          className="w-32 h-1 bg-purple-500 mx-auto mt-4"
          initial={{ width: 0 }}
          whileInView={{ width: "8rem", transition: { duration: 0.8, ease: "easeOut" } }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.p
          className="text-gray-400 mt-4 text-lg font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={paragraphVariants}
        >
          A showcase of my achievements, certifications, and milestones earned through dedication, learning, and active participation in diverse events.
        </motion.p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {achievements.map((achieve, index) => (
          <motion.div
            key={achieve.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Content Section */}
            <motion.div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={achieve.img}
                    alt={achieve.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {achieve.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {achieve.company}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{achieve.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{achieve.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {achieve.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

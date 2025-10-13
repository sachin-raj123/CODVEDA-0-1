import  { useState } from "react";
import { projects } from "../../constants";
import { motion } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[17vw] font-sans relative"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
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
          PROJECTS
        </motion.h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-110 hover:-translate-y-4 hover:shadow-purple-600/50"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">{project.description}</p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Container */}
      {selectedProject && (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative flex flex-col max-h-[90vh]">
      {/* Close Button */}
      <div className="flex justify-end p-4 flex-shrink-0">
        <button
          onClick={handleCloseModal}
          className="text-white text-3xl font-bold hover:text-purple-500"
        >
          &times;
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto px-4 lg:px-8 flex-1">
        <div className="w-full flex justify-center bg-gray-900 mb-4">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
          />
        </div>
        <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
          {selectedProject.title}
        </h3>
        <p className="text-gray-400 mb-6 lg:text-base text-xs">
          {selectedProject.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedProject.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex gap-4 p-4 flex-shrink-0">
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
        >
          View Code
        </a>
        <a
          href={selectedProject.webapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
        >
          View Live
        </a>
      </div>
    </div>
  </motion.div>
)}
    </section>
  );
};

export default Work;

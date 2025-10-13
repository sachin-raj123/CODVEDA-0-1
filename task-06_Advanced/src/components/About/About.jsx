
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/sachinraj.jpg';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0 0 15px rgba(130,69,236,0.7)', transition: { duration: 0.3 } },
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <motion.div
        className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side */}
        <motion.div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            variants={itemVariants}
          >
            Hi, I am
          </motion.h1>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            Sachin Raj
          </motion.h2>

          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight"
            variants={itemVariants}
          >
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['ECE Student','Aspiring Frontend Developer','UI/UX Enthusiast','Learner & Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => <span className="text-[#8245ec]">{cursor}</span>}
            />
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            variants={itemVariants}
          >
            I am a 5th-semester ECE student with a growing passion for coding and web development. I am currently learning frontend development and UI/UX design, focusing on building interactive and visually appealing web applications. Eager to gain hands-on experience and improve my skills in modern web technologies.

          </motion.p>

          <motion.a
            href="https://drive.google.com/file/d/11xRFUn-AjWxGU3_WwMiMi0vwV1o5v0_z/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
            variants={buttonVariants}
            whileHover="hover"
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
          variants={itemVariants}
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.img
              src={profileImage}
              alt="Sachin Raj"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

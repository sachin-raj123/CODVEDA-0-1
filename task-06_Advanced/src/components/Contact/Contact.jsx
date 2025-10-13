import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q7ao5cd",
        "template_9vj36oe",
        form.current,
        "BFNGIL2b8U2C69upH"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

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
   CONTACT
  </motion.h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3
          className="text-xl font-semibold text-white text-center"
          variants={itemVariants}
        >
          Connect With Me <span className="ml-1">🚀</span>
        </motion.h3>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {["user_email", "user_name", "subject"].map((name, idx) => (
            <motion.input
              key={name}
              type={name === "user_email" ? "email" : "text"}
              name={name}
              placeholder={
                name === "user_email"
                  ? "Your Email"
                  : name === "user_name"
                  ? "Your Name"
                  : "Subject"
              }
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
              variants={itemVariants}
            />
          ))}

          <motion.textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            variants={itemVariants}
          />

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            variants={itemVariants}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;

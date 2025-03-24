import React from "react";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 sm:px-12 lg:px-20 bg-card rounded-xl border-2 border-foreground mx-4 shadow-md shadow-card-foreground"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8 flex justify-center items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated waving hand */}
          <motion.span
            className="mr-2"
            animate={{ rotate: [0, 20, 0, -20, 0], y: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            👋
          </motion.span>
          Get In Touch
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          className="bg-secondary/10 p-6 sm:p-8 rounded-3xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-foreground">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 px-4 py-3 rounded-lg bg-primary-foreground focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-4 focus:ring-offset-card shadow-xl shadow-accent-foreground"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-foreground">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-1 px-4 py-3 rounded-lg bg-primary-foreground focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-4 focus:ring-offset-card shadow-xl shadow-accent-foreground"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            {/* Phone Field */}
            <label className="text-sm font-semibold text-foreground">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-primary-foreground focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-4 focus:ring-offset-card shadow-xl shadow-accent-foreground"
              required
            />
          </div>

          <div className="mt-6">
            {/* Message Field */}
            <label className="text-sm font-semibold text-foreground">
              Message
            </label>
            <textarea
              placeholder="Your Message..."
              rows={4}
              className="mt-1 w-full px-4 py-3 rounded-lg bg-primary-foreground focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-4 focus:ring-offset-card shadow-xl shadow-accent-foreground"
              required
            />
          </div>

          {/* Send Button */}
          <div className="mt-6 text-center flex justify-center items-center">
            <motion.button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold flex justify-center items-center text-lg hover:bg-primary/90 transition-all focus:ring-2 focus:ring-primary focus:outline-none focus:ring-offset-4 focus:ring-offset-card shadow-xl shadow-accent-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IoIosSend className="mr-2" />
              Send
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section className="py-16 px-6 sm:px-12 bg-gradient-to-r from-gray-100 to-gray-200">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 hover:shadow-2xl transition-shadow"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">About Me</h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-center">
        Hi, I’m <span className="font-semibold text-blue-600">Srusti Samprada Pradhan</span>, a Software Engineer passionate about building scalable and reliable web applications.  
        I specialize in <span className="font-semibold">Java, Spring Boot, Microservices, React, and Full-Stack Development</span>, focusing on performance, security, and maintainability.  
        I have delivered projects that <span className="font-semibold">reduced data mismatches by 95%</span>, <span className="font-semibold">improved operational efficiency by 20%</span>, and implemented robust backend APIs with seamless frontend integration.  
        I love solving complex problems, learning new technologies, and creating impactful software that drives results.
      </p>

      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://github.com/srustisp" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors text-3xl">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/srustisp/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors text-3xl">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:srustip@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors text-3xl">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </motion.div>
  </section>
);

export default About;

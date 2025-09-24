import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";

const Hero = () => (
  <section id="about" className="h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
    <motion.img
      src={profilePic}
      alt="Srusti Samprada Pradhan"
      className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 md:mb-0 md:mr-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Srusti Samprada Pradhan</h1>
      <p className="text-xl mb-4">Software Engineer | Java & Spring Boot | Full-Stack Enthusiast</p>
      <a href="/Srustiresume.pdf" download="Srusti_Samprada_Pradhan_Resume.pdf" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Download Resume</a>
    </motion.div>
  </section>
);

export default Hero;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";

const Hero = () => (
  <section
    id="about"
    className="h-screen flex flex-col justify-center items-center bg-blue-500 text-white text-center px-4"
  >
    <motion.img
      src={profilePic}
      alt="Srusti Pradhan"
      className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-lg"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.h1
      className="text-5xl font-bold mb-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hello, I'm Srusti Pradhan
    </motion.h1>
    <p className="text-xl mb-6">
      Software Engineer | Java & Spring Boot Developer | Full-Stack Enthusiast
    </p>
    <div className="flex space-x-6 text-3xl">
      <a href="https://github.com/srustisp" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/srusti" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://leetcode.com/srustisp" target="_blank" rel="noopener noreferrer">
        <SiLeetcode />
      </a>
    </div>
  </section>
);

export default Hero;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";

const roles = [
  "Software Engineer",
  "Java & Spring Boot Developer",
  "Full-Stack Enthusiast",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        prev + roles[roleIndex].charAt(charIndex)
      );
      if (charIndex < roles[roleIndex].length - 1) {
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1200);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <motion.img
        src={profilePic}
        alt="Srusti Samprada Pradhan"
        className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg mb-6 md:mb-0 md:mr-10 object-cover"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Hello, I'm Srusti Samprada Pradhan
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 h-6">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        <a
          href="/SrustiResume.pdf"
          download="Srusti_Samprada_Pradhan_Resume.pdf"
          className="bg-white text-blue-600 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition text-sm sm:text-base"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

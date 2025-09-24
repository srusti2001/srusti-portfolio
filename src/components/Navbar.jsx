import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">Srusti Samprada Pradhan</div>
        <div className="space-x-6 text-xl flex">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="space-x-4 text-2xl hidden md:flex">
          <a href="https://github.com/dashboard" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/srustisp/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/01srusti05/" rel="noopener noreferrer" target="_blank"><SiLeetcode /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

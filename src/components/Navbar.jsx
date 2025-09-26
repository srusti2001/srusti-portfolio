import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo/Name */}
        <div className="text-xl font-bold cursor-pointer">
          Srusti Samprada Pradhan
        </div>

        {/* Social Icons */}
        <div className="space-x-4 text-2xl hidden md:flex">
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/srustisp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/01srusti05/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </div>
      </div>

      {/* Optional Mobile Social Icons */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 pb-4 flex flex-col space-y-2 text-lg">
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/srustisp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/01srusti05/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

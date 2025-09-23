import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white shadow-md z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <h1 className="font-bold text-xl">Srusti Samprada Pradhan</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#experience" className="hover:text-blue-500">Experience</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#education" className="hover:text-blue-500">Education</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;

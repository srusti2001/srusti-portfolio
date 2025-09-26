import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Certification from "./components/Certificate";
import About from "./components/About";
import Personal from "./components/PersonalSection";

function App() {
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certification />
      <Education />
      <Personal />
      <Contact />
    </div>
  );
}

export default App;

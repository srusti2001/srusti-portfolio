import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certificate";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;

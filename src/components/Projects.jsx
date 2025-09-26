import React, { useState } from "react";
import { projects } from "../data";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", bounce: 0.2, duration: 0.6 } 
  },
};

const Projects = () => (
  <section id="projects" className="py-8 px-6 sm:px-12 bg-gray-50">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
      Projects
    </h2>

    <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((proj, index) => (
        <ProjectCard key={index} proj={proj} />
      ))}
    </div>
  </section>
);

const ProjectCard = ({ proj }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-shadow flex flex-col"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* Project Image */}
      <img
        src={proj.image}
        alt={proj.title || proj.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />

      {/* Project Title */}
      <h3 className="text-xl font-semibold mb-2">{proj.title || proj.name}</h3>

      {/* Project Description */}
      <p className={`text-gray-700 text-sm mb-2 ${expanded ? "" : "line-clamp-3"}`}>
        {proj.description}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-600 font-medium text-sm mb-3 hover:underline self-start"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {(proj.techStack || proj.technologies).map((tech, i) => (
          <span
            key={i}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Link */}
      <a
        href={proj.link || proj.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-blue-600 font-medium hover:underline"
      >
        View Project
      </a>
    </motion.div>
  );
};

export default Projects;

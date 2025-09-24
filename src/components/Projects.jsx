import React from "react";
import crmImg from "../assets/projects/crm.png";

const projects = [
  {
    name: "CRMAPP",
    description: "CRM software to manage customer relationships efficiently.",
    image: crmImg,
    github: "https://github.com/srustisp/crmapp",
    live: "#",
    technologies: ["Java", "Spring Boot", "MySQL"],
  },
];

const Projects = () => (
  <section id="projects" className="py-16 max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((proj, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl overflow-hidden transition-shadow">
          <img src={proj.image} alt={proj.name} className="w-full h-48 object-cover"/>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
            <p className="mb-3">{proj.description}</p>
            <p className="mb-3 text-sm font-semibold">Tech: {proj.technologies.join(", ")}</p>
            <div className="flex space-x-4">
              <a href={proj.github} target="_blank"  rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;

import React from "react";
import { skills } from "../data";

const Skills = () => (
  <section id="skills" className="py-8 px-4 md:px-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all"
          >
            <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-white">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-medium hover:scale-105 transition-transform cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

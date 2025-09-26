import React, { useState } from "react";
import { experiences } from "../data";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="experience" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Work Experience
        </h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                layout
                className="border rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition cursor-pointer"
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                {/* Header */}
                <div className="flex justify-between items-center p-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{exp.date}</p>
                    {exp.brief && (
                      <p className="text-sm mt-1 text-gray-700 dark:text-gray-400">
                        {exp.brief}
                      </p>
                    )}
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    <FaChevronDown />
                  </motion.div>
                </div>

                {/* Animated Details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      <ul className="list-disc ml-6 space-y-2">
                        {exp.details.map((d, i) => {
                          if (d.toLowerCase().includes("result:")) {
                            // Remove bullet and render inline
                            return (
                              <p
                                key={i}
                                className="text-blue-600 font-semibold ml-0 mt-2"
                              >
                                {d}
                              </p>
                            );
                          } else {
                            return <li key={i}>{d}</li>;
                          }
                        })}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;

import React from "react";
import { education } from "../data";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaCalendarAlt } from "react-icons/fa";

const Education = () => (
  <section id="education" className="py-8 px-4 md:px-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
      Education
    </h2>

    <div className="max-w-6xl mx-auto px-4 flex gap-6 overflow-x-auto snap-x snap-mandatory">
      {education.map((edu, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md p-4 sm:p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 snap-start"
        >
          {/* Degree */}
          <div className="flex items-center gap-2 mb-2">
            <FaGraduationCap className="text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-600">{edu.degree}</h3>
          </div>

          {/* Institute */}
          <div className="flex items-center gap-2 mb-2">
            <FaSchool className="text-gray-600" />
            <p className="text-gray-700 text-sm">{edu.institute}</p>
          </div>

          {/* Year */}
          <div className="flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-gray-500" />
            <p className="text-gray-500 text-sm">{edu.year}</p>
          </div>

          {/* Grade */}
          <p className="text-green-600 font-semibold text-sm mt-2">{edu.grade}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;

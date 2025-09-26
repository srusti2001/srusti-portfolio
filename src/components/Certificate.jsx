import React from "react";
import { motion } from "framer-motion";
import { certifications } from "../data";
import defaultLogo from "../assets/logos/default.png";

const Certificate = () => {
  return (
    <section id="certifications" className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col justify-between border border-gray-200 rounded-3xl p-6 bg-white shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={cert.logo || defaultLogo}
                  onError={(e) => { e.target.onerror = null; e.target.src = defaultLogo; }}
                  alt={cert.issuer}
                  className="w-12 h-12 object-contain rounded-full border border-gray-200"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
              </div>

              {/* View Button */}
              <div className="flex justify-end mt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;

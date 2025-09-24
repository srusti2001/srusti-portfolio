import React, { useState } from "react";

const experiences = [
  {
    title: "Automated Fare Collection System (AFCS)",
    date: "Jan 2025 - Present",
    details: [
      "Developed and exposed REST APIs for secure data transmission, reducing data mismatches by 95%.",
      "Implemented AES encryption with PBKDF2 & Base64 to secure communication.",
      "Worked in Agile Scrum cycles (2-week sprints) with daily stand-ups and sprint reviews.",
      "Collaborated with cross-functional teams using Jira for sprint tracking and backlog grooming.",
      "Optimized batch data insertion into MySQL using asynchronous workflows with retry logic.",
    ],
  },
  {
    title: "Intelligent Transport Management System (ITMS)",
    date: "Oct 2023 – Jan 2025",
    details: [
      "Built centralized Spring Boot microservices improving operational efficiency by 20%.",
      "Implemented dynamic permission system reducing configuration time by 80%.",
      "Adopted Agile ceremonies (planning, retrospectives) to iteratively ship 50+ modules.",
      "Used AJAX & REST controllers for real-time updates, cutting page reloads by 100%.",
      "Integrated Prometheus monitoring to track latency, throughput & reliability.",
    ],
  },
  {
    title: "Intelligent Depot Management System (IDMS)",
    date: "Jan 2023 – Sept 2023",
    details: [
      "Developed dual system: Java Desktop App (offline-first) and Web App.",
      "Migrated from JSON to MongoDB, reducing complexity in data handling.",
      "Boosted offline efficiency by 90% through desktop-first design.",
      "Practiced Agile Kanban for backlog management and task prioritization.",
    ],
  },
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="experience" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Work Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 bg-white shadow cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <span className="text-gray-600">{exp.date}</span>
              </div>
              {activeIndex === index && (
                <ul className="list-disc ml-6 mt-2 text-gray-700">
                  {exp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

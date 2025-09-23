import { useState } from "react";

const experienceData = [
  {
    title: "Automated Fare Collection System (AFCS)",
    period: "Jan 2025 - Present",
    details: [
      "Developed and exposed REST APIs to external clients for secure data transmission, ensuring strict adherence to required data formats and reducing unnecessary data duplication and key mismatches by 95%.",
      "Implemented AES encryption and decryption using PBKDF2WithHmacSHA1 and Base64 to secure API communication and protect sensitive data.",
      "Prevented SQL injection through input validation and parameterized queries, enhancing system security.",
      "Consumed client APIs and used batch updates to insert transactional data into MySQL, optimizing performance.",
      "Designed and implemented resilient, non-blocking operations with automatic retry logic and transactional integrity, ensuring reliable execution and data consistency in asynchronous workflows."
    ]
  },
  {
    title: "Intelligent Transport Management System (ITMS)",
    period: "Oct 2023 - Jan 2025",
    details: [
      "Developed a centralized Spring Boot microservices application for STUs, improving operational efficiency by 20% and streamlining multi-system management.",
      "Created a comprehensive API to automatically set permissions and roles by scanning application controllers, reducing manual configuration time by 80%. This ensured accurate role-based access across 50+ modules and simplified permission management with a single URL trigger.",
      "Leveraged REST controllers and AJAX to enable dynamic data updates, reducing page reloads by 100% and improving processing time by 50%, significantly enhancing user experience and efficiency.",
      "Managed authentication and authorization for different accounts. Developed custom annotations for role-based permissions, ensuring secure module access according to user roles and maintaining system integrity, reducing unauthorized access attempts by 90%.",
      "Implemented Prometheus monitoring to track application performance, resource usage, and custom metrics, enhancing system observability and reliability."
    ]
  },
  {
    title: "Intelligent Depot Management System (IDMS)",
    period: "Jan 2023 - Sept 2023",
    details: [
      "Developed a dual-application system: a Java Desktop Application for localized sub-organizational functions (15% efficiency boost) and a Web Application for organization-wide operations (20% efficiency gain).",
      "Enhanced offline functionality with a desktop app, reducing internet dependency by 90% and boosting offline efficiency.",
      "Migrated data storage from JSON files to MongoDB, optimizing data management and reducing complexities in data handling."
    ]
  }
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleDetails(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.period}</p>
            </div>
            {openIndex === index && (
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

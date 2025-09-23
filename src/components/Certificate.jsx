import React from "react";

const certificationsData = [
  {
    title: "AWS Technical Essentials",
    issuer: "AWS",
    date: "2024",
    link: "https://drive.google.com/file/d/1KNn-_kz_hlDceh8hRyu1XWR09NCn4bxc/view?usp=sharing",
  },
  {
    title: "Software Development",
    issuer: "Pankaj Sir Academy",
    date: "2024",
    link: "https://drive.google.com/file/d/1NFwDOy76OpryGo46iQlsc6W973Djud2i/view?usp=sharing",
  },
  {
    title: "Namaste Node.js",
    issuer: "Namaste Dev",
    date: "2025",
    link: "https://drive.google.com/file/d/1O0yZlc78Wi-FQDrHj2S-GPoQ6O5qWZI1/view?usp=sharing",
  },
  {
    title: "Cyber Security Fundamentals",
    issuer: "Google",
    date: "2024",
    link: "https://drive.google.com/file/d/1yDB1Almr-VnxeyrJBtaentnWpu-wKFtP/view?usp=sharing",
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-600 mb-2">{cert.issuer}</p>
            <p className="text-gray-500 mb-4">{cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

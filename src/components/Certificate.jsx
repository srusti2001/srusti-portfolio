import React from "react";
import awsLogo from "../assets/logos/aws.png";
import googleLogo from "../assets/logos/google.png";
import nodeLogo from "../assets/logos/node.png";
import pankajLogo from "../assets/logos/psa.png";
import defaultLogo from "../assets/logos/default.png";

const certificationsData = [
  {
    title: "AWS Technical Essentials",
    issuer: "AWS",
    date: "2024",
    link: "https://drive.google.com/file/d/1KNn-_kz_hlDceh8hRyu1XWR09NCn4bxc/view?usp=sharing",
    logo: awsLogo,
  },
  {
    title: "Software Development",
    issuer: "Pankaj Sir Academy",
    date: "2024",
    link: "https://drive.google.com/file/d/1NFwDOy76OpryGo46iQlsc6W973Djud2i/view?usp=sharing",
    logo: pankajLogo,
  },
  {
    title: "Namaste Node.js",
    issuer: "Namaste Dev",
    date: "2025",
    link: "https://drive.google.com/file/d/1O0yZlc78Wi-FQDrHj2S-GPoQ6O5qWZI1/view?usp=sharing",
    logo: nodeLogo,
  },
  {
    title: "Cyber Security Fundamentals",
    issuer: "Google",
    date: "2024",
    link: "https://drive.google.com/file/d/1yDB1Almr-VnxeyrJBtaentnWpu-wKFtP/view?usp=sharing",
    logo: googleLogo,
  },
];

const Certificate = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border border-gray-200 shadow-md rounded-xl p-5 bg-white hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={cert.logo || defaultLogo}
                  onError={(e) => { e.target.onerror = null; e.target.src = defaultLogo; }}
                  alt={cert.issuer}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;

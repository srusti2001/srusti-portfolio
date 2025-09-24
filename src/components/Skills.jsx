import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Programming */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Programming Languages</h3>
            <p className="text-gray-700">Java, JavaScript</p>
          </div>

          {/* Frameworks */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Frameworks</h3>
            <p className="text-gray-700">Spring Boot, Hibernate, Node.js, React</p>
          </div>

          {/* Databases */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Databases</h3>
            <p className="text-gray-700">MySQL, PostgreSQL, MongoDB</p>
          </div>

          {/* Tools */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Tools & Others</h3>
            <p className="text-gray-700">
              GitHub, GitLab, Postman, AWS, Vercel, Thymeleaf
            </p>
          </div>

          {/* Agile & Practices */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Methodologies & Practices</h3>
            <p className="text-gray-700">
              Agile (Scrum & Kanban), Sprint Planning, Stand-ups, Retrospectives,
              CI/CD (GitHub Actions), Test-Driven Development
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;

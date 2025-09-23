const Skills = () => (
  <section id="skills" className="py-16 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
      <div>
        <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
        <p>Java, JavaScript</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
        <p>Spring, Spring Boot, Hibernate, Node.js</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Databases</h3>
        <p>MySQL, PostgreSQL, MongoDB</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
        <p>GitHub, Gitlab, Postman, AWS, HTML, CSS, Java Swing, AWT, Agile, Thymeleaf</p>
      </div>
    </div>
  </section>
);

export default Skills;

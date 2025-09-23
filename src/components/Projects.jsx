const Projects = () => (
  <section id="projects" className="py-16 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold text-xl mb-2">CRM-CRMAPP</h3>
        <p>CRM software to manage customer relationships efficiently, tracking Leads, Clients, and Proposals.</p>
      </div>
      {/* Add more project cards similarly */}
    </div>
  </section>
);

export default Projects;

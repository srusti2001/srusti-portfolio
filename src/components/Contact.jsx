const Contact = () => (
  <section id="contact" className="py-16 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
    <form className="max-w-md mx-auto space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-3 rounded border"/>
      <input type="email" placeholder="Your Email" className="w-full p-3 rounded border"/>
      <textarea placeholder="Your Message" className="w-full p-3 rounded border"></textarea>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Send Message</button>
    </form>
  </section>
);

export default Contact;

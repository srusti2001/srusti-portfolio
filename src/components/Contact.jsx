import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (use EmailJS or backend to actually send)");
  };

  return (
    <section id="contact" className="py-16 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-3 rounded border"/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-3 rounded border"/>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="p-3 rounded border"/>
        <button type="submit" className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

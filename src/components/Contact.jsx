import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "your_service_id", // Replace with your EmailJS service ID
      "your_template_id", // Replace with your EmailJS template ID
      form.current,
      "your_public_key" // Replace with your EmailJS public key
    ).then(
      () => { alert("Message sent!"); },
      () => { alert("Something went wrong."); }
    );
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="bg-white rounded-xl shadow p-6 max-w-md mx-auto space-y-4 border border-gray-100">
        <input type="text" name="user_name" placeholder="Name" required className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
        <input type="email" name="user_email" placeholder="Email" required className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
        <textarea name="message" rows="4" placeholder="Message" required className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold">Send</button>
      </form>
    </section>
  );
}
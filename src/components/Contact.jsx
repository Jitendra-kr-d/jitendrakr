import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { User, Mail, MessageSquare, Send } from 'lucide-react'; 

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending..."); 

    emailjs.sendForm(
      "your_service_id",
      "your_template_id",
      form.current,
      "your_public_key"
    ).then(
      () => {
        setStatus("Message sent successfully! I'll get back to you soon. 😊");
        form.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("Oops! Failed to send the message. Please try again or email me directly.");
      }
    );
  };

  return (
    <section className="container mx-auto px-4 py-12">
      
      {/* Header and Introduction */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Get In Touch</h2>
        <p className="text-lg text-gray-600">
          I'm always open to discussing new projects, opportunities, or answering any questions. Feel free to send a message below.
        </p>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="bg-white rounded-xl shadow-2xl p-8 max-w-lg mx-auto space-y-6 border border-gray-200">
        
        {/* Input fields remain the same */}
        <div className="relative">
          <User className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            name="user_name" 
            placeholder="Your Name" 
            required 
            className="w-full border p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition" 
          />
        </div>
        
        <div className="relative">
          <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            required 
            className="w-full border p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition" 
          />
        </div>
        
        <div className="relative">
          <MessageSquare className="absolute top-4 left-3 w-5 h-5 text-gray-400" />
          <textarea 
            name="message" 
            rows="5" 
            placeholder="Your Message (For Testimonials, see below)" 
            required 
            className="w-full border p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition resize-none" 
          />
        </div>

        {/* Status Message */}
        {status && (
          <p className={`text-center font-medium ${status.includes('successfully') ? 'text-green-600' : status.includes('Sending') ? 'text-blue-500' : 'text-red-600'}`}>
            {status}
          </p>
        )}
        
        {/* Submit Button */}
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition font-bold flex items-center justify-center mx-auto"
            disabled={status.includes('Sending')}
          >
            <Send className="w-5 h-5 mr-2" /> Send Message
          </button>
        </div>

        {/* --- Testimonial Submission Option --- */}
        <div className="text-center mt-6 pt-4 border-t border-gray-100">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Want to submit a Testimonial?</h3>
            <p className="text-gray-600">
                Please send your feedback directly to my professional email to be featured on the Testimonials page.
            </p>
            <a 
                href="mailto:jitendrakumar64477@gmail.com" 
                className="inline-flex items-center text-accent font-bold hover:underline mt-2"
            >
                Email Your Testimonial to jitendrakumar64477@gmail.com
            </a>
        </div>
        
      </form>
    </section>
  );
}
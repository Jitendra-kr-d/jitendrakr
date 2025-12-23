// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { User, Mail, MessageSquare, Send } from 'lucide-react';
import React from "react";
export default function Contact() {
  // const form = useRef();
  // const [status, setStatus] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   setIsSubmitting(true);

  //   emailjs.sendForm(
  //     "your_service_id",
  //     "your_template_id",
  //     form.current,
  //     "your_public_key"
  //   ).then(
  //     () => {
  //       setStatus("Message sent successfully! I'll get back to you soon. 😊");
  //       form.current.reset();
  //       setIsSubmitting(false);
  //     },
  //     (error) => {
  //       console.error("EmailJS Error:", error);
  //       setStatus("Oops! Failed to send the message. Please try again or email me directly.");
  //       setIsSubmitting(false);
  //     }
  //   );
  // };

  return (
    // <section className="container mx-auto px-4 py-12 animate-fadeIn">
    <section className="container mx-auto px-4 py-12 animate-fadeIn relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <span className="text-8xl md:text-9xl font-black text-gray-900 transform -rotate-12 whitespace-nowrap">
          COMING SOON
        </span>
      </div>

      {/* Header and Introduction */}
      {/* <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Let's Build Something Great Together</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          <strong>Open to new opportunities</strong> in full-stack development, microservices architecture, and AI/ML engineering roles.
        </p> */}
      <div className="text-center z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Unavailable</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          The contact form is temporarily disabled. <br />
          Please check back soon!
        </p>
        {/* <p className="text-base text-gray-600 leading-relaxed">
          Whether you're looking for a senior engineer to lead technical initiatives, build scalable systems, or solve complex problems, I'd love to discuss how I can add value to your team. Available for <strong>full-time positions</strong>, <strong>contract work</strong>, and <strong>technical consulting</strong>.
        </p> */}
      </div>

      {/* Contact Form */}
      {/* <form ref={form} onSubmit={sendEmail} className="bg-white rounded-xl shadow-2xl p-8 max-w-lg mx-auto space-y-6 border border-gray-200"
        aria-label="Contact form"> */}

      {/* Input fields remain the same */}
      {/* <div className="relative">
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
        </div> */}

      {/* Status Message */}
      {/* {status && (
          <p className={`text-center font-medium ${status.includes('successfully') ? 'text-green-600' : status.includes('Sending') ? 'text-blue-500' : 'text-red-600'}`}>
            {status}
          </p>
        )} */}

      {/* Submit Button */}
      {/* <div className="text-center">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition font-bold flex items-center justify-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
            aria-label="Send message"
          >
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div> */}

      {/* --- Testimonial Submission Option --- */}
      {/* <div className="text-center mt-6 pt-4 border-t border-gray-100">
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

      </form> */}
    </section>
  );
}
import React from "react";
import testimonials from "../data/testimonials";
import { Quote } from 'lucide-react'; // Icon for visual flair

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-12 max-w-6xl animate-fadeIn">

      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Professional Recommendations</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Testimonials from industry professionals, technical leads, and project stakeholders highlighting my technical expertise, leadership, and results-driven approach.
        </p>
      </div>

      {/* Testimonials Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-xl p-6 h-full flex flex-col justify-between 
                       border-t-4 border-primary hover:shadow-2xl transition duration-300"
          >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-accent mb-4" fill="#f59e42" strokeWidth={0} />

            {/* Testimonial Text */}
            <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic flex-grow">
              "{t.text}"
            </blockquote>

            {/* Author and Role */}
            <div className="border-t pt-4">
              <span className="font-bold text-lg text-gray-900 block">{t.name}</span>
              {t.role && (
                <span className="text-sm text-primary font-medium mt-1">
                  {t.role}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
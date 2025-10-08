import React, { useState } from "react";
import testimonials from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div className="space-y-6">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:shadow-lg hover:border-primary transition">
            <blockquote className="italic">"{t.text}"</blockquote>
            <div className="mt-2 flex items-center">
              <span className="font-semibold">{t.name}</span>
              {t.role && <span className="ml-2 text-gray-500 text-sm">({t.role})</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
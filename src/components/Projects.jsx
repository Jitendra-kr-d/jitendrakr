import React, { useState } from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:shadow-lg hover:border-primary transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            <div className="mb-2 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{t}</span>
              ))}
            </div>
            <div className="flex space-x-4">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
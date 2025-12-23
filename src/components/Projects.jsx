import React from "react";
import projects from "../data/projects";
// Importing an icon for visual appeal (make sure to install: npm install lucide-react)
import { FolderGit, Code, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="mb-8 border-b-2 border-blue-500 pb-4">
        <div className="flex items-center mb-3">
          <FolderGit className="w-8 h-8 mr-3 text-blue-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Portfolio of Delivered Solutions</h2>
        </div>
        <p className="text-base md:text-lg text-gray-700 max-w-4xl">
          Enterprise-grade projects demonstrating expertise in <strong>scalable architecture</strong>, <strong>AI/ML implementation</strong>, and <strong>business impact</strong>. Each project delivered measurable results and technical excellence.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-extrabold text-gray-800 mb-3 hover:text-blue-600 transition">
              {project.title}
            </h3>

            <div className="mb-4 text-gray-600 flex-grow prose prose-sm max-w-none">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>

            {/* Tech Stack Tags */}
            <div className="mb-4 flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 font-semibold px-3 py-1 rounded-full text-xs border border-purple-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links Section */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors shadow-md"
                  aria-label={`View code for ${project.title}`}
                >
                  <Code className="w-4 h-4 mr-2" />
                  View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
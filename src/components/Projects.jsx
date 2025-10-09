import React from "react";
import projects from "../data/projects";
// Importing an icon for visual appeal (make sure to install: npm install lucide-react)
import { FolderGit, Code, ExternalLink } from 'lucide-react'; 
import ReactMarkdown from 'react-markdown'; 

export default function Projects() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6 border-b pb-2">
        <FolderGit className="w-8 h-8 mr-3 text-gray-800" />
        <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-extrabold text-gray-800 mb-2">{project.title}</h3>
            
            <p className="mb-4 text-gray-600 flex-grow"><ReactMarkdown>{project.description}</ReactMarkdown></p>
            
            {/* Tech Stack Tags */}
            <div className="mb-4 flex flex-wrap gap-2 pt-2 border-t border-gray-100">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links Section */}
            <div className="flex space-x-4 mt-auto">
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors shadow-md"
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
                  className="flex items-center text-sm font-semibold text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from "react";
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';
const baseUrl = import.meta.env.BASE_URL;
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16 border-t-4 border-blue-500">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">Jitendra Kumar</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full-Stack Engineer passionate about building scalable web applications,
              microservices, and AI-powered solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href={`${baseUrl}/`} className="text-gray-300 hover:text-blue-400 transition">Home</a></li>
              <li><a href={`${baseUrl}/projects`} className="text-gray-300 hover:text-blue-400 transition">Projects</a></li>
              <li><a href={`${baseUrl}/blog`} className="text-gray-300 hover:text-blue-400 transition">Blog</a></li>
              <li><a href={`${baseUrl}/contact`} className="text-gray-300 hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-400">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Jitendra-kr-d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:jitendrakumar64477@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/jitendrakr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Jitendra Kumar. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
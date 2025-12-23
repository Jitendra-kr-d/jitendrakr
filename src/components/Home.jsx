import React from "react";
import skills from "../data/skills";
import {
  Code,
  Database,
  Cpu,
  Layers,
  Cloud,
} from 'lucide-react';

const profilePic = import.meta.env.BASE_URL + "/profile.jpg";
const baseUrl = import.meta.env.BASE_URL;

const SkillCategory = ({ title, proficiencyLabel, proficiency, skills: skillList, Icon }) => {
  const getProficiencyColor = (score) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 70) return "bg-blue-500";
    return "bg-yellow-500";
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all hover:shadow-lg">
      <div className="flex items-center mb-3">
        <Icon className="w-6 h-6 mr-3 text-primary" />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>

      {/* Proficiency Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center text-sm font-medium mb-1">
          <span className="text-gray-600">Proficiency: {proficiencyLabel}</span>
          <span className="text-gray-600">{proficiency}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${getProficiencyColor(proficiency)} transition-all duration-500 ease-out`}
            style={{ width: `${proficiency}%` }}
          ></div>
        </div>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full border border-primary-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <section className="container mx-auto px-4 py-8 animate-fadeIn">
      {/* --- Profile Card Section --- */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 mb-12 border border-blue-100">
        <img
          src={profilePic}
          alt="Jitendra Kumar - Full-Stack Engineer"
          className="w-40 h-40 md:w-32 md:h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4 md:mb-0 object-cover transition-transform hover:scale-105"
          loading="eager"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Jitendra Kumar
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
            Senior Full-Stack Engineer | AI/ML Specialist
          </p>
          <p className="mb-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Experienced software engineer with <strong>proven expertise</strong> in building scalable enterprise applications, microservices architecture, and AI-powered solutions. Specialized in <strong>.NET, Golang, Python</strong>, and modern web technologies. Successfully delivered <strong>mission-critical systems</strong> serving thousands of users while maintaining <strong>99.9% uptime</strong>.
          </p>
          <div className="mb-4 flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200">
              .NET & C#
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold border border-green-200">
              Golang
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold border border-purple-200">
              Python & AI/ML
            </span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold border border-orange-200">
              Microservices
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold border border-pink-200">
              CI/CD
            </span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {/* <a
              href="mailto:jitendrakumar64477@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            > */}
            <button
              disabled
              className="inline-flex items-center px-6 py-3 bg-gray-400 text-white rounded-full cursor-not-allowed transition font-semibold text-sm shadow-none"
            >
              {/* 📧 Hire Me
            </a> */}
              📧 Hire Me (Coming Soon)
            </button>
            <a
              href={`${baseUrl}/cv`}
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              📄 Download Resume
            </a>
            <a
              href={`${baseUrl}/projects`}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              🚀 View Projects
            </a>
          </div>
        </div>
      </div>

      {/* --- Key Achievements Section --- */}
      <div className="my-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Professional Impact & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">3+</div>
            <div className="text-gray-700 font-semibold">Years Experience</div>
            <div className="text-sm text-gray-600 mt-1">Enterprise Software Development</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-green-600 mb-2">5+</div>
            <div className="text-gray-700 font-semibold">Projects Delivered</div>
            <div className="text-sm text-gray-600 mt-1">Full-Stack & AI Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-purple-600 mb-2">60%</div>
            <div className="text-gray-700 font-semibold">Performance Improvement</div>
            <div className="text-sm text-gray-600 mt-1">Through Optimization & CI/CD</div>
          </div>
        </div>
      </div>

      {/* --- Dynamic Skills Section --- */}
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Core Technical Competencies</h2>
      <p className="text-gray-600 mb-6">Proven expertise across the full software development lifecycle</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>

    </section >
  );
}
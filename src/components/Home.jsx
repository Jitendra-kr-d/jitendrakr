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
    <section className="container mx-auto px-4 py-8">
      {/* --- Profile Card Section --- */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg p-8 mb-12">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4 md:mb-0 object-cover"
        />
        <div>
          <h1 className="text-4xl font-extrabold mb-2 text-gray-900">Jitendra Kumar</h1>
          <p className="mb-4 text-lg text-gray-700">
            <strong>Full-Stack Engineer</strong> specializing in <strong>Web Development</strong> (using .NET MVC), robust <strong>API/Microservice</strong> architecture (Golang/C#.NET), and leveraging <strong>AI/ML</strong> for intelligent solutions. I build <strong>high-performance, impactful products</strong>.
          </p>
          {/* Removed the static skills list here as it will be shown dynamically below */}
        </div>
      </div>

      {/* --- Dynamic Skills Section --- */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>

    </section>
  );
}
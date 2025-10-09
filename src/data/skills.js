import {
  Code,
  Database,
  Cpu,
  Layers,
  Cloud,
} from 'lucide-react'; // Example Icons from a popular library

export default [
  // --- Web Development (HIGHEST PROFICIENCY) ---
  {
    title: 'Web Development (Full-Stack Fundamentals)',
    proficiencyLabel: 'Expert',
    proficiency: 95,
    skills: ['.NET MVC', 'HTML', 'CSS', 'JavaScript'],
    Icon: Layers,
  },
  
  // --- API & Backend Development (HIGHEST PROFICIENCY) ---
  {
    title: 'API/Microservice Development',
    proficiencyLabel: 'Expert',
    proficiency: 95,
    skills: ['Golang', 'C#.NET', 'Python', 'SQL Server (Integration)'],
    Icon: Cloud,
  },
  
  // --- AI / Machine Learning (ML) (SECOND HIGHEST PROFICIENCY) ---
  {
    title: 'AI/ML & Computer Vision',
    proficiencyLabel: 'Advanced',
    proficiency: 90,
    skills: ['Deep Learning', 'Computer Vision', 'Natural Language Processing (NLP)', 'Machine Learning', 'OCR', 'Chatbot Development'],
    Icon: Cpu,
  },
  
  // --- Core Programming & CS ---
  {
    title: 'Core Programming & Data Structures',
    proficiencyLabel: 'Advanced',
    proficiency: 85,
    skills: ['Golang', 'C#.NET', 'C++', 'Python', 'OOP', 'Data Structures and Algorithms', 'Problem Solving'],
    Icon: Code,
  },
  
  // --- Databases & Data Management ---
  {
    title: 'Databases & Data Management',
    proficiencyLabel: 'Intermediate',
    proficiency: 75,
    skills: ['SQL Server', 'SQLite', 'Database Management Systems (DBMS)', 'SQL'],
    Icon: Database,
  },
];
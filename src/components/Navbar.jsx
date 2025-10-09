import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
    { label: "Download CV", path: "/cv" },
  ];
  const location = useLocation();

  return (
    <nav className="bg-white shadow sticky top-0 z-50 mb-8">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo/Brand Name (Always visible) */}
        <Link to="/" className="font-bold text-xl text-primary hover:text-blue-700 transition">
          AJ Solutions
        </Link>
        
        {/* Navigation Links - Hidden on Mobile, shown on Small screens and up */}
        <ul className="hidden sm:flex space-x-2 md:space-x-4"> 
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`py-2 px-3 rounded-full text-sm md:text-base transition font-medium ${
                  location.pathname === item.path
                    ? "bg-primary text-white shadow"
                    : "hover:bg-blue-100 text-gray-700 hover:text-blue-700"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Placeholder for Mobile Menu Button (Hamburger) */}
        <button className="sm:hidden text-gray-700 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        
      </div>
    </nav>
  );
}

export default Navbar;
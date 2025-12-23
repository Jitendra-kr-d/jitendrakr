import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react'; // Icons for the toggle button

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Recommendations", path: "/testimonials" },
    { label: "Achievements", path: "/achievements" },
    { label: "Contact", path: "/contact" },
    { label: "Resume", path: "/cv" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu when a link is clicked
  };

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow sticky top-0 z-50 mb-8">
      {/* Main Bar Content */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo/Brand Name */}
        <Link
          to="/"
          className="font-bold text-xl text-primary hover:text-blue-700 transition"
          onClick={() => setIsOpen(false)}
        >
          Jitendra Kumar
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex space-x-2 md:space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`py-2 px-3 rounded-full text-sm md:text-base transition font-medium ${location.pathname === item.path
                    ? "bg-primary text-white shadow"
                    : "hover:bg-blue-100 text-gray-700 hover:text-blue-700"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-gray-700 p-2 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {/* ----------------------------------------------------------- */}
      {/* Mobile Sidebar Content (Side Drawer) */}
      {/* ----------------------------------------------------------- */}

      {/* 1. Overlay (to dim background) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 sm:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 2. Side Drawer Panel */}
      <div className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform 
          transition-transform duration-300 ease-in-out sm:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-4 flex justify-end border-b">
          {/* Close Button inside the sidebar */}
          <button
            className="text-gray-700 p-1 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex flex-col space-y-2 p-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={handleLinkClick} // Close menu on link click
                className={`block py-3 px-3 rounded transition font-medium text-base ${location.pathname === item.path
                    ? "bg-primary text-white shadow"
                    : "hover:bg-blue-100 text-gray-700 hover:text-blue-700"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
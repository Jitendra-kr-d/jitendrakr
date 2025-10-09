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
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <span className="font-bold text-lg text-primary">AJ Solutions</span>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`py-1 px-3 rounded transition font-medium ${
                  location.pathname === item.path
                    ? "bg-primary text-white shadow"
                    : "hover:bg-blue-100 text-blue-700"
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
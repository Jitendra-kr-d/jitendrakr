import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 border-t py-4 z-40">
      <div 
        // Stack vertically on mobile, switch to horizontal (justify-between) on medium screens
        className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-2 md:space-y-0"
      >
        
        {/* Copyright */}
        <span className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Jitendra Kumar
        </span>
        
        {/* Links (GitHub & Email) */}
        <div className="flex space-x-4">
          <a 
            href="https://github.com/Jitendra-kr-d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline text-blue-600 font-medium text-sm"
          >
            GitHub
          </a>
          <a 
            href="mailto:jitendrakumar64477@gmail.com" 
            className="hover:underline text-blue-600 font-medium text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
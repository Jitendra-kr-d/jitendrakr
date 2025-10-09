import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 border-t py-4 z-40">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span className="text-gray-600">© {new Date().getFullYear()} Jitendra Kumar</span>
        <div className="flex space-x-2">
          <a 
            href="https://github.com/Jitendra-kr-d" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline text-blue-600 font-medium"
          >
            GitHub
          </a>
          <a 
            href="mailto:jitendrakumar64477@gmail.com" 
            className="hover:underline text-blue-600 font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from "react";
import { Download, Eye } from 'lucide-react'; // Icons for visual appeal

// Assuming jkResume points to the correct PDF file path in your public directory
const jkResume = import.meta.env.BASE_URL + "/Jitendra_Kumar_Resume.pdf";

export default function DownloadCV() {
  const cvPreviewImage = import.meta.env.BASE_URL + "/Jitendra_Kumar_Resume_Preview.png";
  const [imageError, setImageError] = React.useState(false);

  return (
    <section className="container mx-auto px-4 py-12 text-center max-w-4xl animate-fadeIn">
      
      {/* Header and Introduction */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Download My Resume</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          View and download my professional CV detailing my technical skills, project experience, certifications, and work history.
        </p>
      </div>

      {/* CV Preview (Optional, but highly recommended for better UX) */}
      {!imageError && (
        <div className="mb-10 p-4 bg-gray-50 border rounded-xl shadow-lg">
          <img 
            src={cvPreviewImage} 
            alt="Jitendra Kumar Resume Preview" 
            className="w-full max-h-96 object-contain rounded-lg border border-gray-200 shadow-inner mx-auto"
            style={{ maxHeight: '500px' }}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        </div>
      )}
      
      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Primary Download Button */}
        <a
          href={jkResume}
          download="Jitendra_Kumar_Resume.pdf"
          className="bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition font-bold flex items-center transform hover:scale-105"
          aria-label="Download resume as PDF"
        >
          <Download className="w-5 h-5 mr-2" />
          Download CV (PDF)
        </a>
        
        {/* Secondary View Button */}
        <a
          href={jkResume}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full shadow-md hover:bg-blue-50 transition font-bold flex items-center transform hover:scale-105"
          aria-label="View resume in browser"
        >
          <Eye className="w-5 h-5 mr-2" />
          View in Browser
        </a>
      </div>
      
      {/* Additional Info */}
      <div className="mt-10 text-sm text-gray-500">
        <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
      </div>
    </section>
  );
}
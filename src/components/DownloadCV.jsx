import React, { useState } from "react";
export default function DownloadCV() {
  return (
    <section className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Download My CV</h2>
      <a
        href="/assets/Jitendra_Kumar_Resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition font-semibold"
      >
        Download CV
      </a>
    </section>
  );
}
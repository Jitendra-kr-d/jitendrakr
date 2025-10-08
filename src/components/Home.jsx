import React, { useState } from "react";
const profilePic =import.meta.env.BASE_URL + "/profile.jpg"

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-lg p-8">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-primary shadow-lg mb-4 md:mb-0 object-cover"
        />
        <div>
          <h1 className="text-4xl font-extrabold mb-2 text-primary">Jitendra Kumar</h1>
          <p className="mb-4 text-lg text-gray-700">
            Full Stack Software Developer with strong experience in web technologies, passionate about building impactful products.
          </p>
          <div>
            <span className="font-semibold">Skills: </span>
            <span className="text-gray-600">
              JavaScript, React, Node.js, Express, MongoDB, HTML, CSS, Python, Git, Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
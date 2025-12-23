import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import DownloadCV from "./components/DownloadCV";
import BlogDetail from "./components/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import CertificationsAchievements from "./components/CertificationsAchievements";


function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <ScrollToTop />
      <BackToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/achievements" element={<CertificationsAchievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<DownloadCV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

// 404 Not Found Component
function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <a
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold"
      >
        Return Home
      </a>
    </div>
  );
}

export default App;
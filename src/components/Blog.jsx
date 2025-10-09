import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blog";
import { BookOpen, Calendar } from 'lucide-react'; // Example Icon

export default function Blog() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8 border-b pb-3">
        <BookOpen className="w-7 h-7 mr-3 text-gray-800" />
        <h2 className="text-3xl font-bold text-gray-900">Technical Insights & Blog</h2>
      </div>

      <div className="space-y-6">
        {blogs.map((post, idx) => (
          <Link 
            key={idx} 
            to={`/blog/${idx}`} 
            className="block" // Important for the whole block to be clickable
          >
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-blue-500 cursor-pointer">
              <h3 className="text-2xl font-extrabold mb-2 text-gray-800 hover:text-blue-600">
                {post.title}
              </h3>
              
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <p>{post.date}</p>
              </div>
              
              {/* Use the new excerpt field for clean preview */}
              <p className="text-gray-600 line-clamp-2">
                {post.excerpt}
              </p>
              
              <span className="mt-2 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">
                Read More &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
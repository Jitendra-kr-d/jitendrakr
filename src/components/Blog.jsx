import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blog";
import { BookOpen, Calendar } from 'lucide-react'; // Example Icon

export default function Blog() {
  return (
    <section className="container mx-auto px-4 py-8 animate-fadeIn">
      <div className="flex items-center mb-8 border-b-2 border-blue-500 pb-3">
        <BookOpen className="w-7 h-7 mr-3 text-blue-600" />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Technical Insights & Blog</h2>
          <p className="text-gray-600 mt-1">Deep dives into my projects, learnings, and technical experiences</p>
        </div>
      </div>

      <div className="space-y-6">
        {blogs.map((post, idx) => (
          <Link 
            key={idx} 
            to={`/blog/${idx}`} 
            className="block"
          >
            <article className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-400 cursor-pointer transform hover:-translate-y-1">
              <h3 className="text-2xl font-extrabold mb-2 text-gray-800 hover:text-blue-600 transition">
                {post.title}
              </h3>
              
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              
              <p className="text-gray-600 line-clamp-3 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <span className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
                Read More 
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
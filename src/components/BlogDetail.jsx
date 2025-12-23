// BlogDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blog";
import { Calendar } from 'lucide-react'; 

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs[Number(id)]; 

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-red-600">404: Blog Post Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 block">&larr; Back to Blog Index</Link>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8 max-w-4xl animate-fadeIn"> 
      <Link 
        to="/blog" 
        className="text-blue-600 hover:text-blue-800 mb-10 inline-flex items-center transition-colors font-semibold group"
      >
        <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>
      
      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">{blog.title}</h1>
          
          <div className="flex items-center text-gray-500 pb-4 border-b-2 border-gray-200">
            <Calendar className="w-5 h-5 mr-2 text-blue-600" />
            <time dateTime={blog.date} className="font-medium">{blog.date}</time>
          </div>
        </header>
        
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-purple-600 prose-pre:bg-gray-900">
          <div 
            dangerouslySetInnerHTML={{ __html: blog.content }} 
          />
        </div>
      </article>
      
      <div className="mt-12 pt-8 border-t-2 border-gray-200">
        <Link 
          to="/blog" 
          className="text-blue-600 hover:text-blue-800 inline-flex items-center transition-colors font-semibold group"
        >
          <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>
    </section>
  );
}
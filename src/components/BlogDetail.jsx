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
    // 1. Constrain max width for better reading experience (like a typical blog)
    <section className="container mx-auto px-4 py-8 max-w-4xl"> 
      <Link 
        to="/blog" 
        className="text-blue-600 hover:underline mb-10 flex items-center w-fit transition-colors"
      >
        &larr; Back to Blog
      </Link>
      
      <h2 className="text-4xl font-extrabold mb-2 text-gray-900">{blog.title}</h2>
      
      <div className="flex items-center text-gray-500 mb-8 border-b pb-3">
        <Calendar className="w-5 h-5 mr-2" />
        <p className="font-medium">{blog.date}</p>
      </div>
      
      {/* 2. Apply the 'prose' class to style the raw HTML content */}
      <div className="prose max-w-none prose-lg">
        <div 
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
      </div>
    </section>
  );
}
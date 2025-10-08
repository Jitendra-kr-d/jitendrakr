import React from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../data/blog";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs[id];

  if (!blog) {
    return <div className="container mx-auto px-4 py-8">Blog not found.</div>;
  }

  return (
    <section className="container mx-auto px-4 py-8 max-w-2xl">
      <Link to="/blog" className="text-blue-600 hover:underline mb-4 block">&larr; Back to Blog</Link>
      <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>
      <p className="text-gray-500 mb-4">{blog.date}</p>
      <div className="prose prose-lg">
        {blog.content}
      </div>
    </section>
  );
}
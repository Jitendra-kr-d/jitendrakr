import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blog";

export default function Blog() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Blog</h2>
      <div className="space-y-6">
        {blogs.map((post, idx) => (
          <Link key={idx} to={`/blog/${idx}`}>
            <div className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:shadow-lg hover:border-primary transition cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="line-clamp-3">{post.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
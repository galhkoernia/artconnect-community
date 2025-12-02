/*
 * Created on Fri Nov 28 2025
 * 
 * Copyright (c) 2025 Your Company
 */

import { FaHeart } from "react-icons/fa";

export const PostList = ({ posts, onLikePost }) => {
  return (
    <div className="space-y-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-3xl shadow-[0_6px_25px_rgba(0,0,0,0.06)] p-7 flex gap-7 items-start"
        >
          {/* Thumbnail kiri */}
          <div className="w-40 h-32 bg-soft rounded-2xl overflow-hidden">
            <img
              src={post.image ? `/assets/${post.image}` : "/assets/default.png"}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bagian kanan */}
          <div className="flex-grow flex flex-col justify-between py-1">
            <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>

            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {post.subtitle || "No description available."}
            </p>

            <button
              onClick={() => onLikePost(post.id)}
              className="flex items-center gap-2 text-deep font-semibold mt-4 hover:opacity-80 transition"
            >
              <FaHeart size={16} />
              <span>Like</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


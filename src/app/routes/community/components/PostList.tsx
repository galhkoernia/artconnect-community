/*
 * Created on Fri Nov 28 2025
 * 
 * Copyright (c) 2025 Your Company
 */

import { FaHeart, FaComment } from "react-icons/fa";

type Post = {
  id: string | number;
  title: string;
  subtitle?: string;
  image: string;
  // Add other fields as needed
};

interface PostListProps {
  posts: Post[];
  onLikePost: (id: string | number) => void;
}

export const PostList = ({ posts, onLikePost }: PostListProps) => {
  console.log(
    new URL(`../../assets/feed/feed1/feed1-img-01.png`, import.meta.url).href
  );
  return (
    <div className="space-y-20">
      {posts.map((post) => (
        <div
          key={post.id}
          className="
            w-full
            max-w-[1219px]
            mx-auto
            bg-[#f1f4fa]
            rounded-[32px]
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            flex flex-col md:flex-row
            gap-12
            p-12
            transition-all
          "
        >
          {/* Thumbnail */}
          <div
            className="
              w-full md:w-[332px]
              h-[358px]
              bg-[var(--color-soft)]
              rounded-2xl
              overflow-hidden
              flex-shrink-0
            "
          >
            <img
              src={
              new URL(
                `../../assets/feed/feed1/${post.image}`,
                import.meta.url
                ).href
              }
            className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-grow">

            {/* Title */}
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">
              {post.title}
            </h3>

            {/* Subtitle */}
            <p className="text-[var(--color-olive)] text-base leading-relaxed mb-6">
              {post.subtitle ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            </p>

            {/* Tag */}
            <div className="flex gap-4 mb-8">
              <span className="px-5 py-2 bg-[var(--color-soft)] text-[var(--color-text)] rounded-xl text-sm">
                Tag Satu
              </span>
              <span className="px-5 py-2 bg-[var(--color-soft)] text-[var(--color-text)] rounded-xl text-sm">
                Tag Dua
              </span>
            </div>

            {/* Button Like and Comment */}
            <div className="flex gap-8 mt-auto">

              <button
                onClick={() => onLikePost(post.id)}
                className="
                  flex items-center gap-2
                  text-[var(--color-deep)]
                  font-semibold
                  hover:text-[var(--color-accent)]
                  transition
                "
              >
                <FaHeart size={18} />
                Like
              </button>

              <button
                className="
                  flex items-center gap-2
                  text-[var(--color-deep)]
                  font-semibold
                  hover:text-[var(--color-accent)]
                  transition
                "
              >
                <FaComment size={18} />
                Comment
              </button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

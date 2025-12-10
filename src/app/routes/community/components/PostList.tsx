/*
 * Created on Fri Nov 28 2025
 * 
 * Copyright (c) 2025 Your Company
 */

import { FaHeart, FaComment } from "react-icons/fa";

// Import gambar langsung dari src/assets
import WomanImg from "../../../../assets/feed/feed1/feed1-img-01.png";
import BettaImg from "../../../../assets/feed/feed1/feed1-img-02.png";
import EyeImg from "../../../../assets/feed/feed1/feed1-img-03.png";

const imageMap: Record<string, string> = {
  "portrait-woman": WomanImg,
  "betta-fish": BettaImg,
  "the-eye": EyeImg,
};

type Post = {
  id: string | number;
  title: string;
  subtitle?: string;
  image: string;
};

interface PostListProps {
  posts: Post[];
  onLikePost: (id: string | number) => void;
}

export const PostList = ({ posts, onLikePost }: PostListProps) => {
  return (
    <div className="space-y-16">
      {posts.map((post) => {
        const resolvedImage = imageMap[post.image] || post.image;

        return (
          <div
            key={post.id}
            className="
              w-full
              max-w-[1219px]
              mx-auto
              bg-[#f5f7fb]
              rounded-[28px]
              shadow-[0_8px_30px_rgba(0,0,0,0.06)]
              flex flex-col md:flex-row
              gap-10
              p-10
              transition-all
            "
          >
            {/* Thumbnail */}
            <div
              className="
                w-full md:w-[300px]
                h-[300px]
                rounded-2xl
                overflow-hidden
                bg-[var(--color-soft)]
                flex-shrink-0
              "
            >
              <img
                src={resolvedImage}
                alt={post.title}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-grow">

              <div>
                <h3 className="text-3xl font-semibold text-[var(--color-text)] mb-3">
                  {post.title}
                </h3>

                <p className="text-[var(--color-olive)] text-[17px] leading-relaxed mb-6">
                  {post.subtitle}
                </p>

                {/* Tags */}
                <div className="flex gap-3 mb-8">
                  <span className="px-4 py-1.5 bg-[var(--color-soft)] text-[var(--color-text)] rounded-xl text-sm">
                    Art
                  </span>
                  <span className="px-4 py-1.5 bg-[var(--color-soft)] text-[var(--color-text)] rounded-xl text-sm">
                    Gallery
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-8">
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
        );
      })}
    </div>
  );
};



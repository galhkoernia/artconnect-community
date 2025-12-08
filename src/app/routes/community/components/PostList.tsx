/*
 * Created on Fri Nov 28 2025
 * 
 * Copyright (c) 2025 Your Company
 */

import { FaHeart, FaComment } from "react-icons/fa";

// TODO: Update these paths to match your actual asset locations
const WomanImg = "/images/feed1-img-01.png";
const BettaImg = "/images/feed1-img-02.png";
const EyeImg = "/images/feed1-img-03.png";

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
    <div className="space-y-20">
      {posts.map((post) => {
        const resolvedImage = imageMap[post.image] || post.image;

        return (
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
                src={resolvedImage}
                alt={post.title}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </div>

            <div className="flex flex-col justify-between flex-grow">
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">
                {post.title}
              </h3>

              <p className="text-[var(--color-olive)] text-base leading-relaxed mb-6">
                {post.subtitle}
              </p>

              <div className="flex gap-4 mb-8">
                <span className="px-5 py-2 bg-[var(--color-soft)] text-[var(--color-text)] rounded-xl text-sm">
                  Art
                </span>
                <span className="px-5 py-2 bg-[var(--color-soft)] text-[var(--color-text)] rounded-xl text-sm">
                  Gallery
                </span>
              </div>

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
        );
      })}
    </div>
  );
};


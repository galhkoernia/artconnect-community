/*
 * Created on Thu Nov 27 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { useInfinitePosts } from "../hooks/useInfinitePosts";
import { PostList } from "../components/PostList";
import { Button } from "../../../../components/common/Button";

const Img1 = "/images/feed1-img-01.png";
const Img2 = "/images/feed1-img-02.png";
const Img3 = "/images/feed1-img-03.png";

const fallbackImages = [Img1, Img2, Img3];

const descriptions = {
  [Img1]: {
    title: "Portrait of a Woman",
    subtitle:
      "A refined expression of emotion and elegance, painted with soft tonal depth.",
  },
  [Img2]: {
    title: "Betta Fish Study",
    subtitle:
      "An artistic exploration of movement and color through the form of a betta fish.",
  },
  [Img3]: {
    title: "The Eye",
    subtitle:
      "A textured close-up painting capturing reflection, detail, and perception.",
  },
};


export const FeedPage: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfinitePosts(6);

  const allPosts =
    data?.pages.flatMap((page, pageIndex) => {
      if (!page?.data) return [];

      const postList = Array.isArray(page.data) ? page.data : [page.data];

      return postList.map((post, postIndex) => {
        const fallback =
          fallbackImages[
            (pageIndex * fallbackImages.length + postIndex) %
              fallbackImages.length
          ];

        const info = descriptions[fallback];

        return {
          image: post?.images?.[0]?.url ?? fallback,
title: post.title || descriptions[fallback].title,
subtitle: post.subtitle || descriptions[fallback].subtitle,

        };
      });
    }) ?? [];

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  const handleLikePost = (postId: string | number) => {
    console.log("Post liked:", postId);
  };

  if (status === "pending") {
    return (
      <div className="min-h-screen bg-bg py-16">
        <div className="container mx-auto px-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 flex gap-6 mb-8 animate-pulse"
            >
              <div className="w-36 h-28 bg-soft rounded-xl"></div>
              <div className="flex-grow space-y-4">
                <div className="w-48 h-4 bg-soft rounded"></div>
                <div className="w-32 h-3 bg-soft rounded"></div>
                <div className="w-20 h-3 bg-soft rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-red-500 text-xl font-semibold mb-3">
          Failed to load feed
        </h2>
        <p className="text-gray-600 mb-6 max-w-sm">
          {(error as Error)?.message || "Unable to load posts at this time."}
        </p>
        <Button onClick={() => window.location.reload()} variant="primary">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <section className="container mx-auto px-4 py-14">
        <PostList posts={allPosts} onLikePost={handleLikePost} />

        {hasNextPage && (
          <div className="flex justify-center mt-14">
            <Button
              onClick={handleLoadMore}
              disabled={isFetchingNextPage}
              variant="outline"
              size="lg"
              className="min-w-32 border-deep text-deep hover:bg-deep hover:text-white transition"
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}

        {!hasNextPage && allPosts.length > 0 && (
          <div className="text-center mt-20 py-10 text-gray-500">
            <p className="font-medium">End of the gallery</p>
            <p className="text-sm mt-1 text-gray-400">
              More artworks will be available soon
            </p>
          </div>
        )}
      </section>
    </div>
  );
};


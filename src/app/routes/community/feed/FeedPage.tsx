/*
 * Created on Thu Nov 27 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { useInfinitePosts } from "../hooks/useInfinitePosts";
import { PostList } from "../components/PostList";
import { Button } from "../../../../components/common/Button";

const fallbackImages = ["portrait-woman", "betta-fish", "the-eye"];

const descriptions = {
  "portrait-woman": {
    title: "Portrait of a Woman",
    subtitle:
      "A refined expression of emotion and elegance, painted with soft tonal depth.",
  },
  "betta-fish": {
    title: "Betta Fish Study",
    subtitle:
      "An artistic exploration of movement and color through the form of a betta fish.",
  },
  "the-eye": {
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
          ...post,
          image: fallback,
          title: post.title || info.title,
          subtitle: post.subtitle || info.subtitle,
        };
      });
    }) ?? [];

  return (
    <div className="min-h-screen bg-bg">
      <section className="container mx-auto px-4 py-14">
        <PostList posts={allPosts} onLikePost={() => {}} />

        {hasNextPage && (
          <div className="flex justify-center mt-14">
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              variant="outline"
              size="lg"
              className="min-w-32 border-deep text-deep hover:bg-deep hover:text-white transition"
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

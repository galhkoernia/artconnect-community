/*
 * Created on Thu Nov 27 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { useInfinitePosts } from '../hooks/useInfinitePosts';
import { PostList } from '../components/PostList';
import { Button } from '../../../../components/common/Button';

import Img1 from "../../../../assets/feed/feed1/feed1-img-01.png";
import Img2 from "../../../../assets/feed/feed1/feed1-img-02.png";
import Img3 from "../../../../assets/feed/feed1/feed1-img-03.png";

// fallback yang dipakai
const DefaultImg = Img1;


export const FeedPage: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error
  } = useInfinitePosts(6);

  const fallbackImages = [Img1, Img2, Img3];

  const allPosts = data?.pages.flatMap((page, pageIndex) =>
  page.data?.map((post, postIndex) => {
    const fallback = fallbackImages[(postIndex + pageIndex) % fallbackImages.length];

    return {
      ...post,
      image: post.images?.[0]?.url || fallback
    };
   }) || []
  ) || [];


  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  const handleLikePost = (postId: string | number) => {
    console.log("Post liked:", postId);
  };

  // Loading State
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

  // Error State
  if (status === "error") {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-red-500 text-xl font-semibold mb-3">Failed to load feed</h2>
        <p className="text-gray-600 mb-6 max-w-sm">
          {(error as Error)?.message || "Unable to load posts at this time."}
        </p>
        <Button onClick={() => window.location.reload()} variant="primary">
          Try Again
        </Button>
      </div>
    );
  }

  // Main Feed
  return (
    <div className="min-h-screen bg-bg">

      {/* Feed List */}
      <section className="container mx-auto px-4 py-14">
        <PostList posts={allPosts} onLikePost={handleLikePost} />

        {/* Load More Button */}
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

        {/* End of Feed */}
        {!hasNextPage && allPosts.length > 0 && (
          <div className="text-center mt-20 py-10 text-gray-500">
            <p className="font-medium">You've seen all artworks</p>
            <p className="text-sm mt-1 text-gray-400">Check back later for new creations</p>
          </div>
        )}
      </section>
    </div>
  );
};

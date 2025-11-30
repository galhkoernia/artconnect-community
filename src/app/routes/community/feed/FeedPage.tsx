/*
 * Created on Thu Nov 27 2025
 *
 * Copyright (c) 2025 Your Company
 */

import { useInfinitePosts } from '../hooks/useInfinitePosts';
import { PostList } from '../components/PostList';
import { Button } from '../../../../components/common/Button';

export const FeedPage: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error
  } = useInfinitePosts(6);

  const allPosts = data?.pages.flatMap(page => page.data) || [];

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  const handleLikePost = (postId: string) => {
    console.log('Post liked:', postId);
  };

  /* ================= LOADING STATE ================= */
  if (status === 'pending') {
    return (
      <div className="min-h-screen bg-bg py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 space-y-3">
            <div className="h-6 w-48 bg-soft animate-pulse rounded-md"></div>
            <div className="h-4 w-72 bg-soft animate-pulse rounded-md"></div>
            <div className="h-6 w-40 bg-soft animate-pulse rounded-md"></div>
          </div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white shadow-md rounded-xl p-5 flex gap-4 mb-6 animate-pulse">
              <div className="w-24 h-24 bg-soft rounded-md"></div>
              <div className="flex-grow space-y-3">
                <div className="h-4 w-48 bg-soft rounded"></div>
                <div className="h-3 w-32 bg-soft rounded"></div>
                <div className="h-3 w-20 bg-soft rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ================= ERROR STATE ================= */
  if (status === 'error') {
    return (
      <div className="min-h-screen bg-bg py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-red-500 text-lg font-semibold mb-3">Failed to load feed</div>
          <p className="text-gray-600 mb-6 max-w-sm mx-auto">
            {(error as Error)?.message || 'Unable to load posts at this time.'}
          </p>
          <Button onClick={() => window.location.reload()} variant="primary">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  /* ================= MAIN FEED ================= */
  return (
    <div className="min-h-screen bg-bg">
      
      {/* ========== HEADER (sesuai desain gambar) ========== */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="container mx-auto px-4">

          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-extrabold text-text leading-tight">
                LOREUM IPSUM
              </h1>
              <h2 className="text-2xl font-semibold text-olive mt-1">
                consectetur
              </h2>
              <p className="text-gray-600 mt-4 max-w-md">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum.
              </p>
            </div>
          </div>

          {/* Info Bar Line */}
          <div className="w-60 h-6 bg-soft rounded-md"></div>

        </div>
      </section>

      {/* ========== FEED LIST ========== */}
      <section className="container mx-auto px-4 py-10">
        <PostList posts={allPosts} onLikePost={handleLikePost} />

        {/* Load More Button */}
        {hasNextPage && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleLoadMore}
              disabled={isFetchingNextPage}
              variant="outline"
              size="lg"
              className="min-w-32 border-deep text-deep hover:bg-deep hover:text-white"
            >
              {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        )}

        {/* End of Feed */}
        {!hasNextPage && allPosts.length > 0 && (
          <div className="text-center mt-16 py-8 border-t border-gray-200">
            <p className="text-gray-500 font-medium">You've seen all artworks</p>
            <p className="text-gray-400 text-sm mt-1">Check back later for new creations</p>
          </div>
        )}
      </section>
    </div>
  );
};

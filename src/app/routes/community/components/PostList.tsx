/*
 * Created on Fri Nov 28 2025
 * 
 * Copyright (c) 2025 Your Company
 */

import { Post } from '../services/community.types';
import { PostCard } from './PostCard';
import { communityApi } from '../services/community.api';

interface PostListProps {
  posts: Post[];
  onLikePost: (postId: string) => void;
}

export const PostList: React.FC<PostListProps> = ({ posts, onLikePost }) => {
  const handleLike = async (postId: string) => {
    try {
      await communityApi.likePost(postId);
      onLikePost(postId);
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-lg">No posts found</div>
        <p className="text-gray-500 mt-2">Be the first to share your artwork!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={handleLike}
        />
      ))}
    </div>
  );
};
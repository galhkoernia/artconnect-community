/*
 * Created on Fri Nov 28 2025
 * 
 * Copyright (c) 2025 Your Company
 */

import { useState } from 'react';
import { Post } from '../services/community.types';
import { Avatar } from '../../../../components/common/Avatar';
import { Card, CardContent } from '../../../../components/common/Card';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLiked, setIsLiked] = useState(post.likedByUser);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = async () => {
    try {
      setIsLiked(!isLiked);
      setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
      onLike(post.id);
    } catch (error) {
      // Revert on error
      setIsLiked(!isLiked);
      setLikeCount(prev => isLiked ? prev + 1 : prev - 1);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-soft bg-white">
      {/* Post Image */}
      <div className="relative bg-gray-100 aspect-[4/3]">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-soft animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {/* Placeholder */}
        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-deep to-olive transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-center text-white p-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm font-medium opacity-90">Artwork Image</p>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Author info dan date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar 
                src={post.author.avatar} 
                alt={post.author.displayName}
                size="sm"
              />
              <span className="text-sm font-medium text-text">
                {post.author.displayName}
              </span>
            </div>
            <span className="text-xs text-gray-500">
              {formatDate(post.createdAt)}
            </span>
          </div>

          {/* Post title dan description */}
          <div>
            <h3 className="font-semibold text-text text-base mb-2 leading-tight">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {post.description}
            </p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block bg-soft text-text px-2 py-1 rounded text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-block bg-soft text-text px-2 py-1 rounded text-xs font-medium">
                +{post.tags.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-soft">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 transition-colors duration-200 ${
                isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
              }`}
            >
              <svg 
                className="w-5 h-5" 
                fill={isLiked ? "currentColor" : "none"} 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            
            <button className="flex items-center space-x-1 text-gray-600 hover:text-accent transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
              <span className="text-sm font-medium">Comment</span>
            </button>

            <button className="text-gray-600 hover:text-accent transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" 
                />
              </svg>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
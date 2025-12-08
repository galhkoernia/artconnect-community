/*
 * Created on Fri Nov 28 2025
 *
 * Copyright (c) 2025 Your Company
 */

export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar?: string;
  bio?: string;
  followers: number;
  following: number;
  isFollowing?: boolean;
}

export interface Post {
  subtitle: string;
  id: string;
  title: string;
  description: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
  }>;
  author: User;
  tags: string[];
  likes: number;
  likedByUser: boolean;
  createdAt: string;
  price?: number;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  nextCursor?: string;
  hasMore: boolean;
}

export interface FeedQueryParams {
  cursor?: string;
  limit?: number;
  tag?: string;
  sort?: 'latest' | 'popular';
}
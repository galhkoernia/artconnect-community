/*
 * Created on Fri Nov 28 2025
 * 
 * Copyright (c) 2025 Your Company
 */

import { Post, PaginatedResponse, User, Comment } from './community.types';

// Mock data - akan diganti dengan real API nanti
const mockUsers: User[] = [
  {
    id: 'user_1',
    username: 'lorem_artist',
    displayName: 'Lorem Ipsum',
    avatar: '',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    followers: 245,
    following: 34
  },
  {
    id: 'user_2',
    username: 'dolor_painter',
    displayName: 'Dolor Sit Amet',
    avatar: '',
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    followers: 189,
    following: 56
  }
];

const mockPosts: Post[] = [
  {
    id: 'post_1',
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    images: [{ url: '', width: 1200, height: 800 }],
    author: mockUsers[0],
    tags: ['painting', 'landscape', 'oil'],
    likes: 24,
    likedByUser: false,
    createdAt: '2024-01-15T10:30:00Z',
  },
  {
    id: 'post_2',
    title: 'Consectetur Adipiscing',
    description: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.',
    images: [{ url: '', width: 1000, height: 1200 }],
    author: mockUsers[1],
    tags: ['digital', 'illustration', 'urban'],
    likes: 42,
    likedByUser: true,
    createdAt: '2024-01-14T15:20:00Z',
  },
  {
    id: 'post_3',
    title: 'Elit Sed Do',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    images: [{ url: '', width: 900, height: 900 }],
    author: mockUsers[0],
    tags: ['abstract', 'mixed-media', 'contemporary'],
    likes: 18,
    likedByUser: false,
    createdAt: '2024-01-13T09:15:00Z',
  },
]

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const communityApi = {
  async getFeed(params: { cursor?: string; limit?: number }): Promise<PaginatedResponse<Post>> {
    await delay(500); // Simulate network delay
    
    const limit = params.limit || 6;
    const cursor = params.cursor ? parseInt(params.cursor) : 0;
    
    const startIndex = cursor;
    const endIndex = startIndex + limit;
    const paginatedPosts = mockPosts.slice(startIndex, endIndex);
    
    return {
      data: paginatedPosts,
      nextCursor: endIndex < mockPosts.length ? endIndex.toString() : undefined,
      hasMore: endIndex < mockPosts.length
    };
  },

  async likePost(postId: string): Promise<{ likes: number; likedByUser: boolean }> {
    await delay(200);
    const post = mockPosts.find(p => p.id === postId);
    if (post) {
      post.likes += 1;
      post.likedByUser = true;
      return { likes: post.likes, likedByUser: true };
    }
    throw new Error('Post not found');
  },

  async unlikePost(postId: string): Promise<{ likes: number; likedByUser: boolean }> {
    await delay(200);
    const post = mockPosts.find(p => p.id === postId);
    if (post) {
      post.likes = Math.max(0, post.likes - 1);
      post.likedByUser = false;
      return { likes: post.likes, likedByUser: false };
    }
    throw new Error('Post not found');
  }
};
/*
 * Created on Fri Nov 28 2025
 * 
 * Copyright (c) 2025 Your Company
 */

import { useInfiniteQuery } from '@tanstack/react-query';
import { communityApi } from '../services/community.api';
import { Post } from '../services/community.types';

export const useInfinitePosts = (limit: number = 6) => {
  return useInfiniteQuery({
    queryKey: ['posts', 'feed'],
    queryFn: ({ pageParam }) => 
      communityApi.getFeed({ cursor: pageParam, limit }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
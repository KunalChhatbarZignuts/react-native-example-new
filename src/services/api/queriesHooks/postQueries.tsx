import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '../postApi';
import { QUERY_KEYS } from '../queryKeys';

export const usePosts = (enabled: boolean = true) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.POSTS,
    queryFn: getPosts,
    enabled, // ✅ now it exists
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 10) {
        return undefined;
      }
      return pages.length + 1;
    },
  });
};

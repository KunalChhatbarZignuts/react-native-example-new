// postApi.ts
import { ENDPOINTS } from './endpoints';

const LIMIT = 10;

export const getPosts = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `${ENDPOINTS.POSTS}?_page=${pageParam}&_limit=${LIMIT}`,
  );
  console.log('APi Response ', response);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
};

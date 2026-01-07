import { ENDPOINTS } from './endpoints';

// GET API
export const getProducts = async () => {
  const response = await fetch(ENDPOINTS.PRODUCTS);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};

// POST API
export const createProduct = async (payload: {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}) => {
  const response = await fetch(ENDPOINTS.PRODUCTS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to create product');
  }

  return response.json();
};

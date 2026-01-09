import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../queryKeys';
import { createProduct, getProducts } from '../productApi';

// GET products
export const useProducts = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS,
    queryFn: getProducts,
  });
};

// POST product
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.PRODUCTS,
      });
    },
  });
};

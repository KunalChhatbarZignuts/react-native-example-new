import React, { useState } from 'react';
import { Button, Alert } from 'react-native';
import { useCreateProduct } from '../../../services/api/queriesHooks/productQueries';
import BaseScreen from '../../../components/BaseScreen';
import AppLoader from '../../../components/AppLoader';

export default function AddProductScreen() {
  const { mutate } = useCreateProduct();
  const [loading, setLoading] = useState(false);

  const addProduct = () => {
    setLoading(true); // show loader
    mutate(
      {
        title: 'React Native Course',
        price: 199,
        description: 'Learning TanStack Query',
        image: 'https://i.pravatar.cc',
        category: 'education',
      },
      {
        onSuccess: () => {
          setLoading(false); // hide loader
          Alert.alert('Success', 'Product added successfully!');
          // Optionally navigate back or reset form
        },
        onError: (error: any) => {
          setLoading(false); // hide loader
          console.error('Add product error:', error);
          Alert.alert(
            'Error',
            error?.message || 'Something went wrong while adding the product.',
          );
        },
      },
    );
  };

  return (
    <BaseScreen title="Add Product">
      <Button title="Add Product" onPress={addProduct} />
      <AppLoader visible={loading} />
    </BaseScreen>
  );
}

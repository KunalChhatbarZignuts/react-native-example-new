/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useProducts } from '../../../services/api/queriesHooks/productQueries';

export default function ProductListScreen() {
  const { data, isLoading, error, refetch } = useProducts();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch(); // Refetch products from API
    } catch (e) {
      console.error('Error refreshing products:', e);
    } finally {
      setRefreshing(false);
    }
  };

  if (isLoading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  if (error) return <Text>Error fetching products</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item.id)}
      showsVerticalScrollIndicator={false}
      bounces={true}
      alwaysBounceVertical={true}
      overScrollMode="always"
      scrollEventThrottle={16}
      renderItem={({ item }) => (
        <View style={{ padding: 12 }}>
          <Text>{item.title}</Text>
        </View>
      )}
      // Add pull-to-refresh
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingBottom: 16 }}
    />
  );
}

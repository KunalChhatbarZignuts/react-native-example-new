/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { usePosts } from '../../services/api/queriesHooks/postQueries';
import BaseScreen from '../../components/BaseScreen';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const Shimmer = createShimmerPlaceholder(LinearGradient);
const PostSkeleton = () => {
  return (
    <View style={styles.skeletonCard}>
      <Shimmer height={18} style={styles.skeletonTitle} />
      <Shimmer height={14} style={styles.skeletonLine} />
      <Shimmer height={14} style={styles.skeletonLine} />
    </View>
  );
};

export default function LearningTopic16() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = usePosts();

  const posts = data?.pages.flat() ?? [];

  if (isLoading) {
    return (
      <BaseScreen title="Learning Topic 16">
        {[...Array(6)].map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </BaseScreen>
    );
  }

  return (
    <BaseScreen title="Learning Topic 16">
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        refreshing={false}
        onRefresh={refetch}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  card: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  skeletonCard: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },

  skeletonTitle: {
    height: 18,
    width: '60%',
    backgroundColor: '#d1d5db',
    borderRadius: 4,
    marginBottom: 8,
  },

  skeletonLine: {
    height: 14,
    width: '100%',
    backgroundColor: '#d1d5db',
    borderRadius: 4,
    marginBottom: 6,
  },

  skeletonLineSmall: {
    height: 14,
    width: '80%',
    backgroundColor: '#d1d5db',
    borderRadius: 4,
  },
});

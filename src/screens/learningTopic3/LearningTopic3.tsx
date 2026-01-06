import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BaseScreen from '../../components/BaseScreen';

const LIST_DATA = [
  { id: '1', title: 'React Native' },
  { id: '2', title: 'FlatList' },
  { id: '3', title: 'Flexbox' },
  { id: '4', title: 'Navigation' },
  { id: '5', title: 'Hooks' },
];

const GRID_DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
];

export default function LearningTopic3() {
  return (
    <BaseScreen title="Learning Topic 3">
      {/* List Example */}
      <Text style={styles.title}>1️⃣ FlatList (List)</Text>
      <FlatList
        data={LIST_DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.title}</Text>
          </View>
        )}
      />

      {/* Grid Example */}
      <Text style={styles.title}>2️⃣ FlatList (Grid)</Text>
      <FlatList
        data={GRID_DATA}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <Text style={styles.gridText}>{item.title}</Text>
          </View>
        )}
      />
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '700',
  },
  listItem: {
    padding: 14,
    marginBottom: 8,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
  },
  listText: {
    fontSize: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  gridItem: {
    flex: 1,
    margin: 6,
    height: 100,
    backgroundColor: '#C8E6C9',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

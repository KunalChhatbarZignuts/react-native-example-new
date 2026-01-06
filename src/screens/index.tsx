import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LEARNING_TOPICS = [
  'Text, View, Buttons,InputText and Etc.',
  'Flexbox Layout (row, column, align, justify)',
  'Grid and List',
  'DatePicker & Time Picker',
  'Bottom Sheet and Dialogs',
  'Camera and Gallery Picker',
  'Form Validation',
  'Navigation (Stack & Tabs)',
  'Memoization (useMemo, useCallback) and Custom Hooks',
  'State Managemen ("Context API,Redux Toolkit,Zustand)',
  'API Integration',
  'AsyncStorage & Secure Storage',
  'Permissions Handling',
  'Pagination & Infinite Scroll',
  'Animations (Reanimated)',
];

export default function IndexScreen() {
  const navigation = useNavigation<any>();

  const handleItemPress = (index: number) => {
    if (index === 0) {
      navigation.navigate('LearningTopic1');
    } else if (index === 1) {
      navigation.navigate('LearningTopic2');
    } else if (index === 2) {
      navigation.navigate('LearningTopic3');
    } else if (index === 3) {
      navigation.navigate('LearningTopic4');
    }
  };

  return (
    // REMOVED 'top' from edges to stop the "bar" appearance
    <View style={styles.container}>
      <Text style={styles.title}>📚 React Native Learning Topics</Text>

      <FlatList
        data={LEARNING_TOPICS}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handleItemPress(index)} style={styles.item}>
            <Text style={styles.index}>{index + 1}.</Text>
            <Text style={styles.text}>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  index: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#007AFF',
  },
  text: {
    fontSize: 16,
    color: '#444',
    flex: 1,
  },
});

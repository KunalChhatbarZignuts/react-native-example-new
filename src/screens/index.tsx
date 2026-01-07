import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '../services/navigation/RouteNames';

const LEARNING_TOPICS = [
  `Ui Components \n
   - Text,
   - View,
   - InputText
   - Button,
   - Switch
   - CheckBox
   - Chip
   - Card
   - Radio Button
   - DropDonw Menu
  `,
  'Flexbox Layout (row, column, align, justify)',
  'Grid and List',
  'DatePicker & Time Picker',
  'Bottom Sheet and Dialogs',
  'Tab View & Pager View',
  'Camera, Gallery Picker & Permissions Handling',
  'Form Validation',
  'Navigation (Drawer & BottomNevBar)',
  'Memoization (useMemo, useCallback, useRef, useState) and Custom Hooks',
  'State Managemen ("Context API,Redux Toolkit,Zustand)',
  'API Integration',
  'AsyncStorage & Secure Storage',
  'Firebase',
  'WebView Integration',
  'Theming (Dark Mode & Light Mode)',
  'Pagination & Infinite Scroll',
  'Animations (Reanimated)',
  // 'Splash Screens (Native)'
  // 'Deep Linking & Notifications'
  // 'Multi-Language Support'
];

export default function IndexScreen() {
  const navigation = useNavigation<any>();

  // Define the order of routes in an array
  const TOPIC_ROUTES = [
    RouteNames.LEARNING_TOPIC_1,
    RouteNames.LEARNING_TOPIC_2,
    RouteNames.LEARNING_TOPIC_3,
    RouteNames.LEARNING_TOPIC_4,
    RouteNames.LEARNING_TOPIC_5,
    RouteNames.LEARNING_TOPIC_6,
    RouteNames.LEARNING_TOPIC_7,
    RouteNames.LEARNING_TOPIC_8,
  ];

  const handleItemPress = (index: number) => {
    const routeName = TOPIC_ROUTES[index];

    if (routeName) {
      navigation.navigate(routeName);
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
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    color: '#007AFF',
  },
  text: {
    fontSize: 16,
    color: '#444',
    flex: 1,
  },
});

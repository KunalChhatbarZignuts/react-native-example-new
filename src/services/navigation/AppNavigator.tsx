import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

// Import your screens
import IndexScreen from '../../screens/index'; // Adjust this path
import { SafeAreaView } from 'react-native-safe-area-context';
import LearningTopic1 from '../../screens/learningTopic1/LearningTopic1';
import LearningTopic2 from '../../screens/learningTopic2/LearningTopic2';
import LearningTopic3 from '../../screens/learningTopic3/LearningTopic3';
import LearningTopic5 from '../../screens/learningTopic5/LearningTopic5';
import LearningTopic4 from '../../screens/learningTopic4/LearningTopic4';
import LearningTopic6 from '../../screens/learningTopic6/LearningTopic6';
import LearningTopic7 from '../../screens/learningTopic7/LearningTopic7';
import { RouteNames } from './RouteNames';
import LearningTopic8 from '../../screens/learningTopic8/LearningTopic8';
import LearningTopic9 from '../../screens/learningTopic9/LearningTopic9';
import LearningTopic10 from '../../screens/learningTopic10/LearningTopic10';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationContainer>
        {/* StatusBar hidden={true} removes the clock/battery bar.
        If you still see a 'gap', check LearningTopic1 for SafeAreaView padding.
      */}
        <StatusBar hidden={true} />

        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            headerShown: false,
            // This removes the white flicker/shadow often seen in native-stack
            contentStyle: { backgroundColor: '#fff' },
          }}
        >
          {/* The first screen defined is the one that loads on app start */}
          <Stack.Screen name={RouteNames.INDEX} component={IndexScreen} />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_1}
            component={LearningTopic1}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_2}
            component={LearningTopic2}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_3}
            component={LearningTopic3}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_4}
            component={LearningTopic4}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_5}
            component={LearningTopic5}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_6}
            component={LearningTopic6}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_7}
            component={LearningTopic7}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_8}
            component={LearningTopic8}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_9}
            component={LearningTopic9}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_10}
            component={LearningTopic10}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

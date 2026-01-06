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
          <Stack.Screen name="Index" component={IndexScreen} />

          <Stack.Screen name="LearningTopic1" component={LearningTopic1} />

          <Stack.Screen name="LearningTopic2" component={LearningTopic2} />

          <Stack.Screen name="LearningTopic3" component={LearningTopic3} />
          <Stack.Screen name="LearningTopic4" component={LearningTopic4} />
          <Stack.Screen name="LearningTopic5" component={LearningTopic5} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

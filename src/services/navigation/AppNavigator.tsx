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
import LearningTopic11 from '../../screens/learningTopic11/LearningTopic11';
import AddProductScreen from '../../screens/learningTopic12/components/AddProduct';
import LearningTopic12 from '../../screens/learningTopic12/LearningTopic12';
import LearningTopic13 from '../../screens/learningTopic13/LearningTopic13';
import LearningTopic15 from '../../screens/learningTopic15/LearningTopic15';
import LearningTopic14 from '../../screens/learningTopic14/LearningTopic14';
import LearningTopic16 from '../../screens/learningTopic16/LearningTopic16';
import LearningTopic17 from '../../screens/learningTopic17/LearningTopic17';
import LearningTopic18 from '../../screens/learningTopic18/LearningTopic18';
import LearningTopic19 from '../../screens/learningTopic19/LearningTopic19';
import { linking } from './linking';
import LearningTopic20 from '../../screens/learningTopic20/LearningTopic20';
import LearningTopic21 from '../../screens/learningTopic21/LearningTopic21';
import LearningTopic22 from '../../screens/learningTopic22/LearningTopic22';
import LearningTopic23 from '../../screens/learningTopic23/LearningTopic23';
import LearningTopic24 from '../../screens/learningTopic24/LearningTopic24';
import TamaguUI from '../../screens/learningTopic24/Tamagui';
import { RootStackParamList } from './RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationContainer linking={linking}>
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
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_11}
            component={LearningTopic11}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_12}
            component={LearningTopic12}
          />
          <Stack.Screen
            name="AddProduct" // this is the route name you'll navigate to
            component={AddProductScreen}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_13}
            component={LearningTopic13}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_14}
            component={LearningTopic14}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_15}
            component={LearningTopic15}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_16}
            component={LearningTopic16}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_17}
            component={LearningTopic17}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_18}
            component={LearningTopic18}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_19}
            component={LearningTopic19}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_20}
            component={LearningTopic20}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_21}
            component={LearningTopic21}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_22}
            component={LearningTopic22}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_23}
            component={LearningTopic23}
          />
          <Stack.Screen
            name={RouteNames.LEARNING_TOPIC_24}
            component={LearningTopic24}
          />
          <Stack.Screen name={RouteNames.TAMAGUI_UI} component={TamaguUI} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

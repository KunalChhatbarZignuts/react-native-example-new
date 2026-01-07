import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import BaseScreen from '../../components/BaseScreen';
import HomeTab from './tabs/Home/HomeTab';
import ProfileTab from './tabs/ProfileTab';

const Tab = createBottomTabNavigator();

export default function LearningTopic9() {
  return (
    <BaseScreen title="Learning Topic 9">
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },

          tabBarIcon: ({ color, size }) => {
            let iconName = 'circle';

            if (route.name === 'HomeTab') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="HomeTab" component={HomeTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
      </Tab.Navigator>
    </BaseScreen>
  );
}

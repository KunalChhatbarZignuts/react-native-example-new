import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import BaseScreen from '../../components/BaseScreen';

const FirstRoute = () => (
  <View style={styles.scene}>
    <Text style={styles.text}>This is First Tab</Text>
  </View>
);

const SecondRoute = () => (
  <View style={styles.scene}>
    <Text style={styles.text}>This is Second Tab</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={styles.scene}>
    <Text style={styles.text}>This is Third Tab</Text>
  </View>
);

export default function LearningTopic6() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tab One' },
    { key: 'second', title: 'Tab Two' },
    { key: 'third', title: 'Tab Three' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <BaseScreen title="React Native Tab View">
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            // labelStyle={styles.label}
          />
        )}
      />
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  tabBar: {
    backgroundColor: '#1976D2',
  },
  indicator: {
    backgroundColor: '#FFF',
  },
  label: {
    fontWeight: '700',
  },
});

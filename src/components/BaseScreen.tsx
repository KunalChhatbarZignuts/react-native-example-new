import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBarWithBackButton from './AppBarWithBackButton';

interface BaseScreenProps {
  title?: string;
  children: React.ReactNode;
}

const BaseScreen: React.FC<BaseScreenProps> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <AppBarWithBackButton title={title} />

      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default BaseScreen;

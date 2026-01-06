import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import BackButton from './BackButton';

interface AppBarWithBackButtonProps {
  title?: string;
  backgroundColor?: string;
  titleColor?: string;
  backColor?: string;
}

const AppBarWithBackButton: React.FC<AppBarWithBackButtonProps> = ({
  title,
  backgroundColor = '#fff',
  titleColor = '#000',
  backColor = '#000',
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <BackButton color={backColor} />

      <Text numberOfLines={1} style={[styles.title, { color: titleColor }]}>
        {title}
      </Text>

      {/* Spacer to keep title centered */}
      <View style={{ width: 40 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AppBarWithBackButton;

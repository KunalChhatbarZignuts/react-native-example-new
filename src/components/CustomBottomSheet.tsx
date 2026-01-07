import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StaticBottomSheetProps {
  visible: boolean;
  height?: number;
  children?: React.ReactNode;
}

const StaticBottomSheet: React.FC<StaticBottomSheetProps> = ({
  visible,
  height = 250,
  children,
}) => {
  if (!visible) return null;

  return (
    <View style={[styles.container, { height }]}>
      {children || <Text style={styles.sheetTitle}>Bottom Sheet Content</Text>}
    </View>
  );
};

export default StaticBottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007bff',
  },
});

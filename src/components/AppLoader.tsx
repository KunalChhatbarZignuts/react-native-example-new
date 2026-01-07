import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';

type AppLoaderProps = {
  visible: boolean;
};

export default function AppLoader({ visible }: AppLoaderProps) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent
      onRequestClose={() => {}} // required on Android
      hardwareAccelerated={true}
      // Prevent dismissing the modal by tapping outside
      // You can add `pointerEvents` if you want touches to pass through
    >
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent
    justifyContent: 'center',
    alignItems: 'center',
  },
});

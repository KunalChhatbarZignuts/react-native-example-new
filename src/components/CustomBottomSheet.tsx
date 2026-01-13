import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';

interface StaticBottomSheetProps {
  visible: boolean;
  height?: number;
  onClose: () => void;
  children?: React.ReactNode;
}

const StaticBottomSheet: React.FC<StaticBottomSheetProps> = ({
  visible,
  height = 250,
  onClose,
  children,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      {/* Backdrop */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* Bottom Sheet */}
      <View style={[styles.container, { height }]}>
        {children || (
          <Text style={styles.sheetTitle}>Bottom Sheet Content</Text>
        )}
      </View>
    </Modal>
  );
};

export default StaticBottomSheet;
const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
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

    // Shadow
    elevation: 10,
    shadowColor: '#000',
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

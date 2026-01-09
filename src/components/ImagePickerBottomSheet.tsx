import React, { forwardRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export type ImagePickerSheetRef = {
  open: () => void;
  close: () => void;
};

interface Props {
  onCamera: () => void;
  onGallery: () => void;
}

const ImagePickerBottomSheet = forwardRef<BottomSheet, Props>(
  ({ onCamera, onGallery }, ref) => {
    const snapPoints = useMemo(() => ['25%'], []);

    return (
      <BottomSheet ref={ref} snapPoints={snapPoints} enablePanDownToClose>
        <View style={styles.container}>
          <Text style={styles.title}>Select Image</Text>

          <TouchableOpacity style={styles.option} onPress={onCamera}>
            <Text style={styles.optionText}>📷 Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={onGallery}>
            <Text style={styles.optionText}>🖼 Gallery</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    );
  },
);

export default ImagePickerBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  option: {
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
  },
});

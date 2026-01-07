import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import BaseScreen from '../../components/BaseScreen';

/**
 * IMAGE SELECTION & CAMERA
 * * We are using 'react-native-image-picker' (https://www.npmjs.com/package/react-native-image-picker)
 * for handling camera capture and gallery selection.
 * * NOTE: This package provides a native interface for picking images.
 * If image 'editing' (cropping/rotating) is required after selection,
 * this must be paired with an additional library like 'react-native-image-crop-picker'.
 */
export default function LearningTopic7() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const openCamera = async () => {
    const result: ImagePickerResponse = await launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        quality: 0.8,
        presentationStyle: 'formSheet',
        assetRepresentationMode: 'auto',
      },
      () => {
        console.log();
      },
    );

    if (result.didCancel) return;
    if (result.errorCode) {
      Alert.alert('Camera Error', result.errorMessage || 'Error');
      return;
    }

    setImageUri(result.assets?.[0]?.uri || null);
  };

  const openGallery = async () => {
    const result: ImagePickerResponse = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (result.didCancel) return;
    if (result.errorCode) {
      Alert.alert('Gallery Error', result.errorMessage || 'Error');
      return;
    }

    setImageUri(result.assets?.[0]?.uri || null);
  };

  return (
    <BaseScreen title="Learning Topic 7">
      <Text style={styles.title}>Camera & Gallery Picker</Text>

      <TouchableOpacity style={styles.button} onPress={openCamera}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openGallery}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </BaseScreen>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1976D2',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
  },
  image: {
    marginTop: 20,
    width: '100%',
    height: 250,
    borderRadius: 8,
  },
});

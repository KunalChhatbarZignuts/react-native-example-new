/**
 * This is refernace for .env set up
 * https://medium.com/just1and0/how-to-setup-env-file-in-your-react-native-application-2f760d806e02
 *
 */

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import RBSheet from 'react-native-raw-bottom-sheet';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// import storage from '@react-native-firebase/storage';
import firestore, {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from '@react-native-firebase/firestore';

export const db = getFirestore();

export default function LearningTopic14() {
  const refRBSheet = useRef<React.ElementRef<typeof RBSheet>>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  // const uploadImageToStorage = async (path: string, fileName: string) => {
  //   try {
  //     const reference = storage().ref(`images/${fileName}`);
  //     await reference.putFile(path); // <-- Correct upload
  //     const url = await reference.getDownloadURL();
  //     return url;
  //   } catch (error) {
  //     console.error('Storage Error:', error);
  //     throw error;
  //   }
  // };

  const handleSubmit = async () => {
    if (!name || !email) {
      Alert.alert('Validation', 'Please enter name and email');
      return;
    }

    try {
      setLoading(true);

      // const fileName = `${Date.now()}-${image.fileName || 'upload.jpg'}`;
      // const imageUrl = await uploadImageToStorage(image.uri, fileName);

      await addDoc(collection(db, 'users'), {
        name,
        email,
        createdAt: serverTimestamp(), // Assign to a key
      });
      await firestore().collection('users').add({
        name,
        email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Success', 'Data saved to Firestore');

      setName('');
      setEmail('');
      setImage(null);
    } catch (error) {
      console.error('Error Details:', error);
      Alert.alert('Error', 'Failed to save data');
    } finally {
      setLoading(false);
    }
  };

  const openCamera = () => {
    refRBSheet.current?.close();
    launchCamera({ mediaType: 'photo', quality: 0.8 }, res => {
      if (res.assets?.[0]) {
        setImage(res.assets[0]);
      }
    });
  };

  const openGallery = () => {
    refRBSheet.current?.close();
    launchImageLibrary({ mediaType: 'photo', quality: 0.8 }, res => {
      if (res.assets?.[0]) {
        setImage(res.assets[0]);
      }
    });
  };

  return (
    <BaseScreen title="Learning Topic 14">
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imageBox}
          onPress={() => refRBSheet.current?.open()}
        >
          {image ? (
            <Image source={{ uri: image.uri }} style={styles.image} />
          ) : (
            <Text style={styles.placeholder}>Tap to select image</Text>
          )}
        </TouchableOpacity>

        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Button
          title={loading ? 'Uploading...' : 'Submit'}
          disabled={loading}
          onPress={handleSubmit}
        />

        <RBSheet
          ref={refRBSheet}
          height={180}
          openDuration={250}
          customStyles={{ container: styles.sheetContainer }}
        >
          <Text style={styles.sheetTitle}>Select Image</Text>
          <TouchableOpacity style={styles.sheetOption} onPress={openCamera}>
            <Text style={styles.sheetText}>📷 Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sheetOption} onPress={openGallery}>
            <Text style={styles.sheetText}>🖼 Gallery</Text>
          </TouchableOpacity>
        </RBSheet>
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  imageBox: {
    height: 120,
    width: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  placeholder: {
    color: '#888',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  sheetContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  sheetOption: {
    paddingVertical: 12,
  },
  sheetText: {
    fontSize: 16,
  },
});

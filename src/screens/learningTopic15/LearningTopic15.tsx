/**
 * Before starting this module, make sure to review the official React Native Firebase documentation:
 * https://rnfirebase.io/
 * This helps ensure proper setup and best practices.
 */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import appleAuth from '@invertase/react-native-apple-authentication';
import { WEB_CLIENT_ID_FROM_FIREBASE } from '@env';
import BaseScreen from '../../components/BaseScreen';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID_FROM_FIREBASE,
  offlineAccess: true,
});

export default function LearningTopic15() {
  // 🔹 Google Login
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const signInResult = await GoogleSignin.signIn();
      const idToken = signInResult.data?.idToken;

      if (!idToken) {
        throw new Error('Google ID Token not found');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);

      Alert.alert('Success', 'Google login successful');
    } catch (error: any) {
      console.log('Error : ', error.message);

      Alert.alert('Error', error.message);
    }
  };

  const signInWithApple = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      const { identityToken, nonce } = appleAuthRequestResponse;

      if (!identityToken) {
        throw new Error('Apple Sign-In failed');
      }

      const appleCredential = await auth.AppleAuthProvider.credential(
        identityToken,
        nonce,
      );

      await auth().signInWithCredential(appleCredential);

      Alert.alert('Success', 'Apple login successful');
    } catch (error: any) {
      console.log('Error : ', error.message);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <BaseScreen title="Learning Topic 15">
      <Text style={styles.subtitle}>
        OAuth Login (Apple & Google) with Firebase
      </Text>

      <TouchableOpacity style={styles.button} onPress={signInWithGoogle}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>

      {appleAuth.isSupported && (
        <TouchableOpacity style={styles.appleButton} onPress={signInWithApple}>
          <Text style={styles.buttonText}>Login with Apple</Text>
        </TouchableOpacity>
      )}
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 14,
    borderRadius: 6,
    marginBottom: 12,
  },
  appleButton: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

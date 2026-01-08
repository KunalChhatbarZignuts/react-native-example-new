import { Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { asyncStorageService } from '../../services/storage/asyncStorageService';
import { secureStorageService } from '../../services/storage/secureStorageService';
import BaseScreen from '../../components/BaseScreen';
import { SECURE_KEYS, STORAGE_KEYS } from '../../services/storage/storageKeys';

const LearningTopic13: React.FC = () => {
  const [asyncValue, setAsyncValue] = useState('');
  const [savedAsyncValue, setSavedAsyncValue] = useState<string | null>(null);

  const [secureValue, setSecureValue] = useState('');
  const [savedSecureValue, setSavedSecureValue] = useState<string | null>(null);

  useEffect(() => {
    const loadStoredValues = async () => {
      const asyncStored = await asyncStorageService.get<string>(
        STORAGE_KEYS.TOPIC_13_TEXT,
      );
      setSavedAsyncValue(asyncStored);

      const secureStored = await secureStorageService.get(
        SECURE_KEYS.TOPIC_13_SECURE_TEXT,
      );
      setSavedSecureValue(secureStored);
    };

    loadStoredValues();
  }, []);

  const handleAsyncSave = async () => {
    if (!asyncValue.trim()) return;

    await asyncStorageService.set(STORAGE_KEYS.TOPIC_13_TEXT, asyncValue);
    setSavedAsyncValue(asyncValue);
    setAsyncValue('');
  };

  const handleSecureSave = async () => {
    if (!secureValue.trim()) return;

    await secureStorageService.set(
      SECURE_KEYS.TOPIC_13_SECURE_TEXT,
      secureValue,
    );
    setSavedSecureValue(secureValue);
    setSecureValue('');
  };

  return (
    <BaseScreen title="Learning Topic 13">
      {/* Async Storage */}
      <Text style={styles.sectionTitle}>AsyncStorage</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter async value"
        value={asyncValue}
        onChangeText={setAsyncValue}
      />

      <Button title="Save Async Value" onPress={handleAsyncSave} />

      {savedAsyncValue && (
        <Text style={styles.result}>Async Saved Value: {savedAsyncValue}</Text>
      )}

      {/* Secure Storage */}
      <Text style={styles.sectionTitle}>Secure Storage</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter secure value"
        value={secureValue}
        onChangeText={setSecureValue}
      />

      <Button title="Save Secure Value" onPress={handleSecureSave} />

      {savedSecureValue && (
        <Text style={styles.result}>
          Secure Saved Value: {savedSecureValue}
        </Text>
      )}
    </BaseScreen>
  );
};

export default LearningTopic13;
const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  result: {
    marginTop: 10,
    fontSize: 15,
    color: 'green',
  },
});

/**
 * AsyncStorage & Secure Storage
 *
 * Use AsyncStorage for:
 * - Non-sensitive data
 * - App preferences (theme, language)
 * - UI state (onboarding shown, filters)
 * - Cached or temporary data
 *
 * Do NOT store sensitive data here
 * (tokens, passwords, personal info)
 *
 * Use Secure Storage for:
 * - Sensitive data
 * - Authentication tokens (access / refresh token)
 * - Passwords or secrets
 * - API keys
 *
 * Data is encrypted and protected
 * (Keychain on iOS, Keystore on Android)
 *
 */

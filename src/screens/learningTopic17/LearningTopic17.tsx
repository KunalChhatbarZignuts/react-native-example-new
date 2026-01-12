import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import { useNotification } from '../../services/notificationService/notificationService';

export default function LearningTopic17() {
  const { getFcmToken } = useNotification();
  const [token, setToken] = useState<string | null>(null);

  const handleGetToken = async () => {
    const fcmToken = await getFcmToken();
    setToken(fcmToken);
  };

  return (
    <BaseScreen title="Learning Topic 17">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Firebase Cloud Messaging</Text>
          <Text style={styles.subtitle}>Generate and view your FCM token</Text>

          <TouchableOpacity style={styles.button} onPress={handleGetToken}>
            <Text style={styles.buttonText}>Get FCM Token</Text>
          </TouchableOpacity>

          {token && (
            <View style={styles.tokenBox}>
              <Text style={styles.tokenLabel}>FCM Token</Text>
              <Text selectable style={styles.tokenText}>
                {token}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </BaseScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
  tokenBox: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
  },
  tokenLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  tokenText: {
    fontSize: 12,
    color: '#111',
  },
});

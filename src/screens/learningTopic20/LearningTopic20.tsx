// src/screens/learningTopic20/LearningTopic20.tsx
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import React from 'react';
import BaseScreen from '../../components/BaseScreen';

export default function LearningTopic20() {
  // List of deep links to show
  const deepLinks = [
    { label: 'Learning Topic 1', url: 'https://myapp.com/learning-topic-1' },
    { label: 'Learning Topic 2', url: 'myapp://learning-topic-2' },
    { label: 'Learning Topic 3', url: 'myapp://learning-topic-3' },
    { label: 'Learning Topic 4', url: 'myapp://learning-topic-4' },
    { label: 'Learning Topic 5', url: 'myapp://learning-topic-5' },
    { label: 'Learning Topic 20', url: 'myapp://learning-topic-20' },
    {
      label: 'Learning Topic 20 (HTTPS)',
      url: 'https://myapp.com/learning-topic-20',
    },
  ];

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Cannot open URL', url);
    }
  };

  return (
    <BaseScreen title="Learning Topic 20">
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Available Deep Links:</Text>
        {deepLinks.map((link, index) => (
          <TouchableOpacity
            key={index}
            style={styles.linkContainer}
            onPress={() => openLink(link.url)}
          >
            <Text style={styles.linkLabel}>{link.label}</Text>
            <Text style={styles.linkUrl}>{link.url}</Text>
          </TouchableOpacity>
        ))}
        <Text style={styles.note}>
          You can also hit these URLs in your browser or CLI to open the app if
          installed.
        </Text>
      </ScrollView>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linkContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  linkLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  linkUrl: {
    fontSize: 14,
    color: 'blue',
    marginTop: 5,
  },
  note: {
    marginTop: 20,
    fontSize: 14,
    color: 'gray',
  },
});

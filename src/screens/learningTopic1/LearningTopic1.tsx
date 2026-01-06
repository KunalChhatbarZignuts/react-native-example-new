import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import BaseScreen from '../../components/BaseScreen';

export default function LearningTopic1() {
  const [name, setName] = useState('');

  const onPressButton = () => {
    Alert.alert('Button Pressed', `Hello ${name || 'User'} 👋`);
  };

  return (
    <BaseScreen title="Learning Topic 1">
      {/* Text Example */}
      <Text style={styles.title}>1️⃣ Text Example</Text>
      <Text style={styles.description}>
        This is a simple Text component in React Native.
      </Text>

      {/* View Example */}
      <Text style={styles.title}>2️⃣ View Example</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>I am inside a View</Text>
      </View>

      {/* TextInput Example */}
      <Text style={styles.title}>3️⃣ TextInput Example</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Button Example */}
      <Text style={styles.title}>4️⃣ Button Example</Text>
      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    marginTop: 6,
    color: '#555',
  },
  box: {
    marginTop: 10,
    padding: 16,
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
  },
  boxText: {
    fontSize: 16,
  },
  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

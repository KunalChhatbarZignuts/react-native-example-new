import React, { useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import { ValidationUtil } from '../../utils/ValidationUtil';

export default function LearningTopic8() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [errors, setErrors] = useState<{
    title?: string;
    body?: string;
    userId?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (ValidationUtil.isEmpty(title)) {
      newErrors.title = 'Title is required';
    }

    if (ValidationUtil.isEmpty(body)) {
      newErrors.body = 'Body is required';
    }

    if (ValidationUtil.isEmpty(userId)) {
      newErrors.userId = 'User ID is required';
    } else if (!ValidationUtil.isNumber(userId)) {
      newErrors.userId = 'User ID must be numeric';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Form validation passed ✅');

      // reset form
      setTitle('');
      setBody('');
      setUserId('');
      setErrors({});
    }
  };

  return (
    <BaseScreen title="Learning Topic 8">
      <Text style={styles.heading}>Form Validation</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      {errors.title && <Text style={styles.error}>{errors.title}</Text>}

      <TextInput
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        style={[styles.input, styles.textArea]}
        multiline
      />
      {errors.body && <Text style={styles.error}>{errors.body}</Text>}

      <TextInput
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
        style={styles.input}
        keyboardType="numeric"
      />
      {errors.userId && <Text style={styles.error}>{errors.userId}</Text>}

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Validate</Text>
      </TouchableOpacity>
    </BaseScreen>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
  },
});

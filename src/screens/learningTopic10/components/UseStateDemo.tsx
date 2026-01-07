import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { styles } from '../styles';

export default function UseStateDemo() {
  const [text, setText] = useState('');

  return (
    <>
      <Text style={styles.title}>1️⃣ useState</Text>
      <Text>Text Value: {text}</Text>
      <TextInput
        style={styles.input}
        placeholder="Type something"
        value={text}
        onChangeText={setText}
      />
    </>
  );
}

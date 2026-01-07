import React, { useRef } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export default function UseRefDemo() {
  const renderCount = useRef(0);
  const inputRef = useRef<TextInput>(null);

  renderCount.current += 1;

  return (
    <>
      <Text style={styles.title}>4️⃣ useRef</Text>
      <Text>Render Count: {renderCount.current}</Text>

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Focus me using ref"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => inputRef.current?.focus()}
      >
        <Text style={styles.buttonText}>Focus Input</Text>
      </TouchableOpacity>
    </>
  );
}

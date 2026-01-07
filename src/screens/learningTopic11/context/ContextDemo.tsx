import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useCounter } from '../context/CounterContext';
import { styles } from '../styles';

export default function ContextDemo() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <View>
      <Text style={styles.title}>1️⃣ Context API</Text>
      <Text>Counter Value: {count}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.smallButton} onPress={increment}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={decrement}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={reset}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useCounter } from '../hooks/useCounter';
import { styles } from '../styles';

export default function CustomHookDemo() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <Text style={styles.title}>5️⃣ Custom Hook (useCounter)</Text>
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
    </>
  );
}

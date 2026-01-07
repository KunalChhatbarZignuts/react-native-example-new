import React, { useCallback, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <>
      <Text style={styles.title}>3️⃣ useCallback</Text>
      <Text>Count: {count}</Text>

      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>Increase</Text>
      </TouchableOpacity>
    </>
  );
}

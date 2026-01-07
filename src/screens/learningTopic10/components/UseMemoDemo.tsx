import React, { useMemo, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
export default function UseMemoDemo() {
  const [number, setNumber] = useState(1);

  const squaredValue = useMemo(() => number * number, [number]);

  return (
    <>
      <Text style={styles.title}>2️⃣ useMemo</Text>
      <Text>Number: {number}</Text>
      <Text>Squared Value: {squaredValue}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setNumber(prev => prev + 1)}
      >
        <Text style={styles.buttonText}>Increase Number</Text>
      </TouchableOpacity>
    </>
  );
}

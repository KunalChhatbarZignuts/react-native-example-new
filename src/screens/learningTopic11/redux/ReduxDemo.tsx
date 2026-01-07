import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';
import { RootState } from '../redux/store';
import { styles } from '../styles';

export default function ReduxDemo() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.title}>2️⃣ Redux Toolkit</Text>
      <Text>Counter Value: {count}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => dispatch(increment())}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => dispatch(decrement())}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallButton}
          onPress={() => dispatch(reset())}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { View, Text, Button } from 'react-native';
import React from 'react';
import { create } from 'zustand';
import BaseScreen from '../../components/BaseScreen';

// simple store
type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const useCounterStore = create<CounterState>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set(state => ({ count: (state.count = 0) })),
}));

export default function LearningTopic25() {
  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);
  const reset = useCounterStore(state => state.reset);

  return (
    <BaseScreen title="Learning Topic 25">
      <Text style={{ fontSize: 20, marginBottom: 16 }}>
        Zustand Learning Demo
      </Text>

      <Text style={{ fontSize: 18 }}>Count: {count}</Text>

      <Button title="Increment" onPress={increment} />
      <View style={{ height: 8 }} />
      <Button title="Decrement" onPress={decrement} />
      <View style={{ height: 8 }} />
      <Button title="Reset" onPress={reset} />
    </BaseScreen>
  );
}

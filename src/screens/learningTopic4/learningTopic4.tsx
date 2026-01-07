import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import BaseScreen from '../../components/BaseScreen';

export default function LearningTopic4() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);

  const onChange = (_event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDatePicker = () => {
    setMode('date');
    setShow(true);
  };

  const showTimePicker = () => {
    setMode('time');
    setShow(true);
  };

  return (
    <BaseScreen title="Learning Topic 4">
      <Text style={styles.label}>Selected Value</Text>
      <Text style={styles.value}>
        {date.toLocaleDateString()} | {date.toLocaleTimeString()}
      </Text>

      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.buttonText}>Open Date Picker</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={showTimePicker}>
        <Text style={styles.buttonText}>Open Time Picker</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={onChange}
        />
      )}
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  label: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    marginTop: 6,
    fontSize: 16,
    color: '#555',
  },
  button: {
    marginTop: 16,
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

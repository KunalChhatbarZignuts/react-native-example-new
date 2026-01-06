import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseScreen from '../../components/BaseScreen';

export default function LearningTopic2() {
  return (
    <BaseScreen title="Learning Topic 2">
      {/* flexDirection: row */}
      <Text style={styles.title}>1️⃣ flexDirection: row</Text>
      <View style={[styles.boxContainer, { flexDirection: 'row' }]}>
        <View style={[styles.box, { backgroundColor: '#EF5350' }]} />
        <View style={[styles.box, { backgroundColor: '#66BB6A' }]} />
        <View style={[styles.box, { backgroundColor: '#42A5F5' }]} />
      </View>

      {/* flexDirection: column */}
      <Text style={styles.title}>2️⃣ flexDirection: column</Text>
      <View style={[styles.boxContainer, { flexDirection: 'column' }]}>
        <View style={[styles.box, { backgroundColor: '#EF5350' }]} />
        <View style={[styles.box, { backgroundColor: '#66BB6A' }]} />
        <View style={[styles.box, { backgroundColor: '#42A5F5' }]} />
      </View>

      {/* justifyContent */}
      <Text style={styles.title}>3️⃣ justifyContent: space-between</Text>
      <View
        style={[
          styles.boxContainer,
          { flexDirection: 'row', justifyContent: 'space-between' },
        ]}
      >
        <View style={[styles.box, { backgroundColor: '#EF5350' }]} />
        <View style={[styles.box, { backgroundColor: '#66BB6A' }]} />
        <View style={[styles.box, { backgroundColor: '#42A5F5' }]} />
      </View>

      {/* alignItems */}
      <Text style={styles.title}>4️⃣ alignItems: center</Text>
      <View style={[styles.alignContainer, { alignItems: 'center' }]}>
        <View style={[styles.smallBox, { backgroundColor: '#AB47BC' }]} />
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '700',
  },
  boxContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ECEFF1',
    borderRadius: 8,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
  alignContainer: {
    marginTop: 10,
    height: 120,
    backgroundColor: '#ECEFF1',
    borderRadius: 8,
    justifyContent: 'center',
  },
  smallBox: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
});

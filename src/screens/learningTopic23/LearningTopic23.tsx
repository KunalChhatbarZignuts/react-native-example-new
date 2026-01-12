import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import { usePdfPicker } from '../../hooks/usePdfUpload';

export default function LearningTopic23() {
  const { pickPdf, pdf, error } = usePdfPicker();
  console.log(pdf?.uri);

  return (
    <BaseScreen title="Learning Topic 23">
      <Button title="Pick PDF" onPress={pickPdf} />

      {error && <Text style={styles.error}>{error}</Text>}

      {pdf && (
        <View style={styles.previewContainer}>
          <Text style={styles.fileName}>{pdf.name}</Text>
        </View>
      )}
    </BaseScreen>
  );
}
const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    marginTop: 16,
  },
  fileName: {
    fontWeight: '600',
    marginBottom: 8,
  },
  error: {
    color: 'red',
    marginTop: 8,
  },
});

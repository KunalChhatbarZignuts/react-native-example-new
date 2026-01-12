import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import BaseScreen from '../../components/BaseScreen';

export default function LearningTopic18() {
  return (
    <BaseScreen title="Learning Topic 18">
      <WebView
        source={{ uri: 'https://www.google.com' }}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator size="large" style={styles.loader} />
        )}
        javaScriptEnabled
        domStorageEnabled
      />
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import i18n from '../../localization/i18n';

export default function LearningTopic19() {
  const [, setRefresh] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.locale = lang;
    setRefresh(prev => !prev); // force re-render
  };

  return (
    <BaseScreen title="Learning Topic 19">
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        {i18n.t('welcome')}
      </Text>

      <Button title="English" onPress={() => changeLanguage('en')} />
      <View style={{ height: 10 }} />
      <Button title="Hindi" onPress={() => changeLanguage('hi')} />
    </BaseScreen>
  );
}

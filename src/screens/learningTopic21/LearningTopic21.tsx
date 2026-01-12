import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import { useTheme } from '../../context/ThemeProvider';

const LearningTopic21: React.FC = () => {
  const { theme, themeMode, setThemeMode } = useTheme();

  // Theme options
  const options: { label: string; value: 'light' | 'dark' | 'system' }[] = [
    { label: 'Light Mode', value: 'light' },
    { label: 'Dark Mode', value: 'dark' },
    { label: 'System Default', value: 'system' },
  ];

  return (
    <BaseScreen title="Learning Topic 21">
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.text, { color: theme.text }]}>
          Current Theme Mode: {themeMode}
        </Text>

        {options.map(option => (
          <TouchableOpacity
            key={option.value}
            style={styles.radioContainer}
            onPress={() => setThemeMode(option.value)}
          >
            <View
              style={[
                styles.radioCircle,
                {
                  borderColor: theme.text,
                },
              ]}
            >
              {themeMode === option.value && (
                <View
                  style={[styles.selectedRb, { backgroundColor: theme.text }]}
                />
              )}
            </View>
            <Text style={[styles.radioText, { color: theme.text }]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </BaseScreen>
  );
};

export default LearningTopic21;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

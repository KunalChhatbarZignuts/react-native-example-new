import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
interface BackButtonProps {
  color?: string;
  size?: number;
  text?: string; // optional text like "Back"
  style?: object;
}

const BackButton: React.FC<BackButtonProps> = ({
  color = '#000',
  size = 20,
  text,
  style,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => navigation.goBack()}
    >
      <Icon name="chevron-back" color={color} size={size} />
      {text && <Text style={[styles.text, { color }]}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default BackButton;

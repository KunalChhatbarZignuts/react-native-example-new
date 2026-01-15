import React from 'react';
import { XStack, Input, Label, YStack, Text } from 'tamagui';
import Icon from 'react-native-vector-icons/Ionicons';

export const EmailInput = ({ value, onChangeText, error }: any) => (
  <YStack gap="$1.5">
    <Label color="$color">Email</Label>
    <XStack
      alignItems="center"
      px="$3"
      borderWidth={1}
      borderColor={error ? '$red10' : '$borderColor'}
      borderRadius="$4"
      backgroundColor="$background"
      focusStyle={{
        borderColor: error ? '$red10' : '$blue10',
        borderWidth: 1.5,
      }}
    >
      <Icon name="mail-outline" size={20} color={error ? '#ff4d4f' : '#888'} />
      <Input
        flex={1}
        placeholder="you@example.com"
        value={value}
        onChangeText={onChangeText}
        borderWidth={0}
        backgroundColor="transparent"
        focusStyle={{ borderWidth: 0 }}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </XStack>
    {error && (
      <Text color="$red10" fontSize="$2" marginLeft="$1">
        {error}
      </Text>
    )}
  </YStack>
);

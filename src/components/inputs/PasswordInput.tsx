import React, { useState } from 'react';
import { XStack, Input, Label, YStack, Button, Text } from 'tamagui';
import Icon from 'react-native-vector-icons/Ionicons';

export const PasswordInput = ({ value, onChangeText, error }: any) => {
  const [show, setShow] = useState(false);

  return (
    <YStack gap="$1.5">
      <Label color="$color">Password</Label>
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
        <Icon
          name="lock-closed-outline"
          size={20}
          color={error ? '#ff4d4f' : '#888'}
        />
        <Input
          flex={1}
          placeholder="••••••••"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!show}
          borderWidth={0}
          backgroundColor="transparent"
          focusStyle={{ borderWidth: 0 }}
        />
        <Button
          chromeless
          padding={0}
          onPress={() => setShow(!show)}
          icon={
            <Icon
              name={show ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color="#888"
            />
          }
        />
      </XStack>
      {error && (
        <Text color="$red10" fontSize="$2" marginLeft="$1">
          {error}
        </Text>
      )}
    </YStack>
  );
};

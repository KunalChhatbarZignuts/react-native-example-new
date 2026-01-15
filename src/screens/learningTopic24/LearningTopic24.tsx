import React from 'react';
import { YStack, H1, Text, Form, Button } from 'tamagui';
import BaseScreen from '../../components/BaseScreen';
import { EmailInput } from '../../components/inputs/EmailInput';
import { PasswordInput } from '../../components/inputs/PasswordInput';
import { useLearningTopic24Form } from './hooks/useLearningTopic24Form';

const LearningTopic24 = () => {
  const {
    email,
    password,
    errors,
    handleEmailChange,
    handlePasswordChange,
    handleSignIn,
  } = useLearningTopic24Form();

  return (
    <BaseScreen title="Sign In">
      <YStack
        flex={1}
        padding="$4"
        alignItems="center"
        justifyContent="center"
        gap="$4"
      >
        <YStack alignItems="center" marginBottom="$6">
          <H1>Welcome Back</H1>
          <Text color="$color10" fontSize="$4">
            Sign in to continue
          </Text>
        </YStack>

        <Form width="100%" maxWidth={380} gap="$4">
          <EmailInput
            value={email}
            onChangeText={handleEmailChange}
            error={errors.email}
          />

          <PasswordInput
            value={password}
            onChangeText={handlePasswordChange}
            error={errors.password}
          />

          <Form.Trigger asChild>
            <Button
              themeInverse
              size="$5"
              marginTop="$2"
              onPress={handleSignIn}
            >
              Sign In
            </Button>
          </Form.Trigger>
        </Form>
      </YStack>
    </BaseScreen>
  );
};

export default LearningTopic24;

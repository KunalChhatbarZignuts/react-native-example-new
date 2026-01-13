import React from 'react';
import {
  Text,
  YStack,
  H1,
  Separator,
  XStack,
  Input,
  Button,
  Label,
  Form,
} from 'tamagui';
import BaseScreen from '../../components/BaseScreen';
import CustomGoogleButton from '../../components/CustomGoogleButton';
import CustomAppleButton from '../../components/CustomAppleButton';

const LearningTopic24 = () => {
  // We keep local state only for controlled inputs (Tamagui Form doesn't require it, but it's cleaner for showing values)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Very simple client-side validation function
  const validateForm = () => {
    const errors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleSubmit = (data: { email: string; password: string }) => {
    console.log('Form submitted:', data);
    // Here you would call your real auth function
    // e.g. signInWithEmailAndPassword(auth, data.email, data.password)
  };

  const handleForgotPassword = () => {
    console.log('Forgot password pressed');
  };

  return (
    <BaseScreen title="Sign In">
      <YStack
        flex={1}
        padding="$4"
        alignItems="center"
        justifyContent="center"
        gap="$4"
        backgroundColor="$background"
      >
        <XStack></XStack>
        <YStack alignItems="center" marginBottom="$6">
          <H1 color="$color" size="$10">
            Welcome Back
          </H1>
          <Text color="$color10" fontSize="$4" marginTop="$2">
            Sign in to continue
          </Text>
        </YStack>

        <YStack width="100%" maxWidth={380} gap="$3">
          <CustomGoogleButton />
          <CustomAppleButton />
        </YStack>

        <XStack
          width="100%"
          maxWidth={380}
          alignItems="center"
          gap="$3"
          marginVertical="$3"
        >
          <Separator borderColor="$borderColor" flex={1} />
          <Text color="$color10">or</Text>
          <Separator borderColor="$borderColor" flex={1} />
        </XStack>

        <Form
          width="100%"
          maxWidth={380}
          gap="$4"
          onSubmit={() => {
            const errors = validateForm();

            if (Object.keys(errors).length > 0) {
              // Tamagui Form will show errors if you use trigger / setError pattern
              // For simplicity we just log here – in real app use setError from form context
              console.log('Validation errors:', errors);
              return;
            }

            handleSubmit({ email, password });
          }}
        >
          {/* Email Field */}
          <YStack gap="$1.5">
            <Label htmlFor="email-field" color="$color">
              Email
            </Label>
            <Input
              id="email-field"
              placeholder="you@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              size="$4"
            />
          </YStack>

          {/* Password Field */}
          <YStack gap="$1.5">
            <Label htmlFor="password-field" color="$color">
              Password
            </Label>
            <Input
              id="password-field"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              size="$4"
            />
          </YStack>

          {/* Submit Button – triggers form validation */}
          <Form.Trigger asChild>
            <Button theme="dark" size="$5" marginTop="$2">
              Sign In
            </Button>
          </Form.Trigger>

          {/* Simple "Forgot password" link */}
          <XStack justifyContent="center" marginTop="$2">
            <Text
              color="$blue10"
              fontSize="$3"
              textDecorationLine="underline"
              onPress={handleForgotPassword}
            >
              Forgot password?
            </Text>
          </XStack>

          {/* Optional: show errors manually after submit attempt */}
          {/* You can use formState.isSubmitted + custom logic or integrate setError */}
        </Form>
      </YStack>
    </BaseScreen>
  );
};

export default LearningTopic24;

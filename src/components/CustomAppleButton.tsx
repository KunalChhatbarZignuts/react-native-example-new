import React from 'react';
import { Button, Image, Text, XStack } from 'tamagui';
import appleAuth from '@invertase/react-native-apple-authentication';
import { Platform } from 'react-native';

const CustomAppleButton = () => {
  const signInWithApple = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      const { identityToken, user } = appleAuthRequestResponse;

      if (!identityToken) {
        throw new Error('Apple Sign-In failed - no identity token');
      }

      console.log('Apple User:', user);
      console.log('Apple Token:', identityToken);

      // 👉 Send identityToken to backend / Firebase / Supabase
    } catch (error) {
      console.error('Apple Sign-In Error:', error);
    }
  };

  if (Platform.OS !== 'ios') return null;

  return (
    <Button
      size="$5"
      color="white"
      onPress={signInWithApple}
      borderRadius="$4"
      hoverStyle={{ opacity: 0.9 }}
      pressStyle={{ scale: 0.98 }}
      width="100%"
      maxWidth={360}
      variant="outlined"
      justifyContent="center"
    >
      <XStack alignItems="center" gap="$3">
        <Image
          source={require('../../assets/apple-logo.png')}
          width={22}
          height={22}
          resizeMode="contain"
        />
        <Text fontWeight="600" fontSize="$5">
          Continue with Apple
        </Text>
      </XStack>
    </Button>
  );
};

export default CustomAppleButton;

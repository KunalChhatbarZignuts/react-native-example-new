import React from 'react';
import { Button, Image, Text, XStack } from 'tamagui';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const CustomGoogleButton = () => {
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info:', userInfo);
      // → send idToken to your backend / supabase / firebase etc.
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <Button
      size="$5" // adjust: $4, $5, $6...
      color="white"
      onPress={signInWithGoogle}
      borderRadius="$4"
      hoverStyle={{ opacity: 0.9 }}
      pressStyle={{ scale: 0.98 }}
      width="100%"
      variant="outlined"
      maxWidth={360}
      justifyContent="center"
    >
      <XStack alignItems="center" gap="$3">
        <Image
          source={{ uri: require('../../assets/google-logo.png') }} // or http url
          width={24}
          height={24}
          resizeMode="contain"
        />
        <Text fontWeight="600" fontSize="$5">
          Continue with Google
        </Text>
      </XStack>
    </Button>
  );
};

export default CustomGoogleButton;

import React from 'react';
// 1. Import from @tamagui/core (or tamagui)
import { Text, YStack, H1 } from 'tamagui';
import BaseScreen from '../../components/BaseScreen';

const LearningTopic24 = () => {
  return (
    <BaseScreen title="Learning Topic 24">
      {/* 2. YStack is like a View with flex-direction: column */}
      <YStack
        flex={1}
        padding="$4"
        alignItems="center" // Use full name instead of ai
        justifyContent="center" // Use full name instead of jc
        gap="$2"
      >
        {/* content */}
        <H1 color="$primary">Topic 24</H1>

        <Text color="$color" fontSize="$4">
          Welcome to your Tamagui-powered screen!
        </Text>
      </YStack>
    </BaseScreen>
  );
};

export default LearningTopic24;

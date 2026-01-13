import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TamaguiProvider } from '@tamagui/core';
import Toast from 'react-native-toast-message';
import { getApps } from '@react-native-firebase/app';
import AppNavigator from './src/services/navigation/AppNavigator';
import { ThemeProvider } from './src/context/ThemeProvider';
import tamaguiConfig from './tamagui.config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // Check Firebase initialization
    if (__DEV__) {
      console.log('Firebase apps initialized:', getApps().length);
    }
  }, []);

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <SafeAreaProvider>
                <StatusBar
                  // Logic: If dark mode, use light text. If light mode, use dark text.
                  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                  backgroundColor="transparent"
                  translucent
                />
                <AppNavigator />
                <Toast />
              </SafeAreaProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}

export default App;

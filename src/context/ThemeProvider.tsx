import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

// Define Theme type
type Theme = {
  background: string;
  text: string;
};

// Define possible theme modes
type ThemeMode = 'light' | 'dark' | 'system';

// Define context type
type ThemeContextType = {
  theme: Theme;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
};

// Light & Dark theme objects
const lightTheme: Theme = {
  background: '#ffffff',
  text: '#000000',
};

const darkTheme: Theme = {
  background: '#121212',
  text: '#ffffff',
};

// Create context with default empty values
const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  themeMode: 'system',
  setThemeMode: () => {},
});

// Props type for provider
type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemScheme = useColorScheme(); // 'light' | 'dark' | null
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');

  const theme: Theme =
    themeMode === 'system'
      ? systemScheme === 'dark'
        ? darkTheme
        : lightTheme
      : themeMode === 'dark'
      ? darkTheme
      : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = (): ThemeContextType => useContext(ThemeContext);

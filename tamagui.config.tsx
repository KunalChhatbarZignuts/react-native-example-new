// tamagui.config.ts
import { createTamagui } from 'tamagui';
import { config as defaultConfig } from '@tamagui/config/v3';

// 1. Extend the preset config
const appConfig = {
  ...defaultConfig,
  // Add your customizations here, e.g.:
  // themes: { ...defaultConfig.themes, yourCustomTheme: { ... } },
  // tokens: { ...defaultConfig.tokens, color: { ... } },
  // fonts: { ... },
  // animations: { ... },
  // shorthands: { ... },
  // media: { ... },
  // etc.

  // If you really need to disable or override font languages (rare):
  // fontLanguages: {},
};

// 2. Create the final config
export const tamaguiConfig = createTamagui(appConfig);

// 3. Extract type for use elsewhere
export type AppConfig = typeof tamaguiConfig;

// 4. Augment Tamagui's module for full intellisense (themes, shorthands, etc.)
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

// Optional: Export default for easier imports
export default tamaguiConfig;

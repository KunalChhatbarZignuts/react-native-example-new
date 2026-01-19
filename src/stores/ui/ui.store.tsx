import { create } from 'zustand';

interface UIState {
  isDarkMode: boolean;
  isBottomSheetOpen: boolean;

  toggleTheme: () => void;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
}

export const useUIStore = create<UIState>(set => ({
  isDarkMode: false,
  isBottomSheetOpen: false,

  toggleTheme: () => set(state => ({ isDarkMode: !state.isDarkMode })),

  openBottomSheet: () => set({ isBottomSheetOpen: true }),

  closeBottomSheet: () => set({ isBottomSheetOpen: false }),
}));

// this is like a hook that we are useing this on UI screens
// it is hook

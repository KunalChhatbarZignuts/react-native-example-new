import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthState } from './auth.types';
import { AuthActions } from './auth.actions';

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  persist(
    set => ({
      user: null,
      token: null,
      isLoading: false,

      login: (user, token) =>
        set({
          user,
          token,
          isLoading: false,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
        }),

      setLoading: value => set({ isLoading: value }),
    }),
    {
      name: 'auth-storage',

      // ✅ FIX: use JSON storage wrapper
      storage: createJSONStorage(() => AsyncStorage),

      // ✅ OPTIONAL (best practice)
      partialize: state => ({
        user: state.user,
        token: state.token,
      }),
    },
  ),
);

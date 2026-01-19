import { User } from './auth.types';

export interface AuthActions {
  login: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (value: boolean) => void;
}

// this is action that defin what we do on the actula function

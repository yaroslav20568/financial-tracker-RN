import { createContext, useContext } from 'react';

export interface IAuthContext {
  token: string | null;
  isOnboardingCompleted: boolean;
  isLoading: boolean;
  setToken: (token: string | null) => Promise<void>;
  refreshAuth: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
};

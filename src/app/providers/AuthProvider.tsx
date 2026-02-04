import React, { useState, useEffect, useCallback, ReactNode } from 'react';

import { AuthContext } from '@/entities';
import { storageService } from '@/shared';

interface IProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setTokenState] = useState<string | null>(null);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  const refreshAuth = useCallback(async () => {
    const userToken = await storageService.get<string>('accessToken');
    const isOnboarding = await storageService.get<boolean>(
      'isCompletedOnbording'
    );

    setTokenState(userToken);
    setIsOnboardingCompleted(!!isOnboarding);
  }, []);

  const setToken = useCallback(async (newToken: string | null) => {
    if (newToken) {
      await storageService.set('accessToken', newToken);
    } else {
      await storageService.remove('accessToken');
    }

    setTokenState(newToken);
  }, []);

  useEffect(() => {
    refreshAuth().finally(() => setIsLoading(false));
  }, [refreshAuth]);

  return (
    <AuthContext.Provider
      value={{ token, isOnboardingCompleted, isLoading, setToken, refreshAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

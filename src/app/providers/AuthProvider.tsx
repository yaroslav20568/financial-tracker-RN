import React, { useState, useEffect, useCallback, ReactNode } from 'react';

import { AuthContext, ITokens, sessionUtils } from '@/entities';
import { storageService } from '@/shared';

interface IProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setTokenState] = useState<string | null>(null);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  const refreshAuth = useCallback(async () => {
    const { accessToken } = await sessionUtils.getTokens();
    const isOnboarding = await storageService.get<boolean>(
      'isCompletedOnbording'
    );

    setTokenState(accessToken);
    setIsOnboardingCompleted(!!isOnboarding);
  }, []);

  const setToken = useCallback(async (tokens: ITokens) => {
    if (tokens.accessToken && tokens.refreshToken) {
      await sessionUtils.saveTokens(tokens);
    } else {
      await sessionUtils.clearTokens();
    }

    setTokenState(tokens.accessToken);
  }, []);

  useEffect(() => {
    const handleLogout = () => {
      setTokenState(null);
    };

    sessionUtils.setLogoutCallback(handleLogout);

    return () => {
      sessionUtils.setLogoutCallback(() => {});
    };
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

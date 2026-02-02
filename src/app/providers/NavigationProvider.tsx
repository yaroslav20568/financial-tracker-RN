import React, { useState, useEffect } from 'react';

import { ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { AppNavigationDrawer, AuthNavigationStack } from '@/app/navigation';
import { CenterLayout, storageService } from '@/shared';

export const NavigationProvider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const userToken = await storageService.get<string>('token');
      const isOnboarding = await storageService.get<boolean>(
        'isCompletedOnbording'
      );

      setToken(userToken);
      setIsOnboardingCompleted(!!isOnboarding);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <CenterLayout>
        <ActivityIndicator size="large" />
      </CenterLayout>
    );
  }

  return (
    <NavigationContainer>
      {token ? (
        <AppNavigationDrawer />
      ) : (
        <AuthNavigationStack
          initialRouteName={isOnboardingCompleted ? 'Auth' : 'Onboarding'}
        />
      )}
    </NavigationContainer>
  );
};

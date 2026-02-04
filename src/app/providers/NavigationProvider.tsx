import React from 'react';

import { ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { AppNavigationDrawer, AuthNavigationStack } from '@/app/navigation';
import { useAuth } from '@/entities';
import { CenterLayout } from '@/shared';

export const NavigationProvider = () => {
  const { token, isOnboardingCompleted, isLoading } = useAuth();

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

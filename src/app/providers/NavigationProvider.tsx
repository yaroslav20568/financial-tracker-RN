import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppNavigationDrawer, AuthNavigationStack } from '@/app/navigation';
import { useAuth } from '@/entities';
import { CenterLayout, Loader } from '@/shared';

export const NavigationProvider = () => {
  const { token, isOnboardingCompleted, isLoading } = useAuth();

  if (isLoading) {
    return (
      <CenterLayout>
        <Loader />
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

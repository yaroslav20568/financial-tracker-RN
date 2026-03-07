import React, { useRef } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { useReactNavigationDevTools } from '@rozenite/react-navigation-plugin';

import { AppNavigationDrawer, AppNavigationStack } from '@/app/navigation';
import { useAuth } from '@/entities';
import { CenterLayout, Loader } from '@/shared';

export const NavigationProvider = () => {
  const { token, isOnboardingCompleted, isLoading } = useAuth();
  const navigationRef = useRef(null);

  useReactNavigationDevTools({ ref: navigationRef });

  if (isLoading) {
    return (
      <CenterLayout>
        <Loader />
      </CenterLayout>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {token ? (
        <AppNavigationDrawer />
      ) : (
        <AppNavigationStack
          initialRouteName={isOnboardingCompleted ? 'Auth' : 'Onboarding'}
        />
      )}
    </NavigationContainer>
  );
};

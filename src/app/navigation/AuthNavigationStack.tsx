import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen, OnboardingScreen } from '@/screens';

export type TAuthStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
};

const AuthStack = createStackNavigator<TAuthStackParamList>();

interface AuthNavigationStackProps {
  initialRouteName?: keyof TAuthStackParamList;
}

export const AuthNavigationStack = ({
  initialRouteName = 'Onboarding'
}: AuthNavigationStackProps) => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRouteName}
    >
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Auth" component={AuthScreen} />
    </AuthStack.Navigator>
  );
};

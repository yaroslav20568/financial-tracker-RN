import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen, OnboardingScreen } from '@screens/index';

export type TAuthStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
};

const AuthStack = createStackNavigator<TAuthStackParamList>();

export const AuthNavigationStack = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
      <AuthStack.Screen name="Auth" component={AuthScreen} />
    </AuthStack.Navigator>
  );
};

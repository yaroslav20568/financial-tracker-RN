import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions
} from '@react-navigation/stack';

import { AuthScreen, OnboardingScreen } from '@/screens';

export type TAuthStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
};

type TAuthStackItem = {
  name: keyof TAuthStackParamList;
  component: React.ComponentType<any>;
  options?: StackNavigationOptions;
};

const stackItems: Array<TAuthStackItem> = [
  { name: 'Onboarding', component: OnboardingScreen },
  { name: 'Auth', component: AuthScreen }
] as const;

const AuthStack = createStackNavigator<TAuthStackParamList>();

interface IProps {
  initialRouteName?: keyof TAuthStackParamList;
}

export const AppNavigationStack = ({
  initialRouteName = 'Onboarding'
}: IProps) => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRouteName}
    >
      {stackItems.map(screen => (
        <AuthStack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </AuthStack.Navigator>
  );
};

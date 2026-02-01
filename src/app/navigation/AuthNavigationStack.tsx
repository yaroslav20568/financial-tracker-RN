import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen } from '@screens/index';

export type TAuthStackParamList = {
  Auth: undefined;
};

const AuthStack = createStackNavigator<TAuthStackParamList>();

export const AuthNavigationStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Auth" component={AuthScreen} />
    </AuthStack.Navigator>
  );
};

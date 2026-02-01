import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from '@/screens';

export type TAppDrawerParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<TAppDrawerParamList>();

export const AppNavigationDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

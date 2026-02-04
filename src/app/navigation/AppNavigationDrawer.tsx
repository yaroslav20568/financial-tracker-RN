import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  DashboardScreen,
  MyTransactionsScreen,
  AccountScreen,
  CategoriesScreen,
  SourcesScreen
} from '@/screens';

export type TAppDrawerParamList = {
  Dashboard: undefined;
  MyTransactions: undefined;
  Account: undefined;
  Categories: undefined;
  Sources: undefined;
};

const Drawer = createDrawerNavigator<TAppDrawerParamList>();

export const AppNavigationDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="MyTransactions" component={MyTransactionsScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Sources" component={SourcesScreen} />
    </Drawer.Navigator>
  );
};

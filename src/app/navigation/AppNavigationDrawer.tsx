import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps
} from '@react-navigation/drawer';

import {
  DashboardScreen,
  MyTransactionsScreen,
  AccountScreen,
  CategoriesScreen,
  SourcesScreen
} from '@/screens';
import { colors } from '@/shared';
import { CustomDrawer } from '@/widgets';

export type TAppDrawerParamList = {
  Dashboard: undefined;
  MyTransactions: undefined;
  Account: undefined;
  Categories: undefined;
  Sources: undefined;
};

const Drawer = createDrawerNavigator<TAppDrawerParamList>();

const renderDrawerContent = (props: DrawerContentComponentProps) => (
  <CustomDrawer {...props} />
);

export const AppNavigationDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={renderDrawerContent}
      screenOptions={{
        drawerActiveBackgroundColor: colors.blue,
        drawerActiveTintColor: colors.white,
        drawerStyle: {
          width: 280
        },
        drawerItemStyle: {
          borderRadius: 8
        }
      }}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="MyTransactions" component={MyTransactionsScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Sources" component={SourcesScreen} />
    </Drawer.Navigator>
  );
};

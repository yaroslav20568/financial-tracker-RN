import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerHeaderProps
} from '@react-navigation/drawer';

import {
  DashboardScreen,
  MyTransactionsScreen,
  AccountScreen,
  CategoriesScreen,
  SourcesScreen
} from '@/screens';
import { colors, Icon } from '@/shared';
import { CustomDrawer, CustomHeaderDrawer, DrawerIconWrapper } from '@/widgets';

export type TAppDrawerParamList = {
  Dashboard: undefined;
  MyTransactions: undefined;
  Account: undefined;
  Categories: undefined;
  Sources: undefined;
};

const drawerItems = [
  {
    name: 'Dashboard',
    label: 'Dashboard',
    component: DashboardScreen,
    iconFamily: 'materialIcons',
    iconName: 'dashboard'
  },
  {
    name: 'MyTransactions',
    label: 'My Transactions',
    component: MyTransactionsScreen,
    iconFamily: 'fontAwesome6',
    iconName: 'money-bill-1-wave'
  },
  {
    name: 'Account',
    label: 'Account',
    component: AccountScreen,
    iconFamily: 'ionicons',
    iconName: 'person'
  },
  {
    name: 'Categories',
    label: 'Categories',
    component: CategoriesScreen,
    iconFamily: 'fontAwesome6',
    iconName: 'layer-group'
  },
  {
    name: 'Sources',
    label: 'Sources',
    component: SourcesScreen,
    iconFamily: 'materialIcons',
    iconName: 'source'
  }
] as const;

const Drawer = createDrawerNavigator<TAppDrawerParamList>();

const renderDrawerContent = (props: DrawerContentComponentProps) => (
  <CustomDrawer {...props} />
);

const renderDrawerHeder = (props: DrawerHeaderProps) => (
  <CustomHeaderDrawer {...props} />
);

export const AppNavigationDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={renderDrawerContent}
      screenOptions={{
        header: renderDrawerHeder,
        drawerActiveBackgroundColor: colors.blue,
        drawerActiveTintColor: colors.white,
        drawerStyle: { width: 280 },
        drawerItemStyle: { borderRadius: 8 }
      }}
    >
      {drawerItems.map(screen => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            drawerLabel: screen.label,
            // eslint-disable-next-line react/no-unstable-nested-components
            drawerIcon: ({ focused }) => (
              <DrawerIconWrapper>
                <Icon
                  family={screen.iconFamily}
                  name={screen.iconName}
                  color={focused ? colors.white : colors.blue}
                />
              </DrawerIconWrapper>
            )
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

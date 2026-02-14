import React from 'react';

import { View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps
} from '@react-navigation/drawer';

import { sessionUtils } from '@/entities';
import { colors, Icon, LogoHeader } from '@/shared';

import { DrawerIconWrapper } from './DrawerIconWrapper';
import { useStyles } from './styles';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const s = useStyles();

  const handleLogout = () => {
    sessionUtils.clearTokens();
  };

  return (
    <SafeAreaView style={s.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={s.contentContainer}
      >
        <View style={s.logoHeaderWhapper}>
          <LogoHeader size="s" />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Log out"
          onPress={handleLogout}
          inactiveTintColor={colors.red}
          style={s.logoutDrawerItem}
          // eslint-disable-next-line react/no-unstable-nested-components
          icon={() => (
            <DrawerIconWrapper>
              <Icon family="materialIcons" name="logout" color={colors.red} />
            </DrawerIconWrapper>
          )}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

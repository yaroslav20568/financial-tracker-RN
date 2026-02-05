import React from 'react';

import { View } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps
} from '@react-navigation/drawer';

import { colors, LogoHeader } from '@/shared';

import { useStyles } from './styles';

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  const s = useStyles();

  return (
    <DrawerContentScrollView {...props}>
      <View style={s.logoHeaderWhapper}>
        <LogoHeader size="s" />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Log out"
        onPress={() => {}}
        inactiveTintColor={colors.red}
      />
    </DrawerContentScrollView>
  );
};

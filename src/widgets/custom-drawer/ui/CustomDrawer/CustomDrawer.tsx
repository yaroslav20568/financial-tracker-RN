import React from 'react';

import { View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

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
          onPress={() => {}}
          inactiveTintColor={colors.red}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

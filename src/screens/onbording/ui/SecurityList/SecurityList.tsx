import React from 'react';

import { View, Text } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

import { Icon, useTheme } from '@/shared';

import { useStyles } from './styles';

export const SecurityList = () => {
  const s = useStyles();
  const { colors } = useTheme();

  const securityItems = [
    {
      icon: <Icon family="materialIcons" name="security" color={colors.blue} />,
      title: 'SSL Encrypted',
      text: 'Your data is protected with 256-bit encryption'
    },
    {
      icon: <Icon family="entypo" name="lock" color={colors.blue} />,
      title: 'Secure Storage',
      text: 'Financial data stored with bank-level security'
    },
    {
      icon: <Icon family="feather" name="eye" color={colors.blue} />,
      title: 'Privacy Protected',
      text: 'We never share your personal information'
    }
  ] as const;

  return (
    <View style={s.list}>
      {securityItems.map((security, index) => (
        <Animated.View
          key={security.title}
          style={s.benefit}
          entering={FadeInDown.delay(index * 500).duration(500)}
        >
          <View style={s.iconWrapper}>{security.icon}</View>
          <View style={s.textContent}>
            <Text style={s.title}>{security.title}</Text>
            <Text style={s.text}>{security.text}</Text>
          </View>
        </Animated.View>
      ))}
    </View>
  );
};

import React from 'react';

import { View, Text } from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';

import { Icon, colors } from '@/shared';

import { useStyles } from './styles';

const benefitItems = [
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

export const SecurityList = () => {
  const s = useStyles();

  return (
    <View style={s.list}>
      {benefitItems.map((benefit, index) => (
        <Animated.View
          key={index}
          style={s.benefit}
          entering={FadeInDown.delay(index * 500).duration(500)}
        >
          <View style={s.iconWrapper}>{benefit.icon}</View>
          <View style={s.textContent}>
            <Text style={s.title}>{benefit.title}</Text>
            <Text style={s.text}>{benefit.text}</Text>
          </View>
        </Animated.View>
      ))}
    </View>
  );
};

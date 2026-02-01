import React from 'react';

import { View, Text } from 'react-native';

import { useStyles } from './styles';

import { Icon, colors } from '@/shared';

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
        <View style={s.benefit} key={index}>
          <View style={s.iconWrapper}>{benefit.icon}</View>
          <View style={s.textContent}>
            <Text style={s.title}>{benefit.title}</Text>
            <Text style={s.text}>{benefit.text}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

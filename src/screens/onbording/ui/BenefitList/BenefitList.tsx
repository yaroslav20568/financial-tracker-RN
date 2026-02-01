import React from 'react';

import { View, Text } from 'react-native';

import { useStyles } from './styles';

import { Icon, colors } from '@/shared';

const benefitItems = [
  {
    icon: (
      <Icon family="fontAwesome6" name="arrow-trend-up" color={colors.blue} />
    ),
    title: 'Track Every Transaction',
    text: 'Monitor income and expenses across multiple accounts with detailed categorization and filtering.'
  },
  {
    icon: <Icon family="fontisto" name="world-o" color={colors.blue} />,
    title: 'Multi-Currency Support',
    text: 'Manage finances in USD, EUR, and BYN with automatic currency conversion and tracking.'
  },
  {
    icon: <Icon family="entypo" name="bar-graph" color={colors.blue} />,
    title: 'Insightful Analytics',
    text: 'Visualize spending patterns and financial trends with comprehensive dashboard analytics.'
  }
] as const;

export const BenefitList = () => {
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

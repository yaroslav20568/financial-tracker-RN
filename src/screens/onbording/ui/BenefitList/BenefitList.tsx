import React from 'react';

import { View, Text } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { useStyles } from './styles';

import { colors } from '@/shared/config/theme/colors';

const benefitItems = [
  {
    icon: <FontAwesome6 name="arrow-trend-up" size={20} color={colors.blue} />,
    title: 'Track Every Transaction',
    text: 'Monitor income and expenses across multiple accounts with detailed categorization and filtering.'
  },
  {
    icon: <Fontisto name="world-o" size={20} color={colors.blue} />,
    title: 'Multi-Currency Support',
    text: 'Manage finances in USD, EUR, and BYN with automatic currency conversion and tracking.'
  },
  {
    icon: <Entypo name="bar-graph" size={20} color={colors.blue} />,
    title: 'Insightful Analytics',
    text: 'Visualize spending patterns and financial trends with comprehensive dashboard analytics.'
  }
];

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

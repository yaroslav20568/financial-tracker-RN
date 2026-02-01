import React from 'react';

import { View, Text } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { colors } from '@/shared/config/theme/colors';

import { useStyles } from './styles';


const benefitItems = [
  {
    icon: <FontAwesome6 name="arrow-trend-up" size={20} color={colors.blue} />,
    title: 'SSL Encrypted',
    text: 'Your data is protected with 256-bit encryption'
  },
  {
    icon: <Fontisto name="world-o" size={20} color={colors.blue} />,
    title: 'Secure Storage',
    text: 'Financial data stored with bank-level security'
  },
  {
    icon: <Entypo name="bar-graph" size={20} color={colors.blue} />,
    title: 'Privacy Protected',
    text: 'We never share your personal information'
  }
];

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

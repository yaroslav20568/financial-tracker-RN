import React from 'react';

import { View, Text } from 'react-native';

import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';

import { Icon, colors } from '@/shared';

import { useStyles } from './styles';

export const Header = () => {
  const s = useStyles();

  return (
    <View style={s.header}>
      <Animated.View
        entering={FadeInLeft.duration(500).delay(100)}
        style={s.headerRow}
      >
        <View style={s.iconWrapper}>
          <Icon
            family="materialIcons"
            name="attach-money"
            size={30}
            color={colors.white}
          />
        </View>
        <Text style={s.title}>Finance Tracker</Text>
      </Animated.View>
      <Animated.Text
        entering={FadeInDown.duration(500).delay(200)}
        style={s.text}
      >
        Start Managing Your Finances
      </Animated.Text>
      <Animated.Text
        entering={FadeInDown.duration(500).delay(300)}
        style={s.description}
      >
        Create your secure account to track expenses, manage budgets, and
        achieve your financial goals.
      </Animated.Text>
    </View>
  );
};

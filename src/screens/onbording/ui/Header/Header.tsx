import React from 'react';

import { View, Text } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useStyles } from './styles';

import { colors } from '@/shared/config/theme/colors';

export const Header = () => {
  const s = useStyles();

  return (
    <View style={s.header}>
      <View style={s.headerRow}>
        <View style={s.iconWrapper}>
          <MaterialIcons name="attach-money" size={30} color={colors.white} />
        </View>
        <Text style={s.title}>Finance Tracker</Text>
      </View>
      <Text style={s.text}>Start Managing Your Finances</Text>
      <Text style={s.description}>
        Create your secure account to track expenses, manage budgets, and
        achieve your financial goals.
      </Text>
    </View>
  );
};

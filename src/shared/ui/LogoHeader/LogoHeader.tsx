import React from 'react';

import { View, Text } from 'react-native';

import { colors, Icon } from '@/shared';

import { useStyles } from './styles';

interface IProps {
  size?: 's' | 'l';
}

export const LogoHeader = ({ size = 'l' }: IProps) => {
  const s = useStyles();
  s.useVariants({ size });

  const iconSize = size === 's' ? 20 : 30;

  return (
    <View style={s.headerRow}>
      <View style={s.iconWrapper}>
        <Icon
          family="materialIcons"
          name="attach-money"
          size={iconSize}
          color={colors.white}
        />
      </View>
      <Text style={s.title}>Finance Tracker</Text>
    </View>
  );
};

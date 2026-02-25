import React from 'react';

import { Text, View } from 'react-native';

import { useTheme } from '@/shared/lib';
import { Icon } from '@/shared/ui';

import { useStyles } from './styles';

interface IProps {
  title: string;
}

export const ErrorData = ({ title }: IProps) => {
  const s = useStyles();
  const { colors } = useTheme();

  return (
    <View style={s.container}>
      <Icon family="materialIcons" name="error" size={40} color={colors.red} />
      <Text style={s.title}>{title}</Text>
    </View>
  );
};

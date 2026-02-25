import React from 'react';

import { Text, View } from 'react-native';

import { useTheme } from '@/shared/lib';
import { Icon } from '@/shared/ui';

import { useStyles } from './styles';

interface IProps {
  title: string;
  text?: string;
}

export const EmptyData = ({ title, text }: IProps) => {
  const s = useStyles();
  const { colors } = useTheme();

  return (
    <View style={s.container}>
      <Icon family="entypo" name="folder" size={40} color={colors.gray} />
      <Text style={s.title}>{title}</Text>
      {text && <Text style={s.text}>{text}</Text>}
    </View>
  );
};

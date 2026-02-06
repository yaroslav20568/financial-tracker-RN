import React, { ReactElement } from 'react';

import { View, Text } from 'react-native';

import { useStyles } from './styles';

interface IProps {
  icon: ReactElement;
  title: string;
  subtitle: string | undefined;
}

export const AccountDetailsItem = ({ icon, title, subtitle }: IProps) => {
  const s = useStyles();

  return (
    <View style={s.container}>
      <View style={s.iconWrapper}>{icon}</View>
      <View style={s.texts}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

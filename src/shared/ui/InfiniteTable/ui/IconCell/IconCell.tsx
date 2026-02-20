import React, { ReactNode } from 'react';

import { View, Text } from 'react-native';

import { useStyles } from './styles';

interface IProps {
  icon: ReactNode;
  title: string | number;
}

export const IconCell = ({ icon, title }: IProps) => {
  const s = useStyles();

  return (
    <View style={s.container}>
      {icon}
      <Text style={s.title}>{title}</Text>
    </View>
  );
};

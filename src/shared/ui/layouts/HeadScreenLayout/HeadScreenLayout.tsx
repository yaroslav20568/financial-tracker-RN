import React, { ReactNode } from 'react';

import { Text, View } from 'react-native';

import { useStyles } from './styles';

interface IProps {
  title: string;
  text: string;
  rightSlot?: ReactNode;
}

export const HeadScreenLayout = ({ title, text, rightSlot }: IProps) => {
  const s = useStyles();

  return (
    <View style={s.container}>
      <View style={s.texts}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.text}>{text}</Text>
      </View>
      {rightSlot}
    </View>
  );
};

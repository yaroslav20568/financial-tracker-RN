import React, { ReactNode } from 'react';

import { View, ViewStyle } from 'react-native';

import { useStyles } from './styles';

interface IProps {
  children: ReactNode;
  align?: Extract<
    ViewStyle['justifyContent'],
    'flex-start' | 'center' | 'flex-end' | 'space-between'
  >;
  gap?: number;
  marginTop?: number;
  style?: ViewStyle;
}

export const ButtonGroupLayout = ({
  children,
  align = 'flex-end',
  gap = 12,
  marginTop = 15,
  style
}: IProps) => {
  const s = useStyles();

  return (
    <View
      style={[s.container, { justifyContent: align, gap, marginTop }, style]}
    >
      {children}
    </View>
  );
};

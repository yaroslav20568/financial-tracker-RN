import React, { ReactNode } from 'react';

import { View } from 'react-native';

import { useStyles } from './styles';

interface IProps {
  header?: ReactNode;
  children: ReactNode;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

export const BorderLayout = ({
  header,
  children,
  paddingVertical = 20,
  paddingHorizontal = 20
}: IProps) => {
  const s = useStyles();
  const style = { paddingVertical, paddingHorizontal };

  return (
    <View style={s.container}>
      {header && <View style={[s.header, style]}>{header}</View>}
      <View style={[s.content(!!header), style]}>{children}</View>
    </View>
  );
};

import React, { ReactNode } from 'react';

import { View } from 'react-native';

import { TPadding } from '@/shared/model';

import { useStyles } from './styles';

interface IProps {
  header?: ReactNode;
  children: ReactNode;
  padding?: TPadding;
}

export const BorderLayout = ({
  header,
  children,
  padding = [20, 20]
}: IProps) => {
  const s = useStyles();
  const style = { paddingVertical: padding[0], paddingHorizontal: padding[1] };

  return (
    <View style={s.container}>
      {header && <View style={[s.header, style]}>{header}</View>}
      <View style={[s.content(!!header), style]}>{children}</View>
    </View>
  );
};

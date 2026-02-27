import React, { ReactNode } from 'react';

import { View } from 'react-native';

import { useStyles } from './styles';

interface IProps {
  header?: ReactNode;
  children: ReactNode;
}

export const BorderLayout = ({ header, children }: IProps) => {
  const s = useStyles();

  return (
    <View>
      {header && <View style={s.header}>{header}</View>}
      <View style={s.content(!!header)}>{children}</View>
    </View>
  );
};

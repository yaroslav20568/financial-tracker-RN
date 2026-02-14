import React, { ReactNode } from 'react';

import { View } from 'react-native';

import { useStyles } from './styles';

interface IProps {
  children: ReactNode;
}

export const DrawerIconWrapper = ({ children }: IProps) => {
  const s = useStyles();

  return <View style={s.container}>{children}</View>;
};

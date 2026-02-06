import React, { ReactElement } from 'react';

import { View } from 'react-native';

import { useStyles } from './styles';

interface IProps {
  children: ReactElement;
}

export const CenterLayout = ({ children }: IProps) => {
  const s = useStyles();

  return <View style={s.container}>{children}</View>;
};

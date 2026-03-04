import React from 'react';

import { View } from 'react-native';

import { IconButton, IIconProps } from '@/shared/ui';

import { useStyles } from './styles';

export interface ITableAction {
  iconData: Omit<IIconProps, 'style'>;
  onPress: () => void;
}

interface IProps {
  actions: Array<ITableAction>;
}

export const TableActions = ({ actions }: IProps) => {
  const s = useStyles();

  return (
    <View style={s.container}>
      {actions.map((action, index) => (
        <IconButton key={index} {...action.iconData} onPress={action.onPress} />
      ))}
    </View>
  );
};

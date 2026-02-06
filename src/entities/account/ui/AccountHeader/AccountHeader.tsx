import React from 'react';

import { View, Text } from 'react-native';

import { IAccount } from '@/entities/account/model';
import { colors, Icon } from '@/shared';

import { useStyles } from './styles';

interface IProps extends Partial<Pick<IAccount, 'id' | 'name'>> {}

export const AccountHeader = ({ id, name }: IProps) => {
  const s = useStyles();

  return (
    <View style={s.container}>
      <Icon family="octicons" name="person" size={35} color={colors.blue} />
      <View style={s.texts}>
        <Text style={s.name}>{name}</Text>
        <Text style={s.id}>Account ID: {id}</Text>
      </View>
    </View>
  );
};

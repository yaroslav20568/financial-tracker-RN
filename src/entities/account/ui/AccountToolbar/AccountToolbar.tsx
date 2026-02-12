import React from 'react';

import { View, Text } from 'react-native';

import { Button } from '@/shared';

import { useStyles } from './styles';

interface IProps {
  isShowEditForm: boolean;
  showEditForm: () => void;
}

export const AccountToolbar = ({ isShowEditForm, showEditForm }: IProps) => {
  const s = useStyles();

  return (
    <View style={s.container}>
      <Text style={s.title}>Account Information</Text>
      {!isShowEditForm && (
        <Button title="Edit Account" size="s" onPress={showEditForm} />
      )}
    </View>
  );
};

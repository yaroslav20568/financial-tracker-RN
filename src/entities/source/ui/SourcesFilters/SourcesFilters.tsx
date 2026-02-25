import React from 'react';

import { View } from 'react-native';

import { colors, IconButton, IOption, Select } from '@/shared';

import { useStyles } from './styles';

const sortByOptions: Array<IOption> = [
  { label: 'Name', value: 'name' },
  { label: 'Date Created', value: 'createdAt' }
];

export const SourcesFilters = () => {
  const s = useStyles();

  return (
    <View style={s.container}>
      <Select
        options={sortByOptions}
        isFirstDefaultValue
        onChange={() => console.log('onChange')}
      />
      <IconButton
        onPress={() => {}}
        family="feather"
        name="arrow-up"
        size={18}
        color={colors.gray}
        style={s.iconButton}
      />
    </View>
  );
};

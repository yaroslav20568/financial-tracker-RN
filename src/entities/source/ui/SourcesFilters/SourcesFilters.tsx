import React from 'react';

import { View } from 'react-native';

import {
  IconButton,
  IOption,
  IParamsRequest,
  Select,
  useTheme
} from '@/shared';

import { useStyles } from './styles';

const sortByOptions: Array<IOption> = [
  { label: 'Name', value: 'name' },
  { label: 'Date Created', value: 'createdAt' }
];

interface IProps {
  filters: Pick<IParamsRequest, 'sortBy' | 'sortDirection'>;
  onChange: (value: Pick<IParamsRequest, 'sortBy' | 'sortDirection'>) => void;
}

export const SourcesFilters = ({ filters, onChange }: IProps) => {
  const s = useStyles();
  const { colors } = useTheme();
  const { sortDirection } = filters;

  const handleSortBy = (value: string) =>
    onChange({ ...filters, sortBy: value });

  const toggleDirection = () => {
    onChange({
      ...filters,
      sortDirection: filters.sortDirection === 'ASC' ? 'DESC' : 'ASC'
    });
  };

  return (
    <View style={s.container}>
      <Select<string>
        options={sortByOptions}
        isFirstDefaultValue
        onChange={handleSortBy}
      />
      <IconButton
        onPress={toggleDirection}
        family="feather"
        name={sortDirection === 'ASC' ? 'arrow-up' : 'arrow-down'}
        size={18}
        color={colors.gray}
        style={s.iconButton}
      />
    </View>
  );
};

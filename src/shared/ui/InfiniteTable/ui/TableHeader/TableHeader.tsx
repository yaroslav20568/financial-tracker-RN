import React from 'react';

import { View, Text } from 'react-native';

import { ITableColumn } from '@/shared/ui/InfiniteTable';

import { useStyles } from './styles';

interface IProps<T> {
  columns: Array<ITableColumn<T>>;
}

export const TableHeader = <T,>({ columns }: IProps<T>) => {
  const s = useStyles();

  return (
    <View style={s.header}>
      {columns.map(col => (
        <Text key={String(col.key)} style={[s.thead, { width: col.width }]}>
          {col.title}
        </Text>
      ))}
    </View>
  );
};

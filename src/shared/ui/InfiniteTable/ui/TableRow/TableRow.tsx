import React from 'react';

import { View, Text } from 'react-native';

import { ITableColumn } from '@/shared/ui/InfiniteTable';

import { useStyles } from './styles';

interface IProps<T> {
  item: T;
  columns: Array<ITableColumn<T>>;
}

export const TableRow = <T,>({ item, columns }: IProps<T>) => {
  const s = useStyles();

  return (
    <View style={s.row}>
      {columns.map(col => (
        <View key={String(col.key)} style={{ width: col.width }}>
          {col.render ? (
            col.render(item)
          ) : (
            <Text style={s.cell} numberOfLines={1}>
              {String(item[col.key as keyof T])}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
};

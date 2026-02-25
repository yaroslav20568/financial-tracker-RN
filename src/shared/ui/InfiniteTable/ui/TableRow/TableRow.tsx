import React from 'react';

import { View, Text } from 'react-native';

import { withMemo } from '@/shared/lib';
import { ITableColumn } from '@/shared/ui/InfiniteTable';

import { useStyles } from './styles';

interface IProps<T> {
  item: T;
  columns: Array<ITableColumn<T>>;
}

const TableRowComponent = <T,>({ item, columns }: IProps<T>) => {
  const s = useStyles();

  return (
    <View style={s.row}>
      {columns.map(col => (
        <View key={String(col.key)} style={[s.column, { width: col.width }]}>
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

export const TableRow = withMemo(TableRowComponent);

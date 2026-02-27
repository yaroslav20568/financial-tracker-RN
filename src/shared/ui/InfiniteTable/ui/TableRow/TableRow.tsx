import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { withMemo } from '@/shared/lib';
import { ITableColumn } from '@/shared/ui/InfiniteTable';

import { useStyles } from './styles';

export interface ITableRowProps<T> {
  item: T;
  columns: Array<ITableColumn<T>>;
  onPress?: (item: T) => void;
}

const TableRowComponent = <T,>({
  item,
  columns,
  onPress
}: ITableRowProps<T>) => {
  const s = useStyles();

  const handleOnPress = () => onPress?.(item);

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      activeOpacity={onPress ? 0.5 : 1}
      style={s.row}
    >
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
    </TouchableOpacity>
  );
};

export const TableRow = withMemo(TableRowComponent);

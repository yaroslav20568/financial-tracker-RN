import React, { useMemo } from 'react';

import { View, Text, ScrollView, FlatList, ListRenderItem } from 'react-native';

import { useInfiniteQuery } from '@tanstack/react-query';

import { CenterLayout, Loader } from '@/shared/ui';

import { useStyles } from './styles';

export interface IColumn<T> {
  key: keyof T | string;
  title: string;
  width: number;
  render?: (item: T) => React.ReactNode;
}

interface IProps<T> {
  queryKey: Array<string>;
  fetchFn: (context: {
    pageParam?: any;
  }) => Promise<{ data: Array<T>; nextStart: number | undefined }>;
  columns: Array<IColumn<T>>;
  initialPageParam?: number;
}

export const InfiniteTable = <T extends Record<string, any>>({
  queryKey,
  fetchFn,
  columns,
  initialPageParam = 0
}: IProps<T>) => {
  const s = useStyles();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey,
      queryFn: fetchFn,
      initialPageParam,
      getNextPageParam: lastPage => lastPage.nextStart
    });

  const flatData = useMemo(
    () => data?.pages.flatMap(page => page.data) || [],
    [data]
  );

  const totalWidth = useMemo(
    () => columns.reduce((acc, col) => acc + col.width, 0),
    [columns]
  );

  const renderHeader = () => (
    <View style={s.header}>
      {columns.map(col => (
        <Text key={String(col.key)} style={[s.thead, { width: col.width }]}>
          {col.title}
        </Text>
      ))}
    </View>
  );

  const renderItem: ListRenderItem<T> = ({ item }) => (
    <View style={s.row}>
      {columns.map(col => (
        <View key={String(col.key)} style={{ width: col.width }}>
          {col.render ? (
            col.render(item)
          ) : (
            <Text style={s.cell} numberOfLines={1}>
              {item[col.key as keyof T]}
            </Text>
          )}
        </View>
      ))}
    </View>
  );

  if (isLoading) {
    return (
      <CenterLayout>
        <Loader />
      </CenterLayout>
    );
  }

  return (
    <View style={s.container}>
      <ScrollView horizontal>
        <FlatList
          data={flatData}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          stickyHeaderIndices={[0]}
          keyExtractor={item => item.id?.toString()}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage) fetchNextPage();
          }}
          onEndReachedThreshold={0.3}
          contentContainerStyle={{ minWidth: totalWidth }}
          ListFooterComponent={
            isFetchingNextPage ? (
              <View style={s.loaderWrapper}>
                <Loader />
              </View>
            ) : null
          }
        />
      </ScrollView>
    </View>
  );
};

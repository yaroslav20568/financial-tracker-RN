import React, { JSX, memo, ReactNode, useCallback, useMemo } from 'react';

import { View, ScrollView, FlatList, ListRenderItem } from 'react-native';

import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

import { CenterLayout, EmptyData, ErrorData, Loader } from '@/shared/ui';

import { useStyles } from './styles';
import { TableHeader, TableRow } from './ui';

export interface ITableColumn<T> {
  key: keyof T | string;
  title: string;
  width: number;
  render?: (item: T) => ReactNode;
}

interface IProps<T> {
  queryKey: Array<unknown>;
  fetchFn: (context: {
    pageParam?: any;
  }) => Promise<{ data: Array<T>; nextStart: number | undefined }>;
  columns: Array<ITableColumn<T>>;
  initialPageParam?: number;
}

const InfiniteTableComponent = <T extends Record<string, any>>({
  queryKey,
  fetchFn,
  columns,
  initialPageParam = 0
}: IProps<T>) => {
  const s = useStyles();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useInfiniteQuery({
    queryKey,
    queryFn: fetchFn,
    initialPageParam,
    getNextPageParam: lastPage => lastPage.nextStart,
    placeholderData: keepPreviousData
  });

  const flatData = useMemo(
    () => data?.pages.flatMap(page => page.data) || [],
    [data]
  );

  const totalWidth = useMemo(
    () => columns.reduce((acc, col) => acc + col.width, 0),
    [columns]
  );

  const renderHeader = useCallback(() => {
    return <TableHeader columns={columns} />;
  }, [columns]);

  const renderItem: ListRenderItem<T> = useCallback(
    ({ item }) => <TableRow item={item} columns={columns} />,
    [columns]
  );

  const keyExtractor = useCallback((item: T, index: number) => {
    return item?.id || index;
  }, []);

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <CenterLayout>
        <Loader />
      </CenterLayout>
    );
  }

  if (isError) {
    return <ErrorData title={error.message} />;
  }

  if (!flatData.length && !isError) {
    return (
      <EmptyData
        title="Table is empty"
        text="No data available. Please create a new record to see it here."
      />
    );
  }

  return (
    <View style={s.container}>
      <ScrollView horizontal contentContainerStyle={s.scrollContainer}>
        <FlatList
          data={flatData}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          stickyHeaderIndices={[0]}
          keyExtractor={keyExtractor}
          onEndReached={handleEndReached}
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

export const InfiniteTable = memo(InfiniteTableComponent) as <
  T extends Record<string, any>
>(
  props: IProps<T>
) => JSX.Element;

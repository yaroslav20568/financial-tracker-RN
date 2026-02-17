import React, { useMemo } from 'react';

import { View, Text, ScrollView, FlatList } from 'react-native';

import { useInfiniteQuery } from '@tanstack/react-query';

import { CenterLayout, Loader } from '@/shared/ui';

import { useStyles } from './styles';

const LIMIT = 20;
const columnWidth = 150;

const fetchUsers = async ({ pageParam = 0 }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=${pageParam}&_limit=${LIMIT}`
  );
  const data = await response.json();

  return {
    data,
    nextStart: data.length === LIMIT ? pageParam + LIMIT : undefined
  };
};

export const Table = () => {
  const s = useStyles();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['users'],
      queryFn: fetchUsers,
      initialPageParam: 0,
      getNextPageParam: lastPage => lastPage.nextStart
    });

  const flatData = useMemo(() => {
    return data?.pages.flatMap(page => page.data) || [];
  }, [data]);

  const renderHeader = () => (
    <View style={s.header}>
      <Text style={[s.thead, { width: columnWidth }]}>id</Text>
      <Text style={[s.thead, { width: columnWidth }]}>title</Text>
      <Text style={[s.thead, { width: columnWidth }]}>url</Text>
      <Text style={[s.thead, { width: columnWidth }]}>thumbnailUrl</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={s.row}>
      <Text style={[s.cell, { width: columnWidth }]}>{item.id}</Text>
      <Text style={[s.cell, { width: columnWidth }]}>{item.title}</Text>
      <Text style={[s.cell, { width: columnWidth }]}>{item.url}</Text>
      <Text style={[s.cell, { width: columnWidth }]}>{item.thumbnailUrl}</Text>
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
        <View style={s.tableMinWidth}>
          <FlatList
            data={flatData}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader}
            stickyHeaderIndices={[0]}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            onEndReached={() => {
              if (hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
              }
            }}
            onEndReachedThreshold={0.2}
            ListFooterComponent={
              isFetchingNextPage ? (
                <View style={s.loaderWrapper}>
                  <Loader />
                </View>
              ) : null
            }
            contentContainerStyle={{
              minWidth: columnWidth * 4
            }}
            maintainVisibleContentPosition={{
              minIndexForVisible: 0
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

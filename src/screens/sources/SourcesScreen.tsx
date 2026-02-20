import React, { useMemo } from 'react';

import { Text } from 'react-native';

import { ISource, sourceApi } from '@/entities';
import {
  DateUtils,
  HeadScreenLayout,
  ITableColumn,
  InfiniteTable,
  ScreenLayout
} from '@/shared';
import { useStyles } from '@/shared/ui/InfiniteTable/ui/TableRow/styles';

export const SourcesScreen = () => {
  const tableRowS = useStyles();

  const SOURCE_COLUMNS: Array<ITableColumn<ISource>> = useMemo(() => {
    return [
      {
        key: 'name',
        title: 'Name',
        width: 150,
        render: item => <Text>{item.name}</Text>
      },
      {
        key: 'transaction_count',
        title: 'Transactions',
        width: 150,
        render: item => <Text>{item.transaction_count || 0}</Text>
      },
      {
        key: 'created_at',
        title: 'Created',
        width: 150,
        render: item => (
          <Text style={tableRowS.cell}>
            {DateUtils.format(item.created_at, 'dd.MM.yyyy')}
          </Text>
        )
      },
      {
        key: 'updated_at',
        title: 'Updated',
        width: 150,
        render: item => (
          <Text style={tableRowS.cell}>
            {DateUtils.format(item.updated_at, 'dd.MM.yyyy')}
          </Text>
        )
      }
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSources = async ({ pageParam = 0 }) => {
    const response = await sourceApi.getSources({
      page: pageParam,
      size: 20
    });

    const { content, currentPage, totalPages } = response;

    return {
      data: content,
      nextStart: currentPage < totalPages - 1 ? currentPage + 1 : undefined
    };
  };

  return (
    <ScreenLayout isScrollable={false}>
      <HeadScreenLayout
        title="Source Management"
        text="Manage your transaction sources like bank accounts, cash, and credit cards"
      />
      <InfiniteTable<ISource>
        queryKey={['sources']}
        fetchFn={fetchSources}
        columns={SOURCE_COLUMNS}
      />
    </ScreenLayout>
  );
};

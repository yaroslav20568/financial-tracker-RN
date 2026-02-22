import React, { useMemo } from 'react';

import { Text } from 'react-native';

import { ISource, sourceApi } from '@/entities';
import {
  DateUtils,
  ITableAction,
  ITableColumn,
  Icon,
  IconCell,
  InfiniteTable,
  TableActions,
  colors
} from '@/shared';
import { useStyles } from '@/shared/ui/InfiniteTable/ui/TableRow/styles';

export const SourcesTable = () => {
  const tableRowS = useStyles();

  const rowActions: Array<ITableAction> = [
    {
      iconProps: {
        family: 'feather',
        name: 'edit'
      },
      onPress: () => {}
    },
    {
      iconProps: {
        family: 'materialIcons',
        name: 'delete-outline',
        color: colors.red
      },
      onPress: () => {}
    }
  ];

  const columns: Array<ITableColumn<ISource>> = useMemo(() => {
    return [
      {
        key: 'name',
        title: 'Name',
        width: 150,
        render: item => (
          <IconCell
            icon={<Icon family="ionicons" name="wallet" color={colors.blue} />}
            title={item.name}
          />
        )
      },
      {
        key: 'transaction_count',
        title: 'Transactions',
        width: 150,
        render: item => (
          <IconCell
            icon={
              <Icon
                family="fontAwesome6"
                name="money-bill-1-wave"
                color={colors.blue}
              />
            }
            title={item.transaction_count || 0}
          />
        )
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
      },
      {
        key: 'actions',
        title: 'Actions',
        width: 150,
        render: () => <TableActions actions={rowActions} />
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
    <InfiniteTable<ISource>
      queryKey={['sources']}
      fetchFn={fetchSources}
      columns={columns}
    />
  );
};
